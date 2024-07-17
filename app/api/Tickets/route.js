import dbConnect from "@/app/(lib)/dbConnect.js";
import Ticket from "@/app/(models)/Ticket.js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { formData } = body;
    if (!formData.title || !formData.description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 }
      );
    }

    const ticket = await Ticket.create(formData);
    return NextResponse.json(
      { message: "Ticket created successfully", ticket },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.findAll();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
