import moment from "moment";
import axios from "axios";

const API_URL = "https://api.airtable.com/v0/appLktO7FFmlPGju3/mails";

const getData = async () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer keyK9SjdjtlgfY2h5",
  };

  const res = await axios.get(API_URL).catch((error) => {
    console.log(error);
  });

  return res;
};

const postUser = async (userData) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer keyK9SjdjtlgfY2h5",
  };

  const newDate = moment().format("YYYY-MM-DD");

  const data = {
    records: [
      {
        fields: {
          name: userData.name,
          email: userData.email,
          date: newDate,
        },
      },
    ],
  };

  await axios
    .post(API_URL, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const apiCalls = {
  getData,
  postUser,
};

export default apiCalls;
