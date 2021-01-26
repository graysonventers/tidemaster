import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';


const Landing = ({ backgroundPrimary, isAuthenticated }) => {

    if(isAuthenticated) {
        return <Redirect to='/dashboard'/>
    }

    return (
        <Fragment>
            <Navbar />
            <div className="center" style={backgroundPrimary}>
                <section className="container section large text-center" style={{ padding: '10%' }}>
                    <h1 className="h1 white-text">
                        TideMaster
                    </h1>
                    <Link to="/register" className="btn cyan darken-3">Register</Link>
                    <span className="white-text" style={{margin: '0 3rem'}}></span>
                    <Link to="/login" className="btn cyan darken-3">Login</Link>
                </section>
                <section className="container section">
                    <h4 className="white-text">
                    Access surf reports from all over the world
                    </h4>
                    <h4 className="white-text">
                        Create an account to save your favorite surf spots
                        and quickly access your surf reports
                    </h4>
                </section>
            </div>
            <Footer />
        </Fragment>
    )
};

Landing.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(Landing); 
