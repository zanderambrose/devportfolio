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
  console.log("POST request data: ", name,emailFrom,subject,message)
  let transporter = nodemailer.createTransport({
    host: "mail",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ellsworth67@ethereal.email", // generated ethereal user
      pass: "Cu21kSKf27qQdF8dzu", // generated ethereal password
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name} ${emailFrom}`, // sender address
    to: "alexander.d.ambrose@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);

  res.send("Hello Mail!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
