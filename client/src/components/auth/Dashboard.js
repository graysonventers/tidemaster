import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import PropTypes from 'prop-types';

const Dashboard = ({ backgroundPrimary, user }) => {

    const onClick = () => {
        // Delete surfSpot from user's favorites
    };

    return user === null ? (<Loading />) :  
        (
        <Fragment>
            <Navbar />
            <div className="center" style={backgroundPrimary}> 

                {!user.favoriteSpots.length > 0 ? (<div className="row" style={{ paddingTop: '30vh' }}>
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
                    </div>) : (<div className="container" style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                    <Link to="/reports/:id">
                        <div className="card hoverable black-text center" style={{ opacity: '80%', height: '80px', verticalAlign: 'middle' }}>
                            
                            <div className="row" style={{ height: '100%' }}>
                                <div style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">Trails</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">3-4 ft</div>
                                <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Fair to Good</div>
                                <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                    <button onClick={onClick} style={{ color: '#ee6e73', background: 'none', border: 'none' }}>
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
    backgroundPrimary: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    loading: state.loading
});

export default connect(mapStateToProps)(Dashboard);
