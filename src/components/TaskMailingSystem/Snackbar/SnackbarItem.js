import { useEffect } from "react";
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

export default SnackbarItem;
