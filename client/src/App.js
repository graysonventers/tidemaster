import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import Register from './components/auth/Register';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Dashboard /> */}
      {/* <Landing /> */}
      <Register />
      <Footer />
    </div>
  );
}

export default App;
