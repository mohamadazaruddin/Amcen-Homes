import mongoose from "mongoose";
import { connectionStr } from "@/app/services/db";
import UserQueries from "@/app/services/models/userQueries";
import { NextResponse } from "next/server";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await UserQueries.find({}).sort({ createdAt: -1 });
  } catch (error: any) {
    console.log(error);
  }
  return NextResponse.json(data);
}
