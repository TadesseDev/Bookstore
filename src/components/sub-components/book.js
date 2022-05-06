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
      <div className="content">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <small className="author">{author}</small>
        <ul>
          <li><a href="#temp">Comment</a></li>
          <li><a href="#temp">Remove</a></li>
          <li><a href="#temp">Edit</a></li>
        </ul>
      </div>
      <div id="completed">
        <div className="percent-circle" />
        <div>
          <h1>{Math.floor(Math.random() * 100)}</h1>
          <small>completed</small>
        </div>
      </div>
      <div>
        <p className="curent-chapter">curent chapter</p>
        <p className="chapter">chapter 17</p>
        <button
          className="remove-book"
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
