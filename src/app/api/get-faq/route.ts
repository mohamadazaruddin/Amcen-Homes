import mongoose from "mongoose";
import { connectionStr } from "@/app/services/db";
import { NextResponse } from "next/server";
import Faq from "@/app/services/models/faq";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Faq.find({}).sort({ createdAt: -1 });
  } catch (error: any) {
    console.log(error);
  }
  return NextResponse.json(data);
}
