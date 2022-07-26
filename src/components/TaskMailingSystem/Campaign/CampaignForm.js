import React, { useEffect, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { default as api } from "../api/";
import { clientAction } from "../server/server";
import { Snackbar } from "../Snackbar";
import { CampaignFormWrapper } from "../styled-components/styles";

const CampaignForm = React.forwardRef(
  ({ dataNames, dataTable, refetchCampaigns }, ref) => {
    const [currentWatch, setCurrentWatch] = useState([]);
    const [currentID, setCurrentID] = useState(null);
    const [isSnackbarActive, setIsSnackbarActive] = useState(false);
    const currentIDdata = dataTable.map((el) => el.id);

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      reset,
      formState: { errors },
    } = useForm();

    useEffect(() => {
      const subscription = watch((data) => setCurrentWatch(data));
      return () => subscription.unsubscribe();
    }, [watch]);

    const dataRequest = (detailsData, statusText) => {
      if (currentIDdata.includes(currentID)) {
        currentWatch.details.status = statusText;
        currentWatch.details.id = currentID;
        api.patchCampaign(currentWatch);
      } else {
        if (!detailsData.details) {
          detailsData.status = statusText;
          api.postCampaign(detailsData);
        } else {
          detailsData.details.status = statusText;
          api.postCampaign(detailsData.details);
        }
      }
      reset();
      setCurrentID("");
      setIsSnackbarActive(true);
      setTimeout(refetchCampaigns, 500);
    };

    const onSubmit = ({ details }) => {
      const allMails = dataNames.map(({ fields }) => {
        return {
          from: "Excited User <bobr.rozrabiaka123@gmail.com>",
          to: fields.email,
          subject: details.titleText.replace("{{ name }}", fields.name),
          text: details.content,
        };
      });

      allMails.map((el) => clientAction(el));

      dataRequest(details, "Done");
      console.log("Mails sent", allMails);
    };

    const saveNewCampaignHandler = (e) => {
      e.preventDefault();
      if (currentWatch.length === 0) {
        return;
      } else {
        dataRequest(currentWatch, "In progress");
      }
    };

    useImperativeHandle(ref, () => ({
      applyRowHandler({ id, Name, Content }) {
        setCurrentID(id);
        setValue(
          "details",
          {
            titleText: Name,
            content: Content,
          },
          { shouldValidate: true }
        );
      },
    }));

    return (
      <CampaignFormWrapper>
        <Snackbar
          isSnackbarActive={isSnackbarActive}
          setIsSnackbarActive={setIsSnackbarActive}
        />
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
            <button onClick={saveNewCampaignHandler}>Save</button>
            <button type="submit" onClick={handleSubmit(onSubmit)}>
              Send
            </button>
          </div>
        </form>
      </CampaignFormWrapper>
    );
  }
);

CampaignForm.propTypes = {
  dataNames: PropTypes.array,
  dataTable: PropTypes.array,
  refetchCampaigns: PropTypes.func,
};

export default CampaignForm;
