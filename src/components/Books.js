import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './sub-components/book';
import AddNewBook from './sub-components/AddNewBook';
import { getBooksFromServer } from '../redux/books/books';
import './books.css';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(getBooksFromServer());
  }, []);
  return (
    <div id="books-container">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddNewBook />
    </div>
  );
}
