import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { Table, NewUser } from "./";

const Main = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios
      .get(
        "https://api.airtable.com/v0/appLktO7FFmlPGju3/mails?api_key=keyK9SjdjtlgfY2h5"
      )
      .then((response) => setUserData(response.data.records))
      .catch((error) => {
        console.log(error);
      });

    return res;
  };

  const postUser = async (userData) => {
    console.log("USERDATA", userData);
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
      .post("https://api.airtable.com/v0/appLktO7FFmlPGju3/mails", data)
      .then(function (response) {
        console.log("POSTDATA", data);
        console.log(response);
      })
      .then(() => {
        getData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const check = () => {
    console.log(userData);
  };
  const postHandler = (data) => {
    postUser(data);
  };

  const dataTable = userData
    .map((el) => el.fields)
    .sort((a, b) => {
      return a.id - b.id;
    });

  return (
    <div>
      get mails
      <button onClick={check}>check</button>
      {/* <button onClick={send}>send</button> */}
      <div>
        <NewUser submitUser={postHandler} />
      </div>
      {/* <div>
        {userData.map((user) => {
          return <div key={user.id}>{user.fields.name}</div>;
        })}
      </div> */}
      <div>
        <Table newData={dataTable} />
      </div>
    </div>
  );
};

export default Main;
