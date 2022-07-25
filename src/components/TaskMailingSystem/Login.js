import React, { useState } from "react";
import PropTypes from "prop-types";

const PASSWORD = "123";

const Login = ({ setIsVerified }) => {
  const [tokenValue, setTokenValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (tokenValue === PASSWORD) {
      setIsVerified(true);
      localStorage.setItem("logged", "1");
    }
  };

  const passInputHandler = (event) => {
    setTokenValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <p>pass: 123</p>
      </div>
      <label htmlFor="password">
        <p>Password</p>
        <input
          id="password"
          type="password"
          value={tokenValue}
          onChange={passInputHandler}
        />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

Login.propTypes = {
  setIsVerified: PropTypes.func,
};

export default Login;
