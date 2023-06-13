import React from 'react';
import './BookHighlightSection.css';

const BookHighlightSection = () => {
  const books = [
    {
      title: 'Livro 1',
      author: 'Jhon Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://covers.openlibrary.org/b/id/12673121-L.jpg',
    },
    {
      title: 'Livro 2',
      author: 'Gaspar Teixeira',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://th.bing.com/th/id/OIP.IZubo-N23GvPpS6jWn6EsgHaLG?pid=ImgDet&w=151&h=226&c=7',
    },
    {
      title: 'Livro 10',
      author: 'Rosalia Melo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://th.bing.com/th/id/OIP.warIdXRaSdW5aKWqo_XeUAHaLH?pid=ImgDet&w=204&h=306&c=7',
    },
    {
      title: 'Livro 14',
      author: 'Rosalia Melo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://th.bing.com/th/id/OIP.mQUvN_ubUmkJRYQBppcqIwAAAA?pid=ImgDet&w=204&h=230&c=7',
    },
    // Add more books as needed
  ];

  return (
    <div className="book-highlight-section">
      {books.map((book, index) => (
        <div className="book-card" key={index}>
          <img className="book-image" src={book.imageUrl} alt={book.title} />
          <div className="book-details">
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
            <p className="book-description">{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookHighlightSection;
