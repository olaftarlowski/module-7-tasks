import moment from "moment";
import axios from "axios";

const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const API_URL = "https://api.airtable.com/v0/appLktO7FFmlPGju3";

const getData = async () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const res = await axios.get(`${API_URL}/mails`).catch((error) => {
    console.log(error);
  });

  return res.data;
};

const postUser = async (userData) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
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
    .post(`${API_URL}/mails`, data)
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
