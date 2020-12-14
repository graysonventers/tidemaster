import React from 'react';
import PropTypes from 'prop-types';


const Landing = ({ backgroundPrimary }) => {
    return (
        <div className="center" style={backgroundPrimary}>
            <section className="container section large text-center" style={{ padding: '10%' }}>
                <h1 className="h1 white-text">
                    TideMaster
                </h1>
                <a href="#register" className="btn cyan darken-3">Register</a>
                <span className="white-text" style={{margin: '0 3rem'}}></span>
                <a href="#login" className="btn cyan darken-3">Login</a>
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
    )
};

Landing.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Landing; 
