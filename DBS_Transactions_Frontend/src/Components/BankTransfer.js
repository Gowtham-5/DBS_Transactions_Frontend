import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import MessageCode from "./MessageCode";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

const BankTransfer = () => {
  const location = useLocation();

  const [transferAmt, setTransferAmt] = useState(0);
  const transferFee = transferAmt * 0.0025;

  const axios = require("axios");
  const navigate = useNavigate();
  const makeBankTransaction = () => {
    axios
      .post("http://localhost:0000/", {})
      .then((response) => {
        navigate("/bank-transfer-successful", {
          state: {
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const bankTransferSuccessful = () => {
    navigate("/bank-transfer-successful", {
      state: {
          sender_bank_id : location.state.sender_bank_id,
          sender_bank_name : location.state.sender_bank_name,
          receiver_bank_id : location.state.receiver_bank_id,
          receiver_bank_name : location.state.receiver_bank_name,
          transfer_type : location.state.transfer_type,
          transfer_amount : transferAmt,
          transfer_fee : transferFee
      },
    });
  };
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
      <br />
      <div>
        <Button type="button" variant="contained" onClick={bankTransferSuccessful}>
          Make Transaction
        </Button>
      </div>
    </div>
  );
};

export default BankTransfer;
