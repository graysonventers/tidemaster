import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const About = () => {

    return (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title center">
                                About
                            </div>
                            <div className="card-content center">
                                <div className="col s12">
                                   <p>
                                    TideMaster was built by Grayson Venters. It is a simplified version of other surf report applications like Surfline.com and MagicSeaweed.com. 
                                   </p><br></br>
                                   <p >
                                   This app was built using the MERN stack. It utilizes additional technologies such as Materialize CSS, react router, redux, and axios on the front end. On the back end, I have implemented technologies such as express-validator, brcrypt.js and jsonwebtoken.
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

export default About; 
