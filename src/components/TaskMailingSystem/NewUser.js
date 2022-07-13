import { useForm } from "react-hook-form";

const NewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="email"
        {...register("email", { required: true, pattern: emailRegex })}
      />

      <input type="submit" />
    </form>
  );
};

export default NewUser;
