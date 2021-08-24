require('dotenv/config');

const Mailgun = require("mailgun-js");

const mg = new Mailgun({
  apiKey: process.env.MAIL_GUN_API_KEY || "f59fbb3738b90a0bf4d8ca508da28242-fa6e84b7-088db376",
  domain: process.env.MAIL_GUN_API_URL || "mail.bongomart.ng",
});

// there is an issue here with the keys

// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };

exports.sendMail = (data) => {
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};

