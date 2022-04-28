import React from 'react';
import Book from './sub-components/book';
import AddNewBook from './sub-components/AddNewBook';

export default function Books() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddNewBook />
    </div>
  );
}
