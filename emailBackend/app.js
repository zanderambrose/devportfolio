const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const port = 8005;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/mail", async (req, res) => {
  const { name, emailFrom, subject, message } = req.body;
  console.log("POST request data: ", name, emailFrom, subject, message);
  let transporter = nodemailer.createTransport({
    host: "mail",
    port: 25,
    secure: false, // true for 465, false for other ports
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `zander@zanderambrose.dev`, // sender address
    to: "alexander.d.ambrose@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: `
    <h1>Email from Portfolio Website</h1>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email from: ${emailFrom}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  res.send("Hello Mail!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
