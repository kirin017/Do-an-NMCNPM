import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import SubMenu from './Menu/SubMenu';
import { Link } from 'react-router-dom';

const Narbar = () => {
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
                    <Button variant="outlined" component={Link} to="/login" style={{ marginRight: "20px" }}>
                        Đăng nhập
                    </Button>
                    <Button variant="outlined" component={Link} to="/signup" style={{ marginRight: "20px" }}>
                        Đăng ký
                    </Button>
                    <div className={classes.button} style={{ marginRight: "10px" }}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color='secondary'></Badge>
                                <ShoppingCart/>
                        </IconButton>
                    </div>
                    <Button variant="outlined" >
                        Đăng xuất
                    </Button>
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