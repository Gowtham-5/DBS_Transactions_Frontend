import React, { useState } from "react"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"
import MessageCode from "./MessageCode"

const ReceiverValidity = (props) => {

    const [receiverName,setReceiverName] = useState("")
    const [receiverID, setReceiverID] = useState("")
    const [receiver, setReceiver] = useState({})

    const navigate = useNavigate()
    const openTransaction = () => {
        navigate("/transfer",{ state: { 
            sender_id : props.id,
            sender_name : props.name,
            transfer_type : props.transferType,
            receiver_id : receiverID,
            receiver_name : receiverName
        } })
    }

    const axios = require('axios')
    function onClickReceiverHandler(){
        axios.get("http://localhost:3001/users/".concat(receiverID))
        .then((response) => {
          setReceiver(response.data)
        })
        .catch((error)=> {
          setReceiverID("")
          alert("No data found")
        })
    }
    return (
        <div>
            <div>
                <TextField type="text" size="small" label="Receiver's Name" value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}>
                </TextField>
                <> </>
                <Button type="button" variant="contained">Validate</Button>
            </div>
            <br/>
            <div>
                <TextField size="small" label="Receiver ID" type="text" value={receiverID}
                    onChange={(e) => setReceiverID(e.target.value)}>
                </TextField><> </>
                <Button variant="contained" onClick={onClickReceiverHandler}>Submit</Button>
            </div>
            <div><p>{receiver.first_name} {receiver.last_name}</p></div>
            <div><p>{receiver.balance}</p></div>
            <MessageCode/>
            <br/>
            <div>
                <Button variant="contained" onClick={openTransaction}>Proceed</Button>
            </div>
        </div>
        )
    }


export default ReceiverValidity