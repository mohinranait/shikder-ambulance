import nodemailer from "nodemailer";
import AppModel from "@/models/config.model";


export const applyEmailConfig = async ({user,pass}:{user:string,pass:string}) => {
  const config = await AppModel.findOne();

  if (!config || !config.email?.status) {
    throw new Error("Email service is not configured or disabled");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
};

/**
 * Send email using nodemailer
 */
export const sendEmailByNodeMailer = async (data: {
  emails: string;
  subject: string;
  text: string;
  html: string;
}) => {
  try {
    const config = await AppModel.findOne();
    if (!config || !config.email?.status) {
      throw new Error("Email service is not configured or disabled");
    }
    const transporter = await applyEmailConfig({
        user: config.email.user,
        pass: config.email.password,
    });
    const mailData = {
      from: config.email.user,
      to: data.emails,
      subject: data.subject,
      text: data.text,
      html: data.html,
    };

    const info = await transporter.sendMail(mailData);

    console.log("Message sent ID:", info.messageId);
    console.log("Message sent response:", info.response);
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
