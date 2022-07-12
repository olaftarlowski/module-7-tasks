import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { User, UserDetails } from "./";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const res = await axios
      .get("https://randomuser.me/api/?results=10&exc=gender")
      .then((response) => setUserData(response.data.results))
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

  return (
    <Router>
      <Routes>
        <Route
          path="/users"
          element={
            <div style={{ width: "80%" }}>
              <button onClick={check}>check</button>
              {userData.map((user) => {
                const userID = user.login.uuid;
                return <User userData={user} key={userID} userID={userID} />;
              })}
            </div>
          }
        />
        <Route
          path="/users/:id"
          element={<UserDetails singleUser={userData} />}
        />
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>
    </Router>
  );
};

export default UserList;
