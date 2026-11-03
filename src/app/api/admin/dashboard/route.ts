import { NextResponse } from "next/server";
import connectDB from "@/config/mongodb";
import MoneyReceipt from "@/models/MoneyReceipt";
import Lead from "@/models/lead.model";
import Post from "@/models/Post";
import Comment from "@/models/Comment";
import Media from "@/models/Media";
import moment from "moment";

const parsePrice = (priceStr?: string) => {
  if (!priceStr) return 0;
  const clean = String(priceStr).replace(/[^0-9.]/g, "");
  const val = parseFloat(clean);
  return isNaN(val) ? 0 : val;
};

export async function GET() {
  try {
    await connectDB();

    const todayStart = moment().startOf("day").toDate();
    const todayEnd = moment().endOf("day").toDate();
    const monthStart = moment().startOf("month").toDate();

    // Fetch receipts
    const receipts = await MoneyReceipt.find({})
      .sort({ createdAt: -1 })
      .lean();

    // Financial aggregates
    let totalRevenue = 0;
    let todayRevenue = 0;
    let todayReceiptsCount = 0;
    let monthRevenue = 0;
    let monthReceiptsCount = 0;

    const paymentMap: Record<string, { count: number; total: number }> = {
      Cash: { count: 0, total: 0 },
      Bkash: { count: 0, total: 0 },
      Nagad: { count: 0, total: 0 },
      Bank: { count: 0, total: 0 },
    };

    const carTypeMap: Record<string, number> = {};

    receipts.forEach((r: any) => {
      const price = parsePrice(r.totalPrice);
      totalRevenue += price;

      const receiptDate = moment(r.date || r.createdAt);

      if (receiptDate.isSame(moment(), "day")) {
        todayRevenue += price;
        todayReceiptsCount += 1;
      }

      if (receiptDate.isSame(moment(), "month")) {
        monthRevenue += price;
        monthReceiptsCount += 1;
      }

      const method = r.paymentMethod || "Cash";
      if (!paymentMap[method]) {
        paymentMap[method] = { count: 0, total: 0 };
      }
      paymentMap[method].count += 1;
      paymentMap[method].total += price;

      const car = r.carType?.trim() || "Normal Ambulance";
      carTypeMap[car] = (carTypeMap[car] || 0) + 1;
    });

    // 7-day Revenue & Booking Trend
    const revenueTrend = [];
    for (let i = 6; i >= 0; i--) {
      const dayMoment = moment().subtract(i, "days");
      const dateStr = dayMoment.format("YYYY-MM-DD");
      const label = dayMoment.format("DD MMM");
      const dayName = dayMoment.format("ddd");

      const dayReceipts = receipts.filter((r: any) => {
        const rDate = moment(r.date || r.createdAt).format("YYYY-MM-DD");
        return rDate === dateStr;
      });

      const dayRev = dayReceipts.reduce(
        (sum: number, r: any) => sum + parsePrice(r.totalPrice),
        0
      );

      revenueTrend.push({
        date: label,
        day: dayName,
        revenue: dayRev,
        bookings: dayReceipts.length,
      });
    }

    // Top ambulance types array
    const ambulanceTypes = Object.entries(carTypeMap)
      .map(([type, count]) => ({ type, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Leads aggregates
    const [
      totalLeads,
      todayLeads,
      customerLeads,
      providerLeads,
      recentLeads,
    ] = await Promise.all([
      Lead.countDocuments({}),
      Lead.countDocuments({ createdAt: { $gte: todayStart, $lte: todayEnd } }),
      Lead.countDocuments({ leadType: "Customer" }),
      Lead.countDocuments({ leadType: "Provider" }),
      Lead.find({}).sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    // Posts aggregates
    const [
      totalPosts,
      publishedPosts,
      unpublishedPosts,
      recentPosts,
    ] = await Promise.all([
      Post.countDocuments({}),
      Post.countDocuments({ status: "Publish" }),
      Post.countDocuments({ status: "Unpublish" }),
      Post.find({})
        .sort({ createdAt: -1 })
        .limit(4)
        .select("postTitle slug image status createdAt readTime")
        .lean(),
    ]);

    // Comments & Media counts
    const [totalComments, totalMedia] = await Promise.all([
      Comment.countDocuments({}),
      Media.countDocuments({}),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        financials: {
          totalRevenue,
          todayRevenue,
          todayReceiptsCount,
          monthRevenue,
          monthReceiptsCount,
          totalReceipts: receipts.length,
          paymentMethods: paymentMap,
          ambulanceTypes,
          revenueTrend,
        },
        leads: {
          total: totalLeads,
          today: todayLeads,
          customer: customerLeads,
          provider: providerLeads,
          recent: recentLeads,
        },
        posts: {
          total: totalPosts,
          published: publishedPosts,
          unpublished: unpublishedPosts,
          recent: recentPosts,
        },
        comments: {
          total: totalComments,
        },
        media: {
          total: totalMedia,
        },
        recentReceipts: receipts.slice(0, 5),
      },
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to load dashboard data" },
      { status: 500 }
    );
  }
}
