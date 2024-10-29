import { connectionStr } from "@/app/services/db";
import mongoose from "mongoose";
import Faq from "@/app/services/models/faq";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { Question } = await req.json();
    await mongoose.connect(connectionStr);
    const newQuery = new Faq({
      Question,
    });
    const result = await newQuery.save();
    return NextResponse.json(result);
  } catch (error: any) {
    console.log(error);
  }
}
