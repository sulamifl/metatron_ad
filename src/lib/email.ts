import nodemailer from "nodemailer";

/**
 * Отправка email. Работает только если настроены SMTP-переменные окружения:
 * EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO
 * В противном случае письмо не отправляется (сохраняется только в БД).
 */
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) return null;
  transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT ?? 587),
    secure: Number(EMAIL_PORT ?? 587) === 465,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  });
  return transporter;
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  channel: string;
  locale: string;
}): Promise<boolean> {
  const t = getTransporter();
  if (!t) {
    // SMTP не настроен — письмо не отправляется, но сохранится в БД
    return false;
  }
  const to = process.env.EMAIL_TO ?? process.env.EMAIL_USER;
  try {
    await t.sendMail({
      from: `"Metatron.ad website" <${process.env.EMAIL_USER}>`,
      to,
      replyTo: data.email,
      subject: `[Metatron.ad] ${data.subject}`,
      text: [
        `Новое обращение с сайта Metatron.ad`,
        ``,
        `Имя: ${data.name}`,
        `Email: ${data.email}`,
        `Телефон/WeChat: ${data.phone ?? "—"}`,
        `Тема: ${data.subject}`,
        `Канал: ${data.channel}`,
        `Язык: ${data.locale}`,
        ``,
        `Сообщение:`,
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #d946ef;">Новое обращение с Metatron.ad</h2>
          <table style="border-collapse: collapse;">
            <tr><td style="padding:4px 12px;color:#888;">Имя</td><td><b>${data.name}</b></td></tr>
            <tr><td style="padding:4px 12px;color:#888;">Email</td><td><b>${data.email}</b></td></tr>
            <tr><td style="padding:4px 12px;color:#888;">Телефон/WeChat</td><td><b>${data.phone ?? "—"}</b></td></tr>
            <tr><td style="padding:4px 12px;color:#888;">Тема</td><td><b>${data.subject}</b></td></tr>
            <tr><td style="padding:4px 12px;color:#888;">Канал</td><td><b>${data.channel}</b></td></tr>
          </table>
          <h3 style="color:#888;margin-top:20px;">Сообщение:</h3>
          <p style="white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:8px;">${data.message}</p>
        </div>
      `,
    });
    return true;
  } catch (e) {
    console.error("[email] send failed:", e);
    return false;
  }
}
