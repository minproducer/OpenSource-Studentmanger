import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="footer-area relative sky-bg">
                <div className="absolute footer-bg"></div>
                <div className="footer-top" style={{ marginBottom: '0' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '150px' }}  >
                            <div className="page-title">
                                <h2>Login</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus at, facere harum fugiat!</p>
                            </div>
                            <div className="text-center" style={{width: '500px',marginLeft: '322px'}}>
                                <form action="process.php" id="contact-form" method="post" className="text-center login-form">
                                    <input type="text" id="form-name" name="form-name" placeholder="Username" className="form-control" required="required" />
                                    <input type="password" id="form-password" name="form-password" className="form-control" placeholder="Password" required="required" />
                                    <button type="submit" className="button">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
