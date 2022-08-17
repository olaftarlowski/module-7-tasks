import axios from "axios";

export const API_URL = "https://api.airtable.com/v0/appLktO7FFmlPGju3";
const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Authorization: API_KEY,
    },
  },
});

export { api };
