import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import ReceiverValidity from "./ReceiverValidity";

const Sender = (props) => {
  const [sender, setSender] = useState({});
  const [senderID, setSenderID] = useState("");

  const axios = require("axios");
  function onClickSenderHandler() {
    axios
      .get("http://localhost:3001/users/".concat(senderID))
      .then((response) => {
        setSender(response.data);
      })
      .catch((error) => {
        setSenderID("");
        alert("No data found");
      });
  }

  return (
    <div className="sender">
      <div>
        <TextField
          size="small"
          label="Sender ID"
          type="text"
          id="sender_id"
          value={senderID}
          onChange={(e) => setSenderID(e.target.value)}
        ></TextField>
        <> </>
        <Button
          variant="contained"
          name="submit"
          value="Submit"
          onClick={onClickSenderHandler}
        >
          Submit
        </Button>
      </div>
      <div className="sender_card">
        <div>
          <p>
            {sender.accountholdername}
          </p>
        </div>
        <div>
          <p>{sender.balance}</p>
        </div>
      </div>
      <ReceiverValidity
        transferType={props.transferType}
        id={sender.customerid}
        name={sender.accountholdername}
      />
    </div>
  );
};

export default Sender;
