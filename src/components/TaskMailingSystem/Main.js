import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { clientAction } from "./server/server";
import { default as api } from "./api/";
import { Table, NewUser, Campaign, Navigation } from "./";
import { ContentWrapper } from "./styled-components/styles";

const Main = () => {
  const [userData, setUserData] = useState([]);

  const getDataHandler = () => {
    api.getData().then((data) => setUserData(data.records));
  };

  const postUserHandler = (userData) => {
    api.postUser(userData);
    getDataHandler();
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const check = () => {
    console.log(userData);
  };

  const dataTable = userData
    .map((el) => el.fields)
    .sort((a, b) => {
      return a.id - b.id;
    });

  const servHandler = () => {
    clientAction();
  };

  return (
    <Router>
      <h2>Mailing system</h2>
      <Navigation />
      <ContentWrapper>
        <div>
          <button onClick={servHandler}>klik</button>
          <button onClick={check}>check</button>
        </div>
        <Routes>
          <Route path="/users" element={<Table newData={dataTable} />} />
          <Route
            path="/new-user"
            element={<NewUser submitUser={postUserHandler} />}
          />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </ContentWrapper>
    </Router>
  );
};

export default Main;
