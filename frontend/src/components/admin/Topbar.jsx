import React from 'react';
import useStyles from './style';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
const Topbar = () => {
    const classes = useStyles()
    return (
        <>
            <div className='topbar'>
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
                    marginLeft: '1000px',
                    maxWidth: '190px'
                }}
                >
                </div>
            </div>

        </>
    )
}

export default Topbar;