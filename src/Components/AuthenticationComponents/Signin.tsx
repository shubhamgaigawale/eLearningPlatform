import { TextField } from '@mui/material'
import React from 'react'

const Signin = () => {
    return (
        <div>
            <div>
                <h1> hello from signin page</h1>
                <div className="">
                    <TextField id="outlined-basic" label="id" variant="outlined" placeholder="id" />
                    <TextField id="outlined-basic" label="password" variant="outlined" placeholder="password" />
                </div>
            </div>
        </div>
    )
}

export default Signin