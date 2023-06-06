import './App.css';
import  LoginButton from "./components/login";
import  LogoutButton from "./components/logout";
import HomePage from './components/HomePage';
import { useEffect } from 'react';
import { gapi}  from  'gapi-script';
import Navbar from './components/Navbar';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });


  // var accessToken = gapi.auth.getToken().accessToken; ### Para ter o acces token para a api
  


  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;