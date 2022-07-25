import { useEffect } from "react";
import PropTypes from "prop-types";
import { SnackbarWrapper } from "../styled-components/styles";

const SnackbarItem = ({ setSnackbar, toFadeOut, position }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSnackbar(false);
    }, toFadeOut);

    return () => clearTimeout(timer);
  }, [setSnackbar, toFadeOut]);

  return (
    <SnackbarWrapper className={`snackbar-wrapper-${position}`}>
      <span>Data submitted. Thank you!</span>
    </SnackbarWrapper>
  );
};

SnackbarItem.propTypes = {
  setSnackbar: PropTypes.func,
  toFadeOut: PropTypes.number,
  position: PropTypes.string,
};

export default SnackbarItem;
