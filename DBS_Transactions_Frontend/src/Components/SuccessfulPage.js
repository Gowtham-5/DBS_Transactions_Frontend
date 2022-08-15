import { Button } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const SuccessfulPage = () => {
    const location = useLocation();
    const state = location.state;
    const [data,setData] = useState(state);
    const doc = new jsPDF()
    const convertToPDF = () => {
        doc.autoTable({ html: "#my-table" });
        const columns = [
        "location.state.sender_id",
        "location.state.sender_name",
        "location.state.transfer_type",
        "location.transfer_amount",
        "location.state.transfer_fee",
        "location.state.receiver_id",
        "location.state.receiver_name"
        ];
        const rows = [];
        data.map((item) => rows.push(Object.values(item)));
        doc.autoTable(columns, rows);

        doc.save("Transaction.pdf");

        console.log("Printing");
    };
  return (
    <div>
      <div>
        <h2>Transaction Successful!</h2>
      </div>
      <div>
        <p>Sender's ID: {location.state.sender_id}</p>
      </div>
      <div>
        <p>Sender's Name: {location.state.sender_name}</p>
      </div>
      <div>
        <p>Transfer Type: {location.state.transfer_type}</p>
      </div>
      <div>
        <p>Transfer Amount: {location.state.transfer_amount}</p>
      </div>
      <div>
        <p>Transfer Fee: {location.state.transfer_fee}</p>
      </div>
      <div>
        <p>Receiver's ID: {location.state.receiver_id}</p>
      </div>
      <div>
        <p>Receiver's Name: {location.state.receiver_name}</p>
      </div>
      <div>
        <Button variant="contained" onClick={convertToPDF}>Download PDF</Button>
      </div>
    </div>
  );
};

export default SuccessfulPage;
