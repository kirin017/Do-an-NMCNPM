import React from 'react';
import Products from './components/Products/Products';
import Narbar from './components/Narbar/Narbar';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Narbar />
                    <div style={{ marginTop: '60px' }}>
                        <Products />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Narbar />
                    <div style={{ marginTop: '60px' }}>
                            Giao diện đăng nhập
                    </div>
                </Route>
                <Route exact path="/signup">
                    <Narbar />
                    <div style={{ marginTop: '60px' }}>
                            Giao diện đăng ký
                    </div>
                </Route>
                <Route exact path="/cart">
                    <Narbar />
                    <div style={{ marginTop: '60px' }}>
                            Giao diện giỏ hàng
                    </div>
                </Route>
                <Route exact path="/id">
                    <Narbar />
                    <div style={{ marginTop: '60px' }}>
                            Giao diện chi tiết sản phẩm
                    </div>
                </Route>
                <Route exact path="/admin">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px'}}>
                            Giao diện trang chủ admin
                    </div>
                </Route>
                <Route exact path="/admin/product">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px'}}>
                            Giao diện sản phẩm cho admin
                    </div>
                </Route>
                <Route exact path="/admin/order">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px'}}>
                            Giao diện các đơn hàng cho admin
                    </div>
                </Route>
                <Route exact path="/admin/account">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px'}}>
                            Giao diện các quản lý tài khoản cho admin
                    </div>
                </Route>
                <Route exact path="/admin/statistic">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px'}}>
                            Giao diện các thống kê tổng sản phẩm, doanh thu
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;