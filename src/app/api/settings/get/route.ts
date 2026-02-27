import connectToDatabase from "@/lib/db";
import SettingsModel from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { ownerId } = await request.json();
    if (!ownerId) {
      return NextResponse.json(
        { error: "Owner ID is required" },
        { status: 400 },
      );
    }
    await connectToDatabase();
    const settings = await SettingsModel.findOne({ ownerId });
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process settings" },
      { status: 500 },
    );
  }
}
