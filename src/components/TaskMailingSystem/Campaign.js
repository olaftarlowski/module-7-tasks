import { useRef } from "react";
import moment from "moment";
import { TableCampaigns, CampaignForm } from "./";
import { CampaignWrapper } from "./styled-components/styles";

const Campaign = ({ dataNames, campaignsData }) => {
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

  const myRef = useRef();

  return (
    <div>
      <CampaignWrapper>
        <TableCampaigns newData={dataTable} getRow={getRowHandler} />
        <CampaignForm ref={myRef} dataNames={dataNames} dataTable={dataTable} />
      </CampaignWrapper>
    </div>
  );
};

export default Campaign;
