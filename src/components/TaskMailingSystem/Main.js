import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

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

  useEffect(() => {
    getData();
  }, []);

  const check = () => {
    console.log(userData);
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
