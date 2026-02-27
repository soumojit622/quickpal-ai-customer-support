import connectToDatabase from "@/lib/db";
import SettingsModel from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { ownerId, businessName, supportEmail, knowledge } =
      await request.json();
    if (!ownerId) {
      return NextResponse.json(
        { error: "Owner ID is required" },
        { status: 400 },
      );
    }
    await connectToDatabase();
    const settings = await SettingsModel.findOneAndUpdate(
      { ownerId },
      { businessName, supportEmail, knowledge },
      { upsert: true, new: true },
    );
    return NextResponse.json(settings);
  } catch (error) {
    return new Response("Failed to process settings", { status: 500 });
  }
}
