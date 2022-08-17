import moment from "moment";
import { api } from "./config";

const getData = async () => {
  const res = await api.get("/mails?sort%5B0%5D%5Bfield%5D=id");

  return res.data;
};

const getSingleUser = async (id) => {
  const res = await api.get(`/mails/${id}`).catch((error) => {
    console.log(error);
  });

  return res;
};

const postUser = async ({ name, email }) => {
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

  await api
    .post("/mails", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getCampaigns = async () => {
  const res = await api.get("/campaigns?sort%5B0%5D%5Bfield%5D=Name");

  return res.data;
};

const postCampaign = async ({ titleText, content, status }) => {
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

  await api
    .post("/campaigns", data)
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

  await api
    .patch("/campaigns", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteCampaign = async (id) => {
  await api
    .delete(`/campaigns/${id}`)
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
  getSingleUser,
  getCampaigns,
  postCampaign,
  patchCampaign,
  deleteCampaign,
};

export default apiCalls;
