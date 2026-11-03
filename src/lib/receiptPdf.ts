import jsPDF from "jspdf";
import moment from "moment";
import type { TReceipt } from "@/types/receip.type";

// Helper to convert an image URL (e.g. /logo.jpg) into a base64 Data URL
const loadImageAsBase64 = (
  url: string,
  alpha: number = 1.0
): Promise<string> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve("");
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || img.width || 300;
        canvas.height = img.naturalHeight || img.height || 300;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          if (alpha < 1.0) {
            ctx.globalAlpha = alpha;
          }
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/png"));
        } else {
          resolve(url);
        }
      } catch {
        resolve(url);
      }
    };
    img.onerror = () => resolve("");
    img.src = url;
  });
};

// SVG strings for header icons
const MAP_PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#0c2752" stroke="#0c2752" stroke-width="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#ffffff"/></svg>`;

const PHONE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#0c2752" stroke="#0c2752" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

const GLOBE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0c2752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;

const svgToPngDataUrl = (svgString: string): Promise<string> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve("");
      return;
    }
    const img = new Image();
    const blob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, 64, 64);
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL("image/png"));
        } else {
          URL.revokeObjectURL(url);
          resolve("");
        }
      } catch {
        URL.revokeObjectURL(url);
        resolve("");
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve("");
    };
    img.src = url;
  });
};

/**
 * Generates an official, 100% Vector PDF with Selectable Text.
 * Never pixelates or blurs on zoom because text and lines are true PDF vectors.
 */
