import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';


const Landing = ({ backgroundPrimary }) => {
    return (
        <Fragment>
            <Navbar />
            <div className="center" style={backgroundPrimary}>
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title">
                                404 - Not Found Old Friend
                            </div>
                            <div className="card-content">
                                
                                <div className="col s8 offset-s2">
                                    <button className="btn btn-small cyan darken-3" style={{ margin: '5px'}}type="submit">Go Back</button>
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

Landing.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Landing; 
