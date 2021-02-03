import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {

    if (auth.isAuthenticated === true) {
        return <Route render={() => <Component {...rest} /> }/>
    } else {
        return <Redirect to="/login" />
    }
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);