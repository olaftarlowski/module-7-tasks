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
    <form
      onSubmit={submitHandler}
      style={{ width: 500, border: "1px solid lightgray", padding: 24 }}
    >
      <div>
        <p>Komentarz:</p>
        <p>
          pass: <b style={{ fontSize: 30 }}>123</b>
        </p>
        <p>
          Nie jestem pewien co do Mailgun, w konsoli dostaje status 200 i
          odpowiedz, ze niby dobrze wg dokumentacji, ale maile faktycznie nie
          przychodza do nawet zweryfikowanych odbiorcow
        </p>
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
