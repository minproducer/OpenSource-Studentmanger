import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div div className="footer-area relative sky-bg" id="contact-page" style={{paddingTop: '0'}}>
                <div className="footer-middle" style={{marginBottom:'0',    padding: '85px 0 70px'}}>
                    <div className="container">
                        <div className="col-sm-3 pull-right">
                            <ul className="social-menu text-right x-left" style={{paddingTop:'0'}}>
                                <li><a href="#"><i className="ti-facebook" /></a></li>
                                <li><a href="#"><i className="ti-twitter" /></a></li>
                                <li><a href="#"><i className="ti-google" /></a></li>
                                <li><a href="#"><i className="ti-linkedin" /></a></li>
                                <li><a href="#"><i className="ti-github" /></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 pull-left">
                            <p>©Copyright 2018 All right resurved.  This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com">Colorlib</a></p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
