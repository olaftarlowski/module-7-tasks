import Mailgun from "mailgun.js";
import formData from "form-data";

const API_KEY = "04ce4da26c31c2f04c313e8844fa05bf-787e6567-41b6b781";
const DOMAIN = "sandboxa486d9dc73e141618d0ea407b3dfe173.mailgun.org";

// const formData = require("form-data");
// const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

const messageData = {
  from: "Excited User <me@samples.mailgun.org>",
  to: "bobr.rozrabiaka123@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};

export const clientAction = () => {
  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
