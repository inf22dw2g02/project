import { GoogleLogout } from 'react-google-login';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

function Logout({ onLogoutSuccess }) {
  const handleLogoutSuccess = () => {
    console.log("LOG OUT SUCCESSFUL!");
    onLogoutSuccess();
  }
  
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={handleLogoutSuccess}
      />
    </div>
  );
}

export default Logout;
