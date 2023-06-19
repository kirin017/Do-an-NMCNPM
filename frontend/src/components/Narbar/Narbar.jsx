import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import SubMenu from './Menu/SubMenu';
import { Link } from 'react-router-dom';
import AccountMenu from'./Menu/AccountMenu'
const Narbar = ({userName, typeUser, setUserName, setTypeUser}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' >
                        <Button  component={Link} to="/" style={{ fontSize: '40px' ,  fontFamily: 'cursive', color : '#1E90FF',   fontWeight: 'bold'}}>
                        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png' alt="Commerce.js" height='100px' className={classes.image} />
                        MIAMI HEAT      
                        </Button>
                    </Typography>
                    <div className={classes.grow} />
                    {typeUser < 0 ? (
                        <>
                            <Button variant="outlined" component={Link} to="/login" style={{ marginRight: "20px" }}>
                                Đăng nhập
                            </Button>
                            <Button variant="outlined" component={Link} to="/signup" style={{ marginRight: "20px" }}>
                                Đăng ký
                            </Button>    
                        </>
                    ):(
                        <>
                        <AccountMenu userName={userName} setUserName={setUserName} setTypeUser={setTypeUser}>
                        </AccountMenu>     
                        </>
                    )}  
                </Toolbar>
                <Toolbar
                style = {{ backgroundColor: '#E8E8E8'}}
                >
                    <div style={{ marginLeft: "30px" }}/> 
                    <Button component={Link} to="/">
                        Trang chủ
                    </Button>
                    <SubMenu></SubMenu>
                    <Button>ABOUT US</Button>
                    <Button>Liên hệ</Button>
                    <Button>FanPage</Button>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Narbar;