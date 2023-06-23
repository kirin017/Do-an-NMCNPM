import React from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';


const Toast = ({ message, open }) => {
    const [isopen, setisOpen] = useState(open);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setisOpen(false);
    };
    return (
        <Snackbar open={isopen} autoHideDuration={2000} onClose={handleClose}>
            <Alert style={{ fontSize: 20 }}>
                {message}
            </Alert>
        </Snackbar>  
    );
}

export default Toast;