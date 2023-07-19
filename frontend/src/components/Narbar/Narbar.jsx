import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import SubMenu from './Menu/SubMenu';
import { Link } from 'react-router-dom';
import AccountMenu from './Menu/AccountMenu'
function getCookieValue(cookieName) {
    // Tách các cookie thành một mảng
    var cookies = document.cookie.split(';');

    // Lặp qua từng cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // Kiểm tra nếu tên cookie trùng khớp
        if (cookie.indexOf(cookieName + '=') === 0) {
            // Trích xuất giá trị của cookie và trả về
            return cookie.substring(cookieName.length + 1);
        }
    }

    // Trả về null nếu không tìm thấy cookie
    return null;
}

var typeUserValue = getCookieValue('role');
// var UserNameValue = getCookieValue('username');

const Narbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' >
                        <Button component={Link} to="/" style={{ fontSize: '40px', fontFamily: 'cursive', color: '#1E90FF', fontWeight: 'bold' }}>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png' alt="Commerce.js" height='100px' className={classes.image} />
                            MIAMI HEAT
                        </Button>
                    </Typography>
                    <div className={classes.grow} />

                    {typeUserValue === null ? (
                        <>
                            <Button variant="outlined" component={Link} to="/login" style={{ marginRight: "20px" }}>
                                Đăng nhập
                            </Button>
                            <Button variant="outlined" component={Link} to="/signup" style={{ marginRight: "20px" }}>
                                Đăng ký
                            </Button>
                        </>
                    ) : (
                        typeUserValue === '0' || typeUserValue === '1' || typeUserValue === '2'? (
                            <>
                                <AccountMenu />
                            </>
                        ) : null
                    )}
                </Toolbar>
                <Toolbar
                    style={{ backgroundColor: '#E8E8E8' }}
                >
                    <div style={{ marginLeft: "30px" }} />
                    <Button component={Link} to="/">
                        Trang chủ
                    </Button>
                    <SubMenu></SubMenu>
                    <Button>ABOUT US</Button>
                    <Button component={Link} to="/contact">Liên hệ</Button>
                    <Button>FanPage</Button>
                </Toolbar>
            </AppBar>
        
        </>

    );
};

export default Narbar;