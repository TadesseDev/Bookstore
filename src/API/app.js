const appId = 'ZijPZapn481OKArMG39M';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const bookString = (book) => JSON.stringify({
  item_id: book.id,
  title: book.title,
  author: book.author,
  category: book.category,
});

export const getBooksAPI = async () => {
  try {
    const result = await fetch(baseUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const addBookAPI = async (book) => {
  try {
    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bookString(book),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const removeBookAPI = async (id) => {
  const url = `${baseUrl}/${id}`;
  try {
    const result = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
    return result;
  } catch (error) {
    return error;
  }
};
