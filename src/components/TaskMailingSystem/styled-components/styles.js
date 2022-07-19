import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  /* border: 1px solid yellow; */
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .links a {
    padding: 10px 20px;
    border: 1px solid lightgray;
    text-decoration: none;
    color: #fff;
    background-color: #474747;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
  height: 100px;

  input {
    padding: 8px 16px;
    font-size: 16px;
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  button {
    width: 100px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
