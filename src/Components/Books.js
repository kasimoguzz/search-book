import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

function Books() {
  const books = useSelector((state) => state.book.item);
  return (
    <div className='books-box'>
      {
        books.map((book)=> (
            <Book book={book} key={book.id} />
        ))
      }
    </div>
  );
}

export default Books;
