import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavigationWrapper } from "./styled-components/styles";

const Navigation = ({ setIsVerified }) => {
  const logoutHandler = () => {
    setIsVerified(false);
    localStorage.removeItem("logged");
  };

  return (
    <NavigationWrapper>
      <div className="links">
        <Link to="/users">Users</Link>
      </div>
      <div className="links">
        <Link to="/new-user">New User</Link>
      </div>
      <div className="links">
        <Link to="/campaign">Campaign</Link>
      </div>
      <div className="links">
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  setIsVerified: PropTypes.func,
};

export default Navigation;
