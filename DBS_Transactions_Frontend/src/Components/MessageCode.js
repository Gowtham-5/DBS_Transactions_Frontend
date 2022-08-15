import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const MessageCode = () => {

    const [messageCode, setMessageCode] = useState("")
    const handleChange = (event) => {
        setMessageCode(event.target.value)
    }

    return (
        <div className="message_code">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Code</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={messageCode}
                    label="type"
                    onChange={handleChange}
                >
                    <MenuItem value="CHQB">CHQB</MenuItem>
                    <MenuItem value="CORT">CORT</MenuItem>
                    <MenuItem value="HOLD">HOLD</MenuItem>
                    <MenuItem value="INTC">INTC</MenuItem>
                    <MenuItem value="PHOB">PHOB</MenuItem>
                    <MenuItem value="PHOI">PHOI</MenuItem>
                    <MenuItem value="PHON">PHON</MenuItem>
                    <MenuItem value="REPA">REPA</MenuItem>
                    <MenuItem value="SDVA">SDVA</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default MessageCode
