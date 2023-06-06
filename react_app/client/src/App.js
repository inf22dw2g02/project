import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import React from 'react';
import Navbar from './components/Navbar';


const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

const App = () => {

    useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });


  return (
    <div className='App'>
      <Navbar />
      <LoginButton />
      <LogoutButton />      
    </div>
  );
}

  // var accessToken = gapi.auth.getToken().accessToken; ### Para ter o acces token para a api



export default App;
