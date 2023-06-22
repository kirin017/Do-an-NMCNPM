import React from 'react';
import { useState } from 'react';
import Products from './components/Products/Products';
import Narbar from './components/Narbar/Narbar';
import SideBar from './components/SideBar/SideBar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AccountManagement from './components/Account/account/account'
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/Signup';
import Dashboard from './components/dashboard/Dashboard';
// import Bills from './components/Bills/Bills'
import Orders from './components/Orders/Orders';
import Topbar from './components/admin/Topbar'
import HistoryOrders from './components/HistoryOrders/HistoryOrders';

const App = () => {
    const [typeUser, setTypeUser] = useState(-1);
    const [userName, setUserName] = useState('');
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '100px' }}>
                        <Products />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '170px' }}>
                        <Login setUserName={setUserName} setTypeUser={setTypeUser} />
                    </div>
                </Route>
                <Route exact path="/signup">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '170px' }}>
                        <SignUp />
                    </div>
                </Route>
                <Route exact path="/cart">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '190px' }}>
                        <Cart typeUser={typeUser}></Cart>
                    </div>
                </Route>
                <Route exact path="/product/:id">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '230px' }}>
                        <ProductDetail></ProductDetail>
                    </div>
                </Route>
                <Route exact path="/historyOrder">
                    <Narbar userName={userName} typeUser={typeUser} setUserName={setUserName} setTypeUser={setTypeUser} />
                    <div style={{ marginTop: '190px', marginLeft: '40px' }}>
                        <HistoryOrders typeUser={typeUser}/>
                    </div>
                </Route>
                <Route exact path="/admin">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px' }}>
                        Giao diện trang chủ admin
                    </div>
                </Route>
                <Route exact path="/admin/product">
                    <Narbar />
                    <SideBar></SideBar>
                    <div style={{ marginTop: '140px', marginLeft: '190px' }}>
                        <Products></Products>
                    </div>
                </Route>
                <Route exact path="/admin/order">
                    <Topbar></Topbar>
                    <SideBar></SideBar>
                    <div style={{ marginTop: '50px', marginLeft: '250px' }}>
                        <Orders />
                    </div>
                </Route>
                <Route exact path="/admin/account">
                    <Topbar></Topbar>
                    <div style={{ marginTop: '50px' }}>
                        <SideBar></SideBar>
                    </div>
                    <div style={{ marginTop: '10px', marginLeft: '250px' }}>
                        <AccountManagement />
                    </div>
                </Route>
                <Route exact path="/admin/statistic">
                    <div style={{ marginTop: '170px', marginLeft: '50px' }}>
                        <Dashboard />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;