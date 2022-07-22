import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { default as api } from "./api/";
import { TableUsers, NewUser, Campaign, Navigation } from "./";
import { ContentWrapper } from "./styled-components/styles";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [campaignsData, setCampaignsData] = useState([]);

  const getDataHandler = () => {
    api.getData().then((data) => setUserData(data.records));
    api.getCampaigns().then((data) => {
      setCampaignsData(data.records);
    });
  };

  const postUserHandler = (userData) => {
    api.postUser(userData);
    getDataHandler();
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const dataTable = userData.map((el) => el.fields);

  return (
    <Router>
      <h2>Mailing system</h2>
      <Navigation />
      <ContentWrapper>
        <Routes>
          <Route path="/users" element={<TableUsers newData={dataTable} />} />
          <Route
            path="/new-user"
            element={<NewUser submitUser={postUserHandler} />}
          />
          <Route
            path="/campaign"
            element={
              <Campaign campaignsData={campaignsData} dataNames={userData} />
            }
          />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </ContentWrapper>
    </Router>
  );
};

export default Main;
