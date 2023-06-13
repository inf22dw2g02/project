import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>You are logged in and can access the content of this page.</p>
      <Link to="/book">Go to Book Page</Link>
      <br/>
      <Link to="/autores">Go to Autores Page</Link>
    </div>
  );
};

export default HomePage;
