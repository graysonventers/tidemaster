import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Landing = () => {

    const onClick = () => {
        let history = createBrowserHistory();
        history.goBack();
    };

    return (
        <Fragment>
            <Navbar />
            <div className="center backgroundPrimary" >
                <div className="container" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
                    <div className="row">
                        <div className="card col s12" style={{ paddingBottom: '30px', paddingTop: '30px' }}>
                            <div className="card-title">
                                404 - Not Found Old Friend
                            </div>
                            <div className="card-content">
                                
                                <div className="col s8 offset-s2">
                                    <button className="btn btn-small cyan darken-3" style={{ margin: '5px'}}type="submit" onClick={onClick}>Go Back</button>
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

export default Landing; 
