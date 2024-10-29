import { connectionStr } from "@/app/services/db";
import mongoose from "mongoose";
import UserQueries from "@/app/services/models/userQueries";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      query,
      queryType,
      service,
      estimatedCost,
      constructionItems,
    } = await req.json();
    await mongoose.connect(connectionStr);
    const newQuery = new UserQueries({
      name,
      email,
      phone,
      query,
      queryType,
      service,
      estimatedCost,
      constructionItems,
    });
    const result = await newQuery.save();
    return NextResponse.json(result);
  } catch (error: any) {
    console.log(error);
  }
}
