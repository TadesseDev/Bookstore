import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import './addBook.css';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const handleNewBookSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements[0];
    const author = event.target.elements[1];
    dispatch(addBook(title.value, author.value));
    title.value = '';
    author.value = '';
  };
  return (
    <div id="add-new-book">
      <hr />
      <form action="#" method="POST" onSubmit={handleNewBookSubmit}>
        <fieldset>
          <legend>ADD NEW BOOK</legend>
          <input className="book-title" type="text" name="title" id="title" placeholder="Book Title" required />
          <input type="text" name="author" id="author" placeholder="Book author" required />
          <button id="add-book-button" type="submit">Add Book</button>
        </fieldset>
      </form>
    </div>
  );
}
