import React from "react";
import { TextField } from "@mui/material";
// import {DatePicker} from '@mui/material'
export default function Signup() {
  return (
    <div>
      hello from Signup page
      <div className="">
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email id" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        {/* <LocalizationProvieder dateAdapter={AdapterDateFns}>
                <DatePicker label="Birth Date"/>

            </LocalizationProvieder> */}
      </div>
    </div>
  );
}
