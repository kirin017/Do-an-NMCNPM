import React from 'react';
import { Drawer, Button, AppBar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
const NavBar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar} color='inherit' >

            </AppBar>

            <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
                <Button className={classes.button} component={Link} to="/admin">
                    Trang chủ
                </Button>
                <Button className={classes.button} component={Link} to="/admin/product">
                    Sản phẩm
                </Button>
                <Button className={classes.button} component={Link} to="/admin/order">
                    Đơn hàng
                </Button>
                <Button className={classes.button} component={Link} to="/admin/account">
                    Quản lý tài khoản
                </Button>
                <Button className={classes.button} component={Link} to="/admin/discount">
                    Mã khuyến mãi
                </Button>
                <Button className={classes.button} component={Link} to="/admin/report">
                    Thống kê
                </Button>
            </Drawer>
        </>
    );
};

export default NavBar;
