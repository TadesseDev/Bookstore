import React from 'react'
import Book from './sub-components/book';
import AddNewBook from './sub-components/AddNewBook'
export default function Books() {
  const books = [
    {
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
    {
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div>
      {books.map(book => (
        <Book title={book.title} author={book.author} />
      ))}
      <AddNewBook />
    </div>
  )
}
