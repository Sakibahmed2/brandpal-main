import config from "../config/index.js";
import nodemailer from "nodemailer";

const sendContactMessage = async (email, name, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: `${config.your_email}`,
      pass: `${config.your_email_password}`,
    },
  });

  const mailOptions = {
    from: config.your_email,
    to: config.your_email,
    subject: `New message from ${name}`,
    text: message,
    replyTo: email,
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};

export const contactServices = {
  sendContactMessage,
};
