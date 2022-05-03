import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

export default function book({ title, author, id }) {
  const dispatch = useDispatch();
  const handelRemoveBook = (event) => {
    console.log(event.target.getAttribute('id'));
    dispatch(removeBook(event.target.getAttribute('id')));
  };
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <small>{author}</small>
        <ul>
          <li><a href="#temp">Comment</a></li>
          <li><a href="#temp">Remove</a></li>
          <li><a href="#temp">Edit</a></li>
        </ul>
        <button
          type="submit"
          id={id}
          onClick={handelRemoveBook}
        >
          Remove this book
        </button>
      </div>
    </article>
  );
}
