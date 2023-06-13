import React from 'react';
import './home.css';
import BookHighlightSection from './BookHighlightSection';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to the Home Page!</h1>
      <p className="description">You are logged in and can access the content of this page.</p>
      <h2>Destaques</h2>
      <BookHighlightSection />
      <h2>Clica no botao abaixo para para aceder a Livros </h2>
      <Link to="/book" className="button">Livros</Link>
    </div>
  );
};

export default HomePage;

