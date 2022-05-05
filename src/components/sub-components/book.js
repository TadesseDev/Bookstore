import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './books.css';

export default function book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  const handelRemoveBook = (event) => {
    dispatch(removeBook(event.target.getAttribute('id')));
  };
  return (
    <article id="book">
      <div>
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <small className="author">{author}</small>
        <ul>
          <li><a href="#temp">Comment</a></li>
          <li><a href="#temp">Remove</a></li>
          <li><a href="#temp">Edit</a></li>
        </ul>
      </div>
      <button
        className="remove-book"
        type="submit"
        id={id}
        onClick={handelRemoveBook}
      >
        Remove this book
      </button>
    </article>
  );
}
