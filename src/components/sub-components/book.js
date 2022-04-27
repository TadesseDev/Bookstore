import React from 'react'

export default function book({ title, author }) {
  return (
    <article>
      <div>
        <h3>{title}</h3>
        <small>{author}</small>
        <ul>
          <li key='Comment'><a href="#">Comment</a></li>
          <li key='Remove'><a href="#">Remove</a></li>
          <li key='Edit'><a href="#">Edit</a></li>
        </ul>
        <button type="submit">Remove this book</button>
      </div>
    </article>
  )
}
