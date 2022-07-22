import { SnackbarItem } from "./";

const Snackbar = ({ isSnackbarActive, setIsSnackbarActive }) => {
  return (
    <div>
      {isSnackbarActive && (
        <SnackbarItem
          setSnackbar={setIsSnackbarActive}
          toFadeOut="4000"
          position="top-right"
        />
      )}
    </div>
  );
};

export default Snackbar;
