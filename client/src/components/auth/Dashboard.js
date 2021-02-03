import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';
import DashboardNoSpots from './DashboardNoSpots';

const Dashboard = ({ auth: { user } }) => {

    const deleteFavoriteSpot = e => {
        e.preventDefault();
        console.log(e.currentTarget.id);
        console.log('favoriteSpot deleted');
        
        // Delete surfSpot from user's favorites
        // const index = user.favoriteSpots.indexOf(e.target.id);
        // user.favoriteSpots.splice(index, 1);

        // update database with delete favoriteSpots action
        // return user.favoriteSpots;
    };

    return user === null ? (<Loading />) :  
        (
        <Fragment>
            <Navbar />
            <div className="center backgroundPrimary"> 

                {!user.favoriteSpots.length > 0 ? (<DashboardNoSpots />) : (<div className="container" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                    <Link to="/reports/:id">
                        <div className="card hoverable black-text center cardOpacity" style={{ height: '80px', verticalAlign: 'middle' }}>
                            
                            <div className="row" style={{ height: '100%' }}>
                                <div id="surfSpotName" style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">Trails</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">3-4 ft</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Fair to Good</div>
                                
                                <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                    <button id="deleteButton" onClick={e => deleteFavoriteSpot(e)} style={{ color: '#ee6e73', background: 'none', border: 'none' }}>
                                    <i className="material-icons small">clear</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>)}                
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
