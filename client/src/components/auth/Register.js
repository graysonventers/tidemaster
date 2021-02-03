import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';
import { register } from '../../redux/actions/authActions';

const Register = ({ backgroundPrimary, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    };

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2) {
            alert('Passwords do not match');
        } else {
            register({name, email, password});
        }
    };

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }
 
    return (
        <Fragment>
            <Navbar />
            <div className="center backgroundPrimary">
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title">
                                Register
                            </div>
                            <form className="card-content" onSubmit={e => onSubmit(e)}>
                                <div className="input-field col s8 offset-s2">
                                    <input id="name" type="text" className="validate" onChange={onChange}></input>
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="email" type="email" className="validate" onChange={onChange}></input>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="password" type="password" className="validate" onChange={onChange}></input>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="password2" type="password" className="validate" onChange={onChange}></input>
                                    <label htmlFor="password2">Confirm Password</label>
                                </div>
                                <div className="col s8 offset-s2">
                                    <button className="btn btn-small cyan darken-3" style={{ margin: '5px'}}type="submit">Submit</button>
                                </div>
                                <div className="col s8 offset-s2">
                                    <span>Already registered? <Link style={{ color: "#00838f" }} to="/login">Log in</Link></span>
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

Register.propTypes = {
    auth: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { register })(Register);
