import React from 'react';

export default function book({ title, author }) {
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
        <button type="submit">Remove this book</button>
      </div>
    </article>
  );
}
