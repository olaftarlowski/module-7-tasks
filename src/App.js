import { useState, useEffect } from "react";
import "./App.css";
import { Main, Login } from "./components/TaskMailingSystem";
// import { UserList } from "./components/Task1/";

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("logged");

    if (loggedIn === "1") {
      setIsVerified(true);
    }
  }, []);

  return (
    <div className="App App-header">
      {/* <UserList /> */}
      {isVerified ? (
        <Main setIsVerified={setIsVerified} />
      ) : (
        <Login setIsVerified={setIsVerified} />
      )}
    </div>
  );
};

export default App;
