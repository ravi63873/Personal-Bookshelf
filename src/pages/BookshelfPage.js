import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div>
      <Bookshelf bookshelf={bookshelf} />
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default BookshelfPage;
