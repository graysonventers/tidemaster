import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css';

const Navbar = () => {
    useEffect(() => {
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav, {});
    });

    return (
        <Fragment>
            <div className="navbar-fixed">
                <nav className="cyan darken-3">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a className="brand-logo" href="#landing/dashboard">TideMaster</a>
                            <a href="#sideNav" data-target="sidenav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="#reports">Reports</a>
                                </li>
                                <li>
                                    <a href="#search">Search</a>
                                </li>
                                <li>
                                    <a  href="#register">Register</a>
                                </li>
                                <li>
                                    <a  href="#Login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav cyan darken-3" id="sidenav">
                <li>
                    <a className="white-text" href="#reports">Reports</a>
                </li>
                <li>
                    <a className="white-text" href="#search">Search</a>
                </li>
                <li>
                    <a className="white-text" href="#register">Register</a>
                </li>
                <li>
                    <a className="white-text" href="#Login">Login</a>
                </li>
            </ul>

        </Fragment>
    )
};

export default Navbar;
