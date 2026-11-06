import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const SEED = [
  {
    title: "Biofuel demand dynamics in APAC",
    summary: "Demand for bioethanol in the Asia-Pacific region is projected to grow 18–24% over 12 months based on analysis of 1,200+ publications.",
    confidence: 82,
    category: "energy",
    sources: 1200,
    isPremium: false,
  },
  {
    title: "FDI flow China → Kazakhstan",
    summary: "Chinese FDI into Kazakhstan's agro-industrial and energy sectors expected to increase in Q2–Q3. Key drivers identified across 930 sources.",
    confidence: 76,
    category: "finance",
    sources: 930,
    isPremium: false,
  },
  {
    title: "Rare earth metals pricing",
    summary: "Model indicates moderate price growth for neodymium and praseodymium over 6 months with 71% probability, correlated with China export quota policy.",
    confidence: 71,
    category: "trade",
    sources: 640,
    isPremium: true,
  },
];

export async function GET() {
  try {
    let count = await db.forecast.count();
    if (count === 0) {
      await db.forecast.createMany({ data: SEED });
      count = SEED.length;
    }
    const items = await db.forecast.findMany({ orderBy: { publishedAt: "desc" }, take: 20 });
    return NextResponse.json({ items, total: count });
  } catch (e) {
    console.error("[api/forecasts] error:", e);
    return NextResponse.json({ items: SEED, total: SEED.length });
  }
}
