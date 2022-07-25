import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { default as api } from "./api/";
import { SingleUserWrapper } from "./styled-components/styles";

const SingleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleUserData, setSingleUserData] = useState(null);

  const getUserHandler = () => {
    api.getSingleUser(id).then((data) => setSingleUserData(data.data));
  };

  useEffect(() => {
    getUserHandler();
  });

  const backPageHandler = () => {
    navigate("users");
  };

  return (
    <SingleUserWrapper>
      <button onClick={backPageHandler}>Back to users</button>
      <h2>{singleUserData?.fields.name}</h2>
      <p>{singleUserData?.fields.email}</p>
      <p>{singleUserData?.fields.date}</p>
    </SingleUserWrapper>
  );
};

export default SingleUser;
