import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';
import DashboardNoSpots from './DashboardNoSpots';
import DashboardSpots from './DashboardSpots';

const Dashboard = ({ auth: { user } }) => {

    return user === null ? (<Loading />) :  
        (
        <Fragment>
            <Navbar />
            <div className="center backgroundPrimary"> 
                {!user.favoriteSpots.length > 0 ? 
                    <DashboardNoSpots /> : 
                    <DashboardSpots spots={user.favoriteSpots}/>}                
            </div>
            <Footer />
        </Fragment>
    )
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
