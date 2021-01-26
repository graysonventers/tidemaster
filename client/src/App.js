import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PrivateRoute from './utilities/PrivateRoute';
import store from './redux/store';
import img from './images/heroImage.jpg'
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
import { loadUser } from './redux/actions/authActions';

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
    store.dispatch(loadUser());
    }
  }, []);
  
  
  const backgroundPrimary = {
    backgroundImage: `url(${img})`, 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    minHeight: '84vh',
    paddingBottom: '1px'
  };

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/dashboard" backgroundPrimary={backgroundPrimary} component={Dashboard} />
            <Route exact path="/report">
              <Report backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/search">
              <Search backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/reports">
              <Reports backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/register">
              <Register backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/login">
              <Login backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/about">
              <About backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/support">
              <Support backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route exact path="/">
              <Landing backgroundPrimary={backgroundPrimary} />
            </Route>
            <Route>
              <NotFound backgroundPrimary={backgroundPrimary} />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
};

export default App;
