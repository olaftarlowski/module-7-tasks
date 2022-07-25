import moment from "moment";
import axios from "axios";

const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const API_URL = "https://api.airtable.com/v0/appLktO7FFmlPGju3";

const getData = async () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const res = await axios
    .get(`${API_URL}/mails?sort%5B0%5D%5Bfield%5D=id`)
    .catch((error) => {
      console.log(error);
    });

  return res.data;
};

const postUser = async ({ name, email }) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const newDate = moment().format("YYYY-MM-DD");

  const data = {
    records: [
      {
        fields: {
          name: name,
          email: email,
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

const getCampaigns = async () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const res = await axios
    .get(`${API_URL}/campaigns?sort%5B0%5D%5Bfield%5D=Name`)
    .catch((error) => {
      console.log(error);
    });

  return res.data;
};

const postCampaign = async ({ titleText, content, status }) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const data = {
    records: [
      {
        fields: {
          Name: titleText,
          Content: content,
          Status: status,
        },
      },
    ],
  };

  await axios
    .post(`${API_URL}/campaigns`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const patchCampaign = async ({
  details: { id, titleText, content, status },
}) => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const data = {
    records: [
      {
        id: id,
        fields: {
          Name: titleText,
          Content: content,
          Status: status,
        },
      },
    ],
  };

  await axios
    .patch(`${API_URL}/campaigns`, data)
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
  getCampaigns,
  postCampaign,
  patchCampaign,
};

export default apiCalls;
