import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';

const Navbar = ({ isAuthenticated }) => {
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
                                {isAuthenticated ? 
                                    (<Fragment>
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </Fragment>) : 
                                        (<Fragment>
                                            <li>
                                                <Link to="/register">Register</Link>
                                            </li>
                                            <li>
                                                <Link to="/Login">Login</Link>
                                            </li>
                                        </Fragment>)}
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

                {isAuthenticated ? 
                                    (<Fragment>
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/logout">Logout</Link>
                                        </li>
                                    </Fragment>) : 
                                        (<Fragment>
                                            <li>
                                                <Link to="/register">Register</Link>
                                            </li>
                                            <li>
                                                <Link to="/Login">Login</Link>
                                            </li>
                                        </Fragment>)}
            </ul>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, {})(Navbar);
