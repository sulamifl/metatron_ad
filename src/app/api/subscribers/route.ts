import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }
    const locale = String(body.locale ?? "ru");
    const name = body.name ? String(body.name).trim() : null;

    // upsert — если уже подписан, обновляем
    await db.subscriber.upsert({
      where: { email },
      update: { locale, name },
      create: { email, locale, name },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/subscribers] error:", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
