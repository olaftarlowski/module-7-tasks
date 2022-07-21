import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { default as api } from "./api/";
import { TableCampaigns, CampaignForm } from "./";
import { CampaignWrapper } from "./styled-components/styles";

const Campaign = ({ dataNames }) => {
  const [campaignsData, setCampaignsData] = useState([]);

  const getCampaignsHandler = () => {
    api.getCampaigns().then((data) => setCampaignsData(data.records));
  };

  useEffect(() => {
    getCampaignsHandler();
  }, []);

  const dataTable = campaignsData.map((el) => {
    const newDate = moment(el.fields["Created at"]).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    el.fields["Created at"] = newDate;
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
        <CampaignForm ref={myRef} dataNames={dataNames} />
      </CampaignWrapper>
    </div>
  );
};

export default Campaign;
