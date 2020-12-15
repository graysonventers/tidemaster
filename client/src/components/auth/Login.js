import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';

const Login = ({ backgroundPrimary }) => {
    return (
        <Fragment>
            <Navbar />
            <div className="center" style={backgroundPrimary}>
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title">
                                Log In
                            </div>
                            <div className="card-content">
                                <div className="input-field col s8 offset-s2">
                                    <input id="email" type="email" className="validate"></input>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="password" type="password" className="validate"></input>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="col s8 offset-s2">
                                    <button className="btn btn-small cyan darken-3" style={{ margin: '5px'}}type="submit">Login</button>
                                </div>
                                <div className="col s8 offset-s2">
                                    <span>Don't have an account? <Link style={{ color: "#00838f" }} to="/register">Register</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
        
    )
};

Login.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Login;
