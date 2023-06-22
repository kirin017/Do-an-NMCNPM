import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const Topbar = () => {
    const classes = useStyles()
    return (
        <>
            <div className='topbar'>
                <div className='icon-logo' style={{ backgroundColor: '#CBCBCB' }}>
                    <Typography variant='h6' className={classes.title} color='inherit' >
                        <Button component={Link} to="/" style={{ fontSize: '40px', fontFamily: 'cursive', color: '#1E90FF', fontWeight: 'bold' }}>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png' alt="Commerce.js" height='100px' className={classes.image} />
                            MIAMI HEAT
                        </Button>
                    </Typography>
                </div>
                <div className='icon-alert' style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '5px',
                }}>
                    <MailOutlineIcon />
                    <NotificationsIcon />
                    <AccountBoxIcon />
                </div>
                <div className='add-product' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: '5px',
                    border: '0.5px solid lightgray',
                    marginLeft: '1000px',
                    maxWidth: '190px'
                }}
                >
                    <Button className={classes.button} component={Link} to="/admin/order/add">
                        Add Product
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Topbar;