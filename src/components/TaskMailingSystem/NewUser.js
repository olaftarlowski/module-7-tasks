import { useForm } from "react-hook-form";

import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  p {
    font-size: 16px;
    margin: 0;
  }

  button {
    width: 100px;
    height: 100px;
    font-size: 24px;
  }
`;

const NewUser = ({ submitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("DATASUBMIT",data)
    submitUser(data);
  };
  console.log(errors);

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        {errors.name && <p>Name is required</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true, pattern: emailRegex })}
        />
        {errors.email && <p>Email is required</p>}
      </div>

      <button type="submit">Send</button>
    </FormWrapper>
  );
};

export default NewUser;
