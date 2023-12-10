import { TextField } from '@mui/material'
import React from 'react'

function Form() {
  return (
    <div><TextField id="outlined-basic" label="Title" variant="outlined" />
    <TextField id="filled-basic" label="Author" variant="filled" />
    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </div>
  )
}

export default Form