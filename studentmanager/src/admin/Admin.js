import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div className="gray-bg section-padding" id="feature-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                            <div className="page-title">
                                <h2>ADMIN FEATURES</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus at, facere harum fugiat!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="box">
                                <div className="box-icon">
                                    <img src="images/portfolio-icon-1.png" alt="" />
                                </div>
                                <h3>Create User</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas nulla est adipisci,</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="box">
                                <div className="box-icon">
                                    <img src="images/portfolio-icon-2.png" alt="" />
                                </div>
                                <h3>Create Student</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas nulla est adipisci,</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="box">
                                <div className="box-icon">
                                    <img src="images/portfolio-icon-3.png" alt="" />
                                </div>
                                <h3>Modify Student</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas nulla est adipisci,</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="box">
                                <div className="box-icon">
                                    <img src="images/portfolio-icon-4.png" alt="" />
                                </div>
                                <h3>Search</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas nulla est adipisci,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
