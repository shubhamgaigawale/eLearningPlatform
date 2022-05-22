import React from 'react'
import { Button, TextField } from '@mui/material'
import './Signup.less'


export default function Signup() {
    return (
        <div>hello from Signup page
            <div className='Signup'>
                <TextField id="outlined-basic" label="First name" variant="outlined" />
                <TextField id="outlined-basic" label="last Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email id" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <TextField type="date" />
                <Button variant="contained">Signup </Button>
            </div>
        </div>
    )
}
