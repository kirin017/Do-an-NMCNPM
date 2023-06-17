import React from 'react';
import Products from './components/Products/Products';
import Narbar from './components/Narbar/Narbar';
import SideBar from './components/SideBar/SideBar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AccountManagement from './components/Account/account/account'
import Cart from './components/Cart/Cart';
import SignUp from './components/SignUp/Signup';
import Dashboard from './dashboard/Dashboard';
import Orders from './components/Orders/Orders';



const App = () => {
    // const [typeUser, settypeUser] = useState(0);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Narbar />
                    <div style={{ marginTop: '100px' }}>
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
                <Route exact path="/cart">
                    <Narbar />
                    <div style={{ marginTop: '100px' }}>
                        <Cart></Cart>
                    </div>
                </Route>
                <Route exact path="/product/:id">
                    <Narbar />
                    <div style={{ marginTop: '170px' }}>
                        <ProductDetail></ProductDetail>
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
                    <Narbar />
                    <SideBar></SideBar>
                    <div style={{ marginTop: '120px', marginLeft: '250px' }}>
                        <Orders />
                    </div>
                </Route>
                <Route exact path="/admin/account">
                    <Narbar />
                    <div style={{ marginTop: '200px' }}>
                        <SideBar></SideBar>
                    </div>
                    <div style={{ marginTop: '180px', marginLeft: '250px' }}>
                        <AccountManagement />
                    </div>
                </Route>
                <Route exact path="/admin/statistic">
                    <SideBar></SideBar>
                    <div style={{ marginTop: '170px', marginLeft: '250px' }}>
                        <Dashboard />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;