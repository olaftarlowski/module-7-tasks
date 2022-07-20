import { useEffect, useState } from "react";
import moment from "moment";
import { default as api } from "./api/";
import { TableCampagins } from "./";

const Campaign = () => {
  const [campaignsData, setCampaignsData] = useState([]);
  const [campaignRow, setCampaignRow] = useState({});

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
    setCampaignRow(rowData);
  };

  const checkROW = () => {
    console.log(campaignRow);
  };

  return (
    <div>
      <h3>Campaign</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TableCampagins newData={dataTable} getRow={getRowHandler} />
        <div>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label htmlFor="">Title</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Content</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>save</button>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h4>send mails</h4>
        <button onClick={checkROW}>ROW</button>
        <div>
          <h2>row data</h2>
          <p>{campaignRow.Name}</p>
          <p>{campaignRow.Content}</p>
          <p>{campaignRow.Status}</p>
          <p>{campaignRow["Created at"]}</p>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
