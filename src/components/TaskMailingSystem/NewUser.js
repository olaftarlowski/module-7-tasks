import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { Snackbar } from "./Snackbar/";
import { FormWrapper } from "./styled-components/styles";

const NewUser = ({ submitUser }) => {
  const [isSnackbarActive, setIsSnackbarActive] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    submitUser(data);
    reset({ name: "", email: "" });
    setIsSnackbarActive(true);
  };

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );

  return (
    <>
      <Snackbar
        isSnackbarActive={isSnackbarActive}
        setIsSnackbarActive={setIsSnackbarActive}
      />
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 80 })}
          />
          {errors.name && <p>Name is required</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: emailRegex })}
          />
          {errors.email && <p>Email is required</p>}
        </div>

        <button type="submit">Send</button>
      </FormWrapper>
    </>
  );
};

NewUser.propTypes = {
  submitUser: PropTypes.func,
};

export default NewUser;
