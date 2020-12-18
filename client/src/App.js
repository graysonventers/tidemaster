import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Report from './components/reports/Report';

// data (temporary)
import pipeline from './data/pipeline_616_forecast.json';

// function to change localTimestamp to date.
const unixTimestampToDate = timestamp => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject;
};

function App() {
  
  const backgroundPrimary = {
    backgroundImage: `url(${img})`, 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    minHeight: '84vh'
  };

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
    </div>
  )
};

export default App;
