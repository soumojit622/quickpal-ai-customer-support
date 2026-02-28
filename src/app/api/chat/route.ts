import connectToDatabase from "@/lib/db";
import SettingsModel from "@/model/settings.model";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message, ownerId } = await request.json();
    if (!message || !ownerId) {
      return NextResponse.json("Missing required fields", { status: 400 });
    }
    await connectToDatabase();
    const setting = await SettingsModel.findOne({ ownerId });
    if (!setting) {
      return NextResponse.json("Settings not found for owner", { status: 404 });
    }

    const KNOWLEDGE = `business name: ${setting.businessName || "not provided"}
    support email: ${setting.supportEmail || "not provided"}
    knowledge: ${setting.knowledge || "not provided"}
    
    `;

    const prompt = `
You are an expert customer support assistant for this business. 
Use ONLY the information provided below to answer the customer's question. 
You may rephrase, summarize, or clarify the information, but do NOT add any new policies, prices, or promises. 
If the customer's question cannot be answered using the provided information, respond exactly with:
"Please contact support."

=== BUSINESS INFORMATION ===
${KNOWLEDGE}

=== CUSTOMER QUESTION ===
${message}

=== PROFESSIONAL RESPONSE ===
`;

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return NextResponse.json(response.text);
  } catch (error) {
    return NextResponse.json("Error processing request", { status: 500 });
  }
}
