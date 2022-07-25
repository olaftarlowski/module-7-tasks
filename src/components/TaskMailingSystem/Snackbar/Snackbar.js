import PropTypes from "prop-types";
import { SnackbarItem } from "./";

const Snackbar = ({ isSnackbarActive, setIsSnackbarActive }) => {
  return (
    <div>
      {isSnackbarActive && (
        <SnackbarItem
          setSnackbar={setIsSnackbarActive}
          toFadeOut={4000}
          position="top-right"
        />
      )}
    </div>
  );
};

Snackbar.propTypes = {
  isSnackbarActive: PropTypes.bool,
  setIsSnackbarActive: PropTypes.func,
};

export default Snackbar;
