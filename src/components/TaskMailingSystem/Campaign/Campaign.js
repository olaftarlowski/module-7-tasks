import { useRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { default as api } from "../api";
import { TableCampaigns, CampaignForm } from "./";
import { CampaignWrapper } from "../styled-components/styles";

const Campaign = ({ dataNames, campaignsData, refetchCampaigns }) => {
  const dataTable = campaignsData.map((el) => {
    const newDate = moment(el.fields["Created at"]).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    el.fields["Created at"] = newDate;
    el.fields.id = el.id;
    return el.fields;
  });

  const getRowHandler = (rowData) => {
    myRef.current.applyRowHandler(rowData);
  };

  const deleteRowHandler = (id) => {
    api.deleteCampaign(id);
    setTimeout(refetchCampaigns, 500);
  };

  const myRef = useRef();

  return (
    <div>
      <CampaignWrapper>
        <TableCampaigns
          newData={dataTable}
          getRow={getRowHandler}
          deleteRowHandler={deleteRowHandler}
        />
        <CampaignForm
          ref={myRef}
          dataNames={dataNames}
          dataTable={dataTable}
          refetchCampaigns={refetchCampaigns}
        />
      </CampaignWrapper>
    </div>
  );
};

Campaign.propTypes = {
  dataNames: PropTypes.array,
  campaignsData: PropTypes.array,
  refetchCampaigns: PropTypes.func,
};

export default Campaign;
