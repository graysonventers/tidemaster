import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRoute from './utilities/PrivateRoute';
import store from './redux/store';
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Support from './components/pages/Support';
import Search from './components/pages/Search';
import Reports from './components/pages/reports/Reports';
import Dashboard from './components/auth/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Report from './components/report/Report';
import setAuthToken from './utilities/setAuthToken';
import { loadUser } from './redux/actions/authActions';

import './style.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
};

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/reports/:id" component={Report}>
              
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/reports">
              <Reports />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>
  )
};

export default App;
