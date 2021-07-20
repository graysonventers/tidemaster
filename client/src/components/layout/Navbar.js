import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { logout } from '../../redux/actions/authActions';
import { clearSurfSpots } from '../../redux/actions/surfSpotActions';

const Navbar = ({ auth: { isAuthenticated, user, loading }, logout, clearSurfSpots }) => {
    useEffect(() => {
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav, {});
    });

    const onLogOut = () => {
        logout();
        clearSurfSpots();
    }

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
                                {isAuthenticated && !loading ? 
                                    (<Fragment>
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={() => onLogOut()}>Logout</Link>
                                        </li>
                                        <li>
                                            <span><b>{user.name}</b></span>
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
                {isAuthenticated ? (<Fragment>
                    <li>
                        <Link className="white-text" to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className="white-text" to="/" onClick={() => onLogOut()}>Logout</Link>
                    </li>
                </Fragment>) : (<Fragment>
                    <li>
                    <Link className="white-text" to="/register">Register</Link>
                    </li>
                    <li>
                        <Link className="white-text" to="/Login">Login</Link>
                    </li>
                </Fragment>)}            
            </ul>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    auth: state.auth,
    surf: state.surf
})

export default connect(mapStateToProps, {logout, clearSurfSpots})(Navbar);
