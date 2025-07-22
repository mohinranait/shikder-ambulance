import connectDB from '@/config/mongodb';
import MoneyReceipt from '@/models/MoneyReceipt';
import { getAuthUser } from '@/services/isAuth';
import { NextRequest, NextResponse } from 'next/server';


export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }>  }
) {
  try {
    await connectDB();

    const decoded = await getAuthUser() as {id:string};
    if (!decoded?.id) {
        return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
        );
    }

    const {id:moneyId} = await params;
    const body = await req.json();
    const receipt = await MoneyReceipt.findByIdAndUpdate(
      moneyId,
      { ...body },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
        success: true,
        message: "Update money receipt",
        payload: { receipt },
    });


  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }>  }) {
  try {
    await connectDB();

    const user = await  getAuthUser() as {id:string};
    if (!user?.id) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
        );
    }

    const { id } = await params;
    const receipt = await MoneyReceipt.findByIdAndDelete(id);

     return NextResponse.json({
        success: true,
        message: "Money receipt deleted",
        payload: { receipt },
    });

   
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
