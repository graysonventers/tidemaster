import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import img from './images/heroImage.jpg'
import Landing from './components/pages/Landing';
import NotFound from './components/pages/NotFound';
import Dashboard from './components/auth/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Report from './components/reports/Report';

const backgroundPrimary = {
  backgroundImage: `url(${img})`, 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: 'cover', 
  minHeight: '84vh'
};

function App() {
  

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard backgroundPrimary={backgroundPrimary} />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route exact path="/register">
            <Register backgroundPrimary={backgroundPrimary} />
          </Route>
          <Route exact path="/login">
            <Login backgroundPrimary={backgroundPrimary} />
          </Route>
          <Route exact path="/">
            <Landing backgroundPrimary={backgroundPrimary} />
          </Route>
          <Route>
            <NotFound backgroundPrimary={backgroundPrimary} />
          </Route>
        </Switch>
      </Router>  
    </div>
  )
};

export default App;
