import React from "react";
import { useLocation } from "react-router";
import { Button } from "@mui/material";

const BankTransactionSuccessful = () => {

  const location = useLocation();

  return (
    <div>
      <div>
        <h2>Transaction Successful!</h2>
        <div><p>Sender Bank ID: {location.state.sender_bank_id}</p></div>
        <div><p>Sender Bank Name: {location.state.sender_bank_name}</p></div>
        <div><p>Receiver Bank ID: {location.state.receiver_bank_id}</p></div>
        <div><p>Receiver Bank Name: {location.state.receiver_bank_name}</p></div>
        <div><p>Transfer Type: {location.state.transfer_type}</p></div>
        <div><p>Transfer Amount: {location.state.transfer_amount}</p></div>
        <div><p>Transfer Fee: {location.state.transfer_fee}</p></div>
        <div>
        <Button variant="contained">Download PDF</Button>
        </div>
      </div>
    </div>
  );
};

export default BankTransactionSuccessful;
