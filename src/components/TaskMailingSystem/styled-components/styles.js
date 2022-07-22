import styled from "styled-components";

export const NavigationWrapper = styled.nav`
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
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;

export const CampaignWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const CampaignFormWrapper = styled.div`
  padding: 8px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      margin: 0;
      font-size: 16px;
      color: crimson;
    }

    input {
      padding: 8px 16px;
      font-size: 16px;
    }

    textarea {
      padding: 8px 16px;
      font-size: 16px;
      height: 120px;
    }

    .control-buttons {
      padding: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        width: 100px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        margin: 2px;
      }
    }
  }
`;

export const SnackbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  transition: opacity 150ms, transform 150ms;
  span {
    background-color: #fff;
    color: #000;
    padding: 24px;
  }
`;
