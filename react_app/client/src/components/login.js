import { GoogleLogin } from 'react-google-login';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

function Login({ onSuccess }) {
  const handleSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    onSuccess();
  }
  
  const handleFailure = (res) => {
    console.log("LOGIN FAILED! Current user: ", res);
  }
  
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
