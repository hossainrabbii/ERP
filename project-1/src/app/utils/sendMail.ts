// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
import config from "../config/index.js";

export const sendMail = async (mailto: string, resetLink: String) => {
  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: config.NODE_ENV === "production", // true for 465, false for other ports
    auth: {
      user: "mdhosen21018@gmail.com",
      pass: "akbc sqgt nwys jgnk",
    },
  });

  // Wrap in an async IIFE so we can use await.
  await transporter.sendMail({
    from: "mdhosen21018@gmail.com",
    to: mailto,
    subject: "Debug Mode ERP - Reset your password",
    text: "Reset your password", // plain‑text body
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f7;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    }
    .header {
      background: linear-gradient(135deg, #6d00c7, #8e44ad);
      color: #fff;
      text-align: center;
      padding: 20px 0;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 30px 40px;
      line-height: 1.6;
    }
    .content h2 {
      color: #222;
      font-size: 20px;
      margin-bottom: 12px;
    }
    .content p {
      margin: 10px 0;
    }
    .btn {
      display: inline-block;
      background: #6d00c7;
      color: white !important;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s;
      margin-top: 16px;
    }
    .btn:hover {
      background: #550099;
    }
    .footer {
      background-color: #fafafa;
      color: #999;
      text-align: center;
      font-size: 13px;
      padding: 20px;
      border-top: 1px solid #eee;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">Debug Mode ERP</div>
    <div class="content">
      <h2>Reset Your Password</h2>
      <p>Hi there,</p>
      <p>We received a request to reset your password. Please click the button below to set a new one.</p>

      <a href="${resetLink}" class="btn" target="_blank">Reset Password</a>

      <p style="margin-top: 24px;">This link will expire in <b>5 minutes</b> for your security.</p>
      <p>If you didn’t request a password reset, you can safely ignore this email.</p>
      <p>Best regards,<br /><b>The Debug Mode ERP Team</b></p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Debug Mode ERP. All rights reserved.
    </div>
  </div>
</body>
</html>
`,
  });

  // console.log("Message sent:", info.messageId)
};
