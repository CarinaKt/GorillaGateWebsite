
//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});

/*
// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  /*
    let user = req.body;
    sendMail(user, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.send({ error: "Failed to send email" });
      } else {
        console.log("Email has been sent");
        res.send(info);
      }
    });
  });


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,// true for 465, false for other ports
      auth: {
        user: "contact.gorillagate.gg@gmail.com",
        pass: 'eeykjyfxjfgmvmxv'
      }
    });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: 'contact.gorillagate.gg@gmail.com', // sender address
    to: "contact.gorillagate.gg@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  */


  app.post('/sendmail', function (req, res) {

    console.log("WENT INTO SEND MAILS!!!")
    console.log(req.body)

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact.gorillagate.gg@gmail.com',
        pass: 'lyixptgwitrsitsr'
      },
    });

    let HelperOptions = {

      from: '',
      to: 'contact.gorillagate.gg@gmail.com',
      subject: req.body.subject,
      text: "game:" + req.body.gameForm + "\n" +
            "message: " + req.body.messageForm + "\n" +
            "email: " + req.body.emailForm + "\n" +
            "name: " + req.body.nameForm + "\n" +
            "twitch name: " + req.body.twitchNameForm + "\n"
    };

    transporter.sendMail(HelperOptions, (error, response) => {
      if (error) {
        return console.log(error);
        res.json({error: "API Error"});
      } else {
        console.log("The message is sent: " + response.subject);
        res.json({response: "sent"})
      }
    })
  });

