import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {Resend} from "resend";

dotenv.config();

const app=express();
app.use(cors());

app.use(express.json());

// const transporter=nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth:{
//         user:process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS,
//     },
// });

const resend = new Resend(process.env.MAIL_API_KEY)

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from:email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message ,
      reply_to: email,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});
const PORT=process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));