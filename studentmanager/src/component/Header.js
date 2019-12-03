import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="mainmenu-area affix-top" data-spy="affix" data-offset-top={100}>
                <div className="container">
                    {/*Logo*/}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#primary-menu">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink to="/">
                        <a href="#" className="navbar-brand logo">
                            <h2>Cabin</h2>
                        </a>
                        </NavLink>
                    </div>
                    {/*Logo/*/}
                    <nav className="collapse navbar-collapse" id="primary-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><NavLink to="/home-page">Home</NavLink></li>
                            <li className><NavLink to="/about-page">About</NavLink></li>
                            <li className><NavLink to="/contact-page">Contact</NavLink></li>
                            <li className><NavLink to="/login-page">Log in</NavLink></li>
                        </ul>
                    </nav>
                </div>
                
            </div>


        )
    }
}
export default Header;