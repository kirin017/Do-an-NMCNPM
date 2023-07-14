import React from 'react';
// import { useState } from 'react';
import Products from './components/Products/Products';
import Narbar from './components/Narbar/Narbar';
import SideBar from './components/SideBar/SideBar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AccountManagement from './components/Account/account/account'
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/Signup';
import AccountSetting from './components/Account/account/AccountSetting'
import Dashboard from './components/dashboard/Dashboard';
// import Bills from './components/Bills/Bills'
import Orders from './components/Orders/Orders';
import Topbar from './components/admin/Topbar'
import HistoryOrders from './components/HistoryOrders/HistoryOrders';
import ProductActionPage from './components/ProductActionPage/ProductActionPage';
import { useCookies } from 'react-cookie';
import AdminProducts from './components/AdminProducts/AdminProducts';
// import AddProduct from './components/AddProduct/AddProduct';
import Checkout from './components/Checkout/Checkout';
import Post from './components/Narbar/Post/post';
import SubCheckOut from './components/Checkout/SubCheckOut';
import AdminSignup from './components/SignUp/AdminSignup';
const App = () => {
    const [cookies] = useCookies([]);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Narbar />
                    <div style={{ marginTop: '120px' }}>
                        <Post></Post>
                        <Products />

                    </div>


                </Route>
                <Route exact path="/login">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <Login />
                    </div>
                </Route>
                <Route exact path="/signup">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <SignUp />
                    </div>
                </Route>
                <Route exact path="/accountsetting">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <AccountSetting />
                    </div>
                </Route>
                <Route exact path="/cart">
                    <Narbar />
                    <div style={{ marginTop: '190px' }}>
                        <Cart></Cart>
                    </div>
                </Route>
                <Route exact path="/product/:id">
                    <Narbar />
                    <div style={{ marginTop: '230px' }}>
                        <ProductDetail></ProductDetail>
                    </div>
                </Route>
                <Route exact path="/historyOrder">
                    <Narbar />
                    <div style={{ marginTop: '190px', marginLeft: '40px' }}>
                        <HistoryOrders />
                    </div>
                </Route>
                <Route exact path="/checkout">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <Checkout></Checkout>
                    </div>
                </Route>
                <Route exact path="/subcheckout">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <SubCheckOut></SubCheckOut>
                    </div>
                </Route>
                {+cookies.role > 0 ? (
                    <>
                        <Route exact path="/admin">
                            <Narbar />
                            <SideBar></SideBar>
                            <div style={{ marginTop: '120px', marginLeft: '250px' }}>
                                <Post></Post>
                            </div>
                        </Route>
                        <Route exact path="/admin/product">
                            <Narbar />
                            <SideBar></SideBar>
                            <div style={{ marginTop: '190px', marginLeft: '190px' }}>
                                <AdminProducts></AdminProducts>
                            </div>
                        </Route>
                        <Route exact path="/admin/addproduct">
                            <Narbar />
                            <SideBar />
                            <div style={{ marginTop: '150px', marginLeft: '600px' }}>
                                <ProductActionPage />
                            </div>
                        </Route>
                        <Route exact path="/admin/order">
                            <Narbar />
                            <Topbar></Topbar>
                            <SideBar></SideBar>
                            <div style={{ marginTop: '150px', marginLeft: '250px' }}>
                                <Orders />
                            </div>
                        </Route>
                        <Route exact path="/admin/order/add">
                            <Narbar />
                            <SideBar />
                            <div style={{ marginTop: '150px', marginLeft: '600px' }}>
                                <ProductActionPage />
                            </div>
                        </Route>
                        <Route exact path="/admin/account">
                            <Narbar />
                            <Topbar></Topbar>
                            <div style={{ marginTop: '150px' }}>
                                <SideBar></SideBar>
                            </div>
                            <div style={{ marginTop: '10px', marginLeft: '250px' }}>
                                <AccountManagement />
                            </div>
                        </Route>
                        <Route exact path="/admin/account/update">
                            <Narbar />
                            <Topbar></Topbar>
                            <div style={{ marginTop: '150px', marginLeft: '0px' }}>
                                <AdminSignup />
                            </div>
                        </Route>
                        <Route exact path="/admin/statistic">
                            <Narbar />
                            <div style={{ marginTop: '170px', marginLeft: '150px' }}>
                                <SideBar></SideBar>
                            </div>
                            <div className='dash-board' style={{
                                marginLeft: '250px',
                                marginTop: '50px'
                            }}>
                                <Dashboard />
                            </div>

                        </Route>
                    </>
                ) : (<>Tài khoản của bạn không được phép truy cập vào trang admin</>)}
            </Switch>
        </Router>
    );
};

export default App;