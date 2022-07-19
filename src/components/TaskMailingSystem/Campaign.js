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

  const dataTable = campaignsData.map((el) => {
    console.log(el.fields["Created at"])
    return el.fields;
  });

  return (
    <div>
      <h3>Campaign</h3>
      <div>
        <TableCampagins newData={dataTable} />
      </div>
      <div>
        <h4>send mails</h4>
        <button>get data</button>
      </div>
    </div>
  );
};

export default Campaign;
