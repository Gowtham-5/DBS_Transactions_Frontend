import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MessageCode from "./MessageCode";
import "../CSS/TransferAmount.css";

const TransferAmount = () => {
  const location = useLocation();

  const [transferAmt, setTransferAmt] = useState(0);
  const transferFee = transferAmt * 0.0025;

  const axios = require("axios");
  const navigate = useNavigate();
  const makeTransaction = () => {
    axios
      .post("http://localhost:0000/", 
      {
        "transactionid" : 0,
        "receiveraccountholdernumber" : location.state.receiver_id,
        "receiveraccountholdername" : location.state.receiver_name,
        "transferfees" : transferFee,
        "transferdate" : "",
        "amount" : transferAmt,
        "customers" : {
          "customerid" : location.state.sender_id,
          "accountholdername" : location.state.sender_name,
          "overdrafting" : null,
          "clearbalance" : null
        },
        "message" : {
          "messagecode" : null,
          "instruction" : null
        },
        "transfertypes" : {
          "transfertypecode" : location.state.transfer_type,
          "transfertypedescription" : null
        },
      }
      )
      .then((response) => {
        navigate("/successful", {
          state: {
            sender_id: location.state.sender_id,
            sender_name: location.state.sender_name,
            transfer_type: location.state.transfer_type,
            transfer_amount: transferAmt,
            transfer_fee: transferFee,
            receiver_id: location.state.receiver_id,
            receiver_name: location.state.receiver_name,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  // const openSuccessful = () => {
  //   navigate("/successful", {
  //     state: {
  //       sender_id: location.state.sender_id,
  //       sender_name: location.state.sender_name,
  //       transfer_type: location.state.transfer_type,
  //       transfer_amount: transferAmt,
  //       transfer_fee: transferFee,
  //       receiver_id: location.state.receiver_id,
  //       receiver_name: location.state.receiver_name,
  //     }
  //   });
  // };

  return (
    <div className="transferamt">
      <div>
        <h2>Transfer Amount</h2>
      </div>
      <br />
      <div>
        <TextField
          type="text"
          size="small"
          label="Amount to Transfer"
          value={transferAmt}
          onChange={(e) => setTransferAmt(e.target.value)}
        ></TextField>
      </div>
      <br />
      <div>
        <p>Transfer Fee: {transferFee}</p>
      </div>
      <div>
        <p>Sender's ID: {location.state.sender_id}</p>
      </div>
      <div>
        <p>Sender's Name: {location.state.sender_name}</p>
      </div>
      <div>
        <p>Receiver's ID: {location.state.receiver_id}</p>
      </div>
      <div>
        <p>Receiver's Name: {location.state.receiver_name}</p>
      </div>
      <br />
      <div>
        <Button type="button" variant="contained" onClick={makeTransaction}>
          Make Transaction
        </Button>
      </div>
    </div>
  );
};

export default TransferAmount;
