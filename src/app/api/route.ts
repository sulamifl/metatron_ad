import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Metatron.ad",
    status: "ok",
    type: "online media",
    languages: ["ru", "kk", "zh", "en"],
  });
}