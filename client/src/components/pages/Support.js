import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Support = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title center">
                                Support
                            </div>
                            <div className="card-content">
                                
                                <div className="col s12 center">
                                   <p>
                                    If you care to support this website than please hire the creator.....he's currently looking for employment.
                                   </p><br></br>
                                   <span>graysonventers@gmail.com</span>
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

export default Support; 
