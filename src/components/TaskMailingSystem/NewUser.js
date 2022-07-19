import { useForm } from "react-hook-form";
import { FormWrapper } from "./styled-components/styles";

const NewUser = ({ submitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("DATASUBMIT: ", data);
    submitUser(data);
  };

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );

  return (
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
  );
};

export default NewUser;
