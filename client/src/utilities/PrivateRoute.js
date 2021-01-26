import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {

    if (isAuthenticated === true) {
        return <Route render={() => <Component {...rest} /> }/>
    } else {
        return <Redirect to="/login" />
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoute);