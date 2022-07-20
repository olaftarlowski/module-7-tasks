import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CampaignFormWrapper } from "./styled-components/styles";

const CampaignForm = ({ rowData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const check = (e) => {
    e.preventDefault();

    setValue("details", {
      titleText: rowData.Name,
      content: rowData.Content,
    });
  };

  return (
    <CampaignFormWrapper>
      <form>
        <label htmlFor="titleText">Title</label>
        <input
          id="titleText"
          type="text"
          placeholder="Enter mail title"
          {...register("details.titleText", {
            required: true,
            min: 1,
            maxLength: 80,
          })}
        />
        {errors.titleText && <p>Title is required</p>}

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          {...register("details.content", {
            required: true,
            max: 2,
            maxLength: 300,
          })}
        />
        {errors.content && <p>Content is required</p>}

        <div className="control-buttons">
          <button onClick={check}>Apply</button>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Send
          </button>
        </div>
      </form>
    </CampaignFormWrapper>
  );
};

export default CampaignForm;
