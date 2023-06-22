import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';


function Toast({ message }) {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert style={{ fontSize: 20 }}>
                {message}
            </Alert>
        </Snackbar>  
    );
}

export default Toast;