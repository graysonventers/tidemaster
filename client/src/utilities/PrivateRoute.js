import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    const authenticated = isAuthenticated;

    if (authenticated) {
        return <Route {...rest} render={() => <Component {...rest} /> }/>
    } else {
        return <Redirect to="/login" />
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, {})(PrivateRoute);