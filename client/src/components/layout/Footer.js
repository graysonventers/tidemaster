import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
           <footer className="page-footer black-text center" style={{ left: '0', bottom: '0', width: '100%', paddingBottom: '1px'}}>
                <div className="container">
                <div className="row">
                        <div className="col s4" >
                                <Link className="black-text" to="/">TideMaster</Link>
                                <br></br>
                                Copyright 2020<br></br>
                                A Portfolio Project
                        </div>
                        <div ></div>
                        <div className="col s4"><Link className="black-text" to="/about">About</Link></div>
                        <div className="col s4"><Link className="black-text" to="/support">Support</Link></div>
                    </div>
                </div>
            </footer>     
        </Fragment>
    )
};

export default Footer;
