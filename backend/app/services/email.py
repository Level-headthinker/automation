import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import settings


def send_contact_notification(
    name: str,
    email: str,
    phone: str,
    business: str,
    industry: str,
    message: str,
) -> None:
    if not settings.MAIL_EMAIL or not settings.MAIL_PASSWORD:
        print(f"[CONTACT LEAD] {name} | {email} | {phone} | {business} | {industry}")
        return

    subject = f"🚀 New Demo Request — {business} ({industry})"
    body = f"""
New demo request from Tapzero website.

Name:     {name}
Email:    {email}
Phone:    {phone}
Business: {business}
Industry: {industry}

Message:
{message or "No message provided."}
    """.strip()

    msg = MIMEMultipart()
    msg["From"] = settings.MAIL_EMAIL
    msg["To"] = settings.ADMIN_EMAIL or settings.MAIL_EMAIL
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(settings.MAIL_EMAIL, settings.MAIL_PASSWORD)
            server.send_message(msg)
    except Exception as e:
        print(f"[EMAIL ERROR] {e}")


def send_auto_reply(name: str, to_email: str) -> None:
    if not settings.MAIL_EMAIL or not settings.MAIL_PASSWORD:
        return

    subject = "We received your request — Tapzero"
    body = f"""Hi {name},

Thank you for reaching out to Tapzero!

We've received your demo request and will get back to you within 2 hours.

In the meantime, feel free to reply to this email with any questions.

Best regards,
The Tapzero Team
hello@tapzero.ai
    """.strip()

    msg = MIMEMultipart()
    msg["From"] = settings.MAIL_EMAIL
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(settings.MAIL_EMAIL, settings.MAIL_PASSWORD)
            server.send_message(msg)
    except Exception as e:
        print(f"[AUTO REPLY ERROR] {e}")
