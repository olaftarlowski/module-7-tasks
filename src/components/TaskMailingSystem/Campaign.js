import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { default as api } from "./api/";
import { TableCampaigns, CampaignForm } from "./";
import { CampaignWrapper } from "./styled-components/styles";

const Campaign = () => {
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
        <CampaignForm ref={myRef} />
      </CampaignWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h4>send mails</h4>
      </div>
    </div>
  );
};

export default Campaign;
