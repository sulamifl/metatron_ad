import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const phone = body.phone ? String(body.phone).trim() : null;
    const channel = String(body.channel ?? "form");
    const locale = String(body.locale ?? "ru");

    const record = await db.contact.create({
      data: { name, email, phone, subject, message, channel, locale },
    });

    // Пытаемся отправить email (если настроен SMTP), не блокируя ответ
    sendContactEmail({ name, email, phone: phone ?? undefined, subject, message, channel, locale })
      .catch(() => {});

    return NextResponse.json({ ok: true, id: record.id });
  } catch (e) {
    console.error("[api/contacts] error:", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const items = await db.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: { id: true, name: true, subject: true, channel: true, status: true, createdAt: true },
    });
    return NextResponse.json({ items });
  } catch (e) {
    console.error("[api/contacts] list error:", e);
    return NextResponse.json({ items: [] });
  }
}
