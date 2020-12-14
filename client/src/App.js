import React from 'react';
import img from './images/pexels-george-keating-948331.jpg'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
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
      <Navbar />
      {/* <Landing backgroundPrimary={backgroundPrimary} /> */}
      {/* <Dashboard backgroundPrimary={backgroundPrimary} /> */}
      {/* <Register backgroundPrimary={backgroundPrimary} /> */}
      <Login backgroundPrimary={backgroundPrimary} />
      {/* <Report /> */}
      <Footer />
    </div>
  )
};

export default App;
