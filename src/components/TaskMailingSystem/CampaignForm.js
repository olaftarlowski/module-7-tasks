import React, { useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { clientAction } from "./server/server";
import { CampaignFormWrapper } from "./styled-components/styles";

const CampaignForm = React.forwardRef(({ dataNames }, ref) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ details }) => {
    const allMails = dataNames.map((mail) => {
      return {
        from: "Excited User <bobr.rozrabiaka123@gmail.com>",
        to: mail.fields.email,
        subject: details.titleText.replace("{{ name }}", mail.fields.name),
        text: details.content,
      };
    });

    allMails.map((el) => clientAction(el));

    console.log(allMails);
  };

  const saveCurrentTemplate = (e) => {
    e.preventDefault();
    console.log("saveCurrentTemplate");
  };

  useImperativeHandle(ref, () => ({
    applyRowHandler(rowData) {
      setValue(
        "details",
        {
          titleText: rowData.Name,
          content: rowData.Content,
        },
        { shouldValidate: true }
      );
    },
  }));

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
        {errors.details?.titleText && <p>Title is required</p>}

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          {...register("details.content", {
            required: true,
            max: 2,
            maxLength: 300,
          })}
        />
        {errors.details?.content && <p>Content is required</p>}

        <div className="control-buttons">
          <button onClick={saveCurrentTemplate}>Save</button>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Send
          </button>
        </div>
      </form>
    </CampaignFormWrapper>
  );
});

export default CampaignForm;
