import { useState } from "react";
import BankDetails from "./BankDetails";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import Sender from "./Sender";
import '../CSS/TransferType.css'

const TransferType = (props) => {
  const [transferType, setTransferType] = useState("");
  const handleChange = (event) => {
    setTransferType(event.target.value);
  };

  const conditionalRender = () => {
    if (transferType === "customer-transfer") {
      return <Sender transferType={transferType}/>;
    }
    if (transferType === "bank-transfer") {
      return <BankDetails transferType={transferType}/>;
    } else {
      return <></>;
    }
  };
  return (
    <div className="transfertype">
      <div><h2>Transactions Page</h2></div>
      <div className="form-control">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Type</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={transferType}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value="customer-transfer">Customer Transfer</MenuItem>
          <MenuItem value="bank-transfer">Bank Transfer</MenuItem>
        </Select>
        </FormControl>
      </div>
        <br/>
        <div>{conditionalRender()}</div>
    </div>
  );
};

export default TransferType;
