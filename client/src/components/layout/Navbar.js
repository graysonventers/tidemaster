import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className="brand-logo" to="/">
                                TideMaster
                            </Link>
                            <a href="#sideNav" data-target="sidenav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/reports">Reports</Link>
                                </li>
                                <li>
                                    <Link to="/search">Search</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/Login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <ul className="sidenav cyan darken-3" id="sidenav">
                <li>
                    <Link className="white-text" to="/reports">Reports</Link>
                </li>
                <li>
                    <Link className="white-text" to="/search">Search</Link>
                </li>
                <li>
                    <Link className="white-text" to="/register">Register</Link>
                </li>
                <li>
                    <Link className="white-text" to="/login">Login</Link>
                </li>
            </ul>
        </Fragment>
    )
};

export default Navbar;
