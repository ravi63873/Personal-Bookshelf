import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <div>
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf">Go to My Bookshelf</Link>
    </div>
  );
};

export default BookSearchPage;