export const generateReceiptPdf = async (
  receiptOrElementId: Partial<TReceipt> | string,
  fileName?: string
): Promise<boolean> => {
  let receipt: Partial<TReceipt> = {};

  if (typeof receiptOrElementId === "string") {
    // If element id passed, try reading data from DOM dataset or window if present
    const el = document.getElementById(receiptOrElementId);
    if (el && (el as any).__receiptData) {
      receipt = (el as any).__receiptData;
    }
  } else if (receiptOrElementId && typeof receiptOrElementId === "object") {
    receipt = receiptOrElementId;
  }

  // Pre-load assets in parallel
  const [logoBase64, watermarkBase64, signatureBase64, pinIcon, phoneIcon, globeIcon] =
    await Promise.all([
      loadImageAsBase64("/logo.jpg", 1.0),
      loadImageAsBase64("/logo.jpg", 0.20), // 20% opacity watermark so it is clearly and softly visible
      loadImageAsBase64("/signature.jpg", 1.0),
      svgToPngDataUrl(MAP_PIN_SVG),
      svgToPngDataUrl(PHONE_SVG),
      svgToPngDataUrl(GLOBE_SVG),
    ]);

  // Create A5 Landscape document: 210mm x 148mm
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a5",
    compress: true,
  });

  const pageWidth = 210;
  const pageHeight = 148;

  // 1. WATERMARK in center (drawn first so content sits on top)
  if (watermarkBase64) {
    const wmSize = 84;
    const wmX = (pageWidth - wmSize) / 2;
    const wmY = (pageHeight - wmSize) / 2 + 4;
    try {
      doc.addImage(watermarkBase64, "PNG", wmX, wmY, wmSize, wmSize);
    } catch (e) {
      console.warn("Watermark render fallback", e);
    }
  }

  // 2. DECORATIVE OUTER & INNER CHAMFERED BORDER
  // Outer rectangle
  doc.setDrawColor(30, 41, 59); // slate-800
  doc.setLineWidth(0.4);
  doc.rect(4, 4, pageWidth - 8, pageHeight - 8);

  // Inner chamfered border
  doc.setDrawColor(71, 85, 105); // slate-600
  doc.setLineWidth(0.25);
  const cut = 3.5;
  const x1 = 6.5;
  const y1 = 6.5;
  const x2 = pageWidth - 6.5;
  const y2 = pageHeight - 6.5;

  doc.lines(
    [
      [x2 - x1 - 2 * cut, 0], // Top edge
      [cut, cut], // Top-right corner cut
      [0, y2 - y1 - 2 * cut], // Right edge
      [-cut, cut], // Bottom-right corner cut
      [-(x2 - x1 - 2 * cut), 0], // Bottom edge
      [-cut, -cut], // Bottom-left corner cut
      [0, -(y2 - y1 - 2 * cut)], // Left edge
      [cut, -cut], // Top-left corner cut
    ],
    x1 + cut,
    y1,
    [1, 1],
    "S",
    true
  );

  // Corner tick accents
  doc.line(4, 8, 8, 4);
  doc.line(pageWidth - 4, 8, pageWidth - 8, 4);
  doc.line(4, pageHeight - 8, 8, pageHeight - 4);
  doc.line(pageWidth - 4, pageHeight - 8, pageWidth - 8, pageHeight - 4);

  // 3. TOP HEADER
  // Company Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14.5);
  doc.setTextColor(12, 39, 82); // #0c2752
  doc.text("SHIKDER AMBULANCE SERVICE", 12, 14.5);

  // Address
  if (pinIcon) {
    doc.addImage(pinIcon, "PNG", 12, 17.5, 3.2, 3.2);
  }
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("Address: ", 16.5, 20.2);
  const addrW = doc.getTextWidth("Address: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("Eskaton Road, Mogbazar, Dhaka-1217", 16.5 + addrW, 20.2);

  // Helpline
  if (phoneIcon) {
    doc.addImage(phoneIcon, "PNG", 12, 22.2, 3.2, 3.2);
  }
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("Helpline: ", 16.5, 24.8);
  const helpW = doc.getTextWidth("Helpline: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  doc.text("01713-260042, 01710060020", 16.5 + helpW, 24.8);

  // Website
  if (globeIcon) {
    doc.addImage(globeIcon, "PNG", 12, 26.8, 3.2, 3.2);
  }
  doc.setFont("helvetica", "bold");
  doc.setTextColor(12, 39, 82);
  doc.text("www.shikderambulance.com", 16.5, 29.5);

  // Right Logo
  if (logoBase64) {
    doc.addImage(logoBase64, "JPEG", 169, 8.5, 26, 26);
  }

  // 4. "MONEY RECEIPT" CENTERED BADGE
  const badgeW = 64;
  const badgeH = 7.5;
  const badgeX = (pageWidth - badgeW) / 2;
  const badgeY = 31.5;

  doc.setFillColor(237, 244, 251); // #edf4fb
  doc.setDrawColor(123, 162, 202); // #7ba2ca
  doc.setLineWidth(0.3);
  doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 1.2, 1.2, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(11, 30, 54);
  doc.text("MONEY RECEIPT", pageWidth / 2, badgeY + 5.2, { align: "center" });

  // 5. SL.No & DATE ROW
  const metaY = 43.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("SL.No: ", 12, metaY);
  const slW = doc.getTextWidth("SL.No: ");
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text(String(receipt.uid || "------"), 12 + slW, metaY);

  const dateStr = receipt.date
    ? moment(receipt.date).format("DD/MM/YYYY")
    : moment().format("DD/MM/YYYY");
  const dateValW = doc.getTextWidth(dateStr);
  const dateLblW = doc.getTextWidth("Date: ");
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("Date: ", 198 - dateValW - dateLblW, metaY);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(30, 41, 59);
  doc.text(dateStr, 198 - dateValW, metaY);

  // 6. MIDDLE LEDGER TABLE
  const tableX = 12;
  const tableW = 186;
  const colHalfW = 93;
  const tableStartY = 46.5;
  const rowH = 6.4;
  const totalTableH = rowH * 6;

  // Draw the entire table outer box (transparent background so watermark is visible through cells)
  doc.setDrawColor(51, 65, 85); // slate-700
  doc.setLineWidth(0.25);
  doc.rect(tableX, tableStartY, tableW, totalTableH, "S");

  // Horizontal dividing lines for 6 rows
  for (let i = 1; i < 6; i++) {
    doc.line(
      tableX,
      tableStartY + i * rowH,
      tableX + tableW,
      tableStartY + i * rowH
    );
  }

  // Vertical dividing lines for two-column rows (Row 2, Row 5, Row 6)
  doc.line(
    tableX + colHalfW,
    tableStartY + 1 * rowH,
    tableX + colHalfW,
    tableStartY + 2 * rowH
  ); // Row 2
  doc.line(
    tableX + colHalfW,
    tableStartY + 4 * rowH,
    tableX + colHalfW,
    tableStartY + 5 * rowH
  ); // Row 5
  doc.line(
    tableX + colHalfW,
    tableStartY + 5 * rowH,
    tableX + colHalfW,
    tableStartY + 6 * rowH
  ); // Row 6

  // Now render all row text cleanly without altering background fills
  let curY = tableStartY;

  // Row 1: Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Name: ", tableX + 3, curY + 4.5);
  const nameLblW = doc.getTextWidth("Name: ");
  doc.setFont("helvetica", "bold");
  doc.text(receipt.patientName || "", tableX + 3 + nameLblW, curY + 4.5);
  curY += rowH;

  // Row 2: Care of Name | Phone
  // Left: Care of Name
  doc.setFont("helvetica", "bold");
  doc.text("Care of Name: ", tableX + 3, curY + 4.5);
  const coLblW = doc.getTextWidth("Care of Name: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.careOfName || "", tableX + 3 + coLblW, curY + 4.5);
  // Right: Phone
  doc.setFont("helvetica", "bold");
  doc.text("Phone: ", tableX + colHalfW + 3, curY + 4.5);
  const phLblW = doc.getTextWidth("Phone: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.phone || "", tableX + colHalfW + 3 + phLblW, curY + 4.5);
  curY += rowH;

  // Row 3: Address
  doc.setFont("helvetica", "bold");
  doc.text("Address: ", tableX + 3, curY + 4.5);
  const addrLblW = doc.getTextWidth("Address: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.address || "", tableX + 3 + addrLblW, curY + 4.5);
  curY += rowH;

  // Row 4: Destination
  doc.setFont("helvetica", "bold");
  doc.text("Destination: ", tableX + 3, curY + 4.5);
  const destLblW = doc.getTextWidth("Destination: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.destination || "", tableX + 3 + destLblW, curY + 4.5);
  curY += rowH;

  // Row 5: Ambulance Type | Ambulance No
  // Left: Ambulance Type
  doc.setFont("helvetica", "bold");
  doc.text("Ambulance Type: ", tableX + 3, curY + 4.5);
  const atLblW = doc.getTextWidth("Ambulance Type: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.carType || "", tableX + 3 + atLblW, curY + 4.5);
  // Right: Ambulance No
  doc.setFont("helvetica", "bold");
  doc.text("Ambulance No: ", tableX + colHalfW + 3, curY + 4.5);
  const anLblW = doc.getTextWidth("Ambulance No: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.carNo || "", tableX + colHalfW + 3 + anLblW, curY + 4.5);
  curY += rowH;

  // Row 6: Service Type | Payment by
  // Left: Service Type
  doc.setFont("helvetica", "bold");
  doc.text("Service Type: ", tableX + 3, curY + 4.5);
  const stLblW = doc.getTextWidth("Service Type: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.serviceType || "", tableX + 3 + stLblW, curY + 4.5);
  // Right: Payment by
  doc.setFont("helvetica", "bold");
  doc.text("Payment by: ", tableX + colHalfW + 3, curY + 4.5);
  const pbLblW = doc.getTextWidth("Payment by: ");
  doc.setFont("helvetica", "normal");
  doc.text(receipt.paymentMethod || "", tableX + colHalfW + 3 + pbLblW, curY + 4.5);
  curY += rowH;

  // 7. TOTAL RENT HIGHLIGHTED DOUBLE BOX & IN WORD (Red Box Section)
  const rentY = curY + 3.2;
  const rentBoxW = 65;
  const rentBoxH = 9.2;

  // Outer border of double box
  doc.setDrawColor(51, 65, 85);
  doc.setLineWidth(0.25);
  doc.setFillColor(255, 255, 255);
  doc.rect(tableX, rentY, rentBoxW, rentBoxH, "FD");

  // Inner box with soft grey-blue fill
  doc.setFillColor(234, 239, 245); // #eaeff5
  doc.rect(tableX + 0.8, rentY + 0.8, rentBoxW - 1.6, rentBoxH - 1.6, "FD");

  // Rent Text inside box
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  const rentText = `Total Rent: ${receipt.totalPrice || "0"} /-`;
  doc.text(rentText, tableX + 3.5, rentY + 6.2);

  // In Word on the right
  const inWordX = tableX + rentBoxW + 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("In Word: ", inWordX, rentY + 5.8);
  const inWordLblW = doc.getTextWidth("In Word: ");
  doc.setFont("helvetica", "italic");
  doc.setTextColor(51, 65, 85);
  doc.text(receipt.amountInWord || "", inWordX + inWordLblW, rentY + 5.8);

  // 8. FOOTER SIGNATURES
  const lineY = 126;

  // Left: Received By
  doc.setDrawColor(71, 85, 105);
  doc.setLineDashPattern([0.8, 0.8], 0);
  doc.line(22, lineY, 68, lineY);
  doc.setLineDashPattern([], 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("Received By", 45, lineY + 5.5, { align: "center" });

  // Right: Authorized Signature
  if (signatureBase64) {
    doc.addImage(signatureBase64, "JPEG", 149, lineY - 15, 32, 14);
  }
  doc.setDrawColor(71, 85, 105);
  doc.setLineDashPattern([0.8, 0.8], 0);
  doc.line(142, lineY, 188, lineY);
  doc.setLineDashPattern([], 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text("Authorized Signature", 165, lineY + 5.5, { align: "center" });

  // Save the document
  const finalName = fileName || `Receipt_${receipt.uid || "shikder"}.pdf`;
  doc.save(finalName);
  return true;
};
