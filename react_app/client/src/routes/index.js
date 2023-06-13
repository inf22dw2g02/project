import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
