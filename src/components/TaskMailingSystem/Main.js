import { useEffect, useState } from "react";
import { default as api } from "./api/";
import { Table, NewUser } from "./";

const Main = () => {
  const [userData, setUserData] = useState([]);

  const getUserHandler = () => {
    api.getData().then((response) => setUserData(response.data.records));
  };

  const postUserHandler = (userData) => {
    api.postUser(userData);
    getUserHandler();
  };

  useEffect(() => {
    getUserHandler();
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
      <div>
        <NewUser submitUser={postUserHandler} />
      </div>
      <div>
        <Table newData={dataTable} />
      </div>
    </div>
  );
};

export default Main;
