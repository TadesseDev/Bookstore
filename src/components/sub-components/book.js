import React from 'react'

export default function book({ title, author, id }) {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <small>{author}</small>
        <ul>
          <li key={id}><a href="#">Comment</a></li>
          <li><a href="#">Remove</a></li>
          <li><a href="#">Edit</a></li>
        </ul>
        <button type="submit">Remove this book</button>
      </div>
    </article>
  )
}
