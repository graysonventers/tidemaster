import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import PropTypes from 'prop-types';


const About = ({ backgroundPrimary }) => {

    return (
        <Fragment>
            <Navbar />
            <div style={backgroundPrimary}>
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title center">
                                About
                            </div>
                            <div className="card-content center">
                                
                                <div className="col s12">
                                   <p>
                                    This website was built by Grayson Venters. It is a simplified version of other surf report applications like Surfline.com and MagicSeaweed.com. 
                                   </p><br></br>
                                   <p >
                                   I, Grayson, have built this app from scratch using the MERN stack. The app utilizes additional technologies such as Materialize CSS, react router, redux, and axios on the front end. On the back end, I have implemented technologies such as brcrypt.js and jsonwebtoken for security.
                                   </p>
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

About.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default About; 
