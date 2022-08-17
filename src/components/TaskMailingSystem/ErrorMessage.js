import PropTypes from "prop-types";
import { ErrorMessageWrapper } from "./styled-components/styles";

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      <h3>{message}</h3>
    </ErrorMessageWrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
