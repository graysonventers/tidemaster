import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/authActions';

const Login = ({ login, auth }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        login({email, password});
    };

    if (auth.isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Fragment>
            <Navbar />
            <div className="center backgroundPrimary">
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title">
                                Log In
                            </div>
                            <form className="card-content" onSubmit={onSubmit}>
                                <div className="input-field col s8 offset-s2">
                                    <input id="email" type="email" className="validate" onChange={onChange}></input>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="password" type="password" className="validate" onChange={onChange}></input>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="col s8 offset-s2">
                                    <button className="btn btn-small cyan darken-3" style={{ margin: '5px'}}type="submit">Login</button>
                                </div>
                                <div className="col s8 offset-s2">
                                    <span>Don't have an account? <Link style={{ color: "#00838f" }} to="/register">Register</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>   
    )
};

Login.propTypes = {
  auth: PropTypes.object.isRequired  
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);
