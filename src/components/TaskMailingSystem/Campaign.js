import { useEffect, useState } from "react";
import { default as api } from "./api/";
import { TableCampagins } from "./";

const Campaign = () => {
  const [campaignsData, setCampaignsData] = useState([]);

  const getCampaignsHandler = () => {
    api.getCampaigns().then((data) => setCampaignsData(data.records));
  };

  useEffect(() => {
    getCampaignsHandler();
  }, []);

  const dataTable = campaignsData.map((el) => el.fields);

  return (
    <div>
      <h3>Campaign</h3>
      <div>
        <TableCampagins newData={dataTable} />
      </div>
    </div>
  );
};

export default Campaign;
