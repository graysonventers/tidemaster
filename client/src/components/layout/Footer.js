import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            
           <footer className="page-footer black-text center" style={{ left: '0', bottom: '0', width: '100%', paddingBottom: '1px'}}>
                <div className="container">
                <div className="row">
                        <div className="col s4" >
                                <a className="black-text" href="#landing/dashboard">TideMaster</a>
                                <br></br>
                                Copyright 2020<br></br>
                                A Portfolio Project
                        </div>
                        <div ></div>
                        <div className="col s4"><a className="black-text" href="#about">About</a></div>
                        <div className="col s4"><a className="black-text" href="#support">Support</a></div>
                    </div>
                
                </div>
                
                    
            </footer> 
            
        </Fragment>
    )
}

export default Footer;
