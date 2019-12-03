import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Introduce from './component/Introduce';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Admin from './admin/Admin';

export default class Direction extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Introduce}/>
                <Route exact path="/home-page" component={Introduce}/>
                <Route exact path="/about-page" component={About}/>
                <Route exact path="/contact-page" component={Contact}/>
                <Route exact path="/login-page" component={Login}/>
                <Route exact path="/admin-page" component={Admin}/>
            </div>
        )
    }
}
