import { Link } from "react-router-dom";
import { NavigationWrapper } from "./styled-components/styles";

const Navigation = () => {
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
    </NavigationWrapper>
  );
};

export default Navigation;
