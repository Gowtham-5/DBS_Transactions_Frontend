import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router";
import MessageCode from "./MessageCode";

const BankDetails = (props) => {
  const [senderBank, setSenderBank] = useState({});
  const [senderBIC, setSenderBIC] = useState("");

  const [receiverBank, setReceiverBank] = useState({});
  const [receiverBIC, setReceiverBIC] = useState("");

  const axios = require("axios");
  function onClickSenderBICHandler() {
    axios
      .get("http://localhost:3002/bic/".concat(senderBIC))
      .then((response) => {
        setSenderBank(response.data);
      })
      .catch((error) => {
        setSenderBIC("");
        alert("No data found");
      });
  }

  function onClickReceiverBICHandler() {
    axios
      .get("http://localhost:3002/bic/".concat(receiverBIC))
      .then((response) => {
        setReceiverBank(response.data);
      })
      .catch((error) => {
        setReceiverBIC("");
        alert("No data found");
      });
  }

  const navigate = useNavigate();
  const openBankTransaction = () => {
    navigate("/bank-transfer",{ state: {
      sender_bank_id : senderBank.id,
      sender_bank_name : senderBank.bank_name,
      receiver_bank_id : receiverBank.id,
      receiver_bank_name : receiverBank.bank_name,
      transfer_type : props.transferType
    } })
}

// function returnBool(){
//   let name = receiverBank.bank_name
//   if(name.includes("Bank")){
//     return(
//       <div>Hello</div>
//     )
//   }
// }

  return (
    <div className="bic">
      <div>
        <TextField
          size="small"
          label="Sender's BIC"
          type="text"
          value={senderBIC}
          onChange={(e) => setSenderBIC(e.target.value)}
        ></TextField>
        <> </>
        <Button variant="contained" onClick={onClickSenderBICHandler}>
          Submit
        </Button>
      </div>
      <div className="sender_card">
        <div>
          <p>{senderBank.id}</p>
        </div>
        <div>
          <p>{senderBank.bank_name}</p>
        </div>
      </div>
      <br />
      <div>
        <div>
          <TextField
            size="small"
            label="Receiver's BIC"
            type="text"
            value={receiverBIC}
            onChange={(e) => setReceiverBIC(e.target.value)}
          ></TextField>
          <> </>
          <Button variant="contained" onClick={onClickReceiverBICHandler}>
            Submit
          </Button>
        </div>
        <div className="receiver_card">
          <div>
            <p>{receiverBank.id}</p>
          </div>
          <div>
            <p>{receiverBank.bank_name}</p>
          </div>
        </div>
        <MessageCode/>
        <div>
          <Button variant="contained" onClick={openBankTransaction}>Proceed</Button>
        </div>
        {/* {returnBool()} */}
      </div>
    </div>
  );
};

export default BankDetails;
