import './App.css';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import Book from './components/Book';
import {AutoresPage} from './components/autoresPage';
import LivroPage from './components/livrosPage';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = (name) => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <div className='App'>
      <Navbar isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} userName={userName} />
      {isAuthenticated ? <HomePage /> : null}

      {isAuthenticated ? <Book /> : null} 
      <AutoresPage />
      <LivroPage />
    </div>
  );
}

export default App;