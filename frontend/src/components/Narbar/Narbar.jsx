import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import SubMenu from './Menu/SubMenu'
import { Link } from 'react-router-dom';

const Narbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src='https://static.vecteezy.com/system/resources/previews/011/598/887/original/ecommerce-logo-icon-free-vector.jpg' alt="Commerce.js" height='25px' className={classes.image} />
                        Shop
                    </Typography>
                    <div className={classes.grow} />
                    <Button component={Link} to="/login">Đăng nhập</Button>
                    <Button component={Link} to="/signup">Đăng ký</Button>
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color='secondary'></Badge>
                                <ShoppingCart/>
                        </IconButton>
                    </div>
                </Toolbar>
                <Toolbar>
                    <Button>Trang chủ</Button>
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