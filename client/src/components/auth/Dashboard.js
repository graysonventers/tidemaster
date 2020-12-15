import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';

const Dashboard = ({ backgroundPrimary }) => {
    return (
        <Fragment>
            <Navbar />
            <div className="center" style={backgroundPrimary}> 

                {/* if user DOESN'T have favorite spots */}

                {/* <div className="row" style={{ paddingTop: '30vh' }}>
                        <div className="col s6 offset-s3 center">
                            <div className="card cyan darken-3">
                                <div className="card-content white-text">
                                    <span className="card-title">Your Top Spots</span>
                                    <p>Add one or more of your favorite surf spots</p>
                                </div>
                                <section>
                                <div className="card-action">
                                    <Link to="/reports"><i className="material-icons" style={{ verticalAlign: 'middle' }}>add</i><span style={{ verticalAlign: 'middle' }}>Add favorites</span></Link>
                                </div>
                                </section>
                            </div>
                        </div>
                    </div> */}
                    
                {/* if user DOES have favorite spots */}
                <div className="container" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                    <Link to="/reports/:id">
                        <div className="card hoverable black-text center" style={{ opacity: '80%', height: '80px', verticalAlign: 'middle' }}>
                            
                            <div className="row" style={{ height: '100%' }}>
                                <div style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">Trails</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">3-4 ft</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Fair to Good</div>
                                <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                    <a href="#deleteSurfSpot" style={{ color: '#ee6e73' }}>
                                        <i className="material-icons small">clear</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/reports/:id">
                        <div className="card hoverable black-text center" style={{ opacity: '80%', height: '80px', verticalAlign: 'middle' }}>
                            
                            <div className="row" style={{ height: '100%' }}>
                                <div style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">Staircase</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">2-3 ft</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Poor to Fair</div>
                                <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                    <a href="#deleteSurfSpot" style={{ color: '#ee6e73' }}>
                                        <i className="material-icons small">clear</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

Dashboard.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Dashboard;
