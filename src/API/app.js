const appId = 'ZijPZapn481OKArMG39M';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZijPZapn481OKArMG39M/books/';
const getBookJson = (book) => JSON.stringify({
  "item_id": book.id,
  "title": book.title,
  "author": book.author,
  "category": book.category
});

const getBooksAPI = async () => {
  try {
    const result = await fetch(baseUrl);
    const data = await result.json();
    return { status: true, payload: data };
  } catch (error) {
  }
}

