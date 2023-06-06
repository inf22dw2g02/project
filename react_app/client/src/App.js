import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className='App'>
      <Navbar />
      {isAuthenticated ? <HomePage /> : null}
      {!isAuthenticated && <LoginButton onSuccess={handleLogin} />}
      {isAuthenticated && <LogoutButton onLogoutSuccess={handleLogout} />}
    </div>
  );
}

export default App;
