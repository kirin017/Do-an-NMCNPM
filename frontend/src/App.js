import React from 'react';
import Products from './components/Products/Products';
import Narbar from './components/Narbar/Narbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                <div>
                    <Narbar />
                    <div style={{ marginTop: '60px' }}></div>
                    <Products />
                </div>
                </Route>
                <Route exact path="/login">
                    <div>Giao diện đăng nhập</div>
                </Route>
                <Route exact path="/signup">
                    <div>Giao diện đăng ký</div>
                </Route>
                <Route exact path="/cart">
                    <div>Giao diện giở hàng</div>
                </Route>
            </Switch>
        </Router>
        
    );
};

export default App;