import { useParams, Link } from "react-router-dom";
import User from "./User";

const UserDetails = ({ singleUser }) => {
  let { id } = useParams();

  const selectedItem = singleUser.filter((item) => {
    return item.login.uuid === id;
  });

  return (
    <div>
      <button>
        <Link to="/users">Back</Link>
      </button>

      <User userData={selectedItem[0]} />
    </div>
  );
};

export default UserDetails;
