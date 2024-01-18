import { useState } from "react";
import { BooksGrid, Footer, Header, Navbar } from "./components";
import { bookLists } from "./utils/data.js";

export default function App() {
  const initialState = bookLists;

  const [books, setBooks] = useState(initialState);

  const handleSearch = (searchItem) => {
    // console.log(searchItem);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setBooks([...filtered]);
  };
  const handleFavourite = (bookId) => {
    // console.log(bookId);
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavourite: !book.isFavourite };
        } else {
          return book;
        }
      })
    );
  };
  const handleSort = (sort) => {
    if (sort === "name_asc") {
      const sorted = [...books].sort((a, b) =>
        a.title.toLowerCase()[sort] < b.title.toLowerCase()[sort] ? 1 : -1
      );
      setBooks(sorted);
    }
    if (sort === "name_desc") {
      const sorted = [...books].sort((a, b) =>
        a.title.toLowerCase()[sort] > b.title.toLowerCase()[sort] ? 1 : -1
      );
      setBooks(sorted);
    }
    if (sort === "year_asc") {
      const sorted = [...books].sort((a, b) =>
        a.year[sort] > b.year[sort] ? 1 : -1
      );
      setBooks(sorted);
    }
    if (sort === "year_desc") {
      const sorted = [...books].sort((a, b) =>
        a.year[sort] < b.year[sort] ? 1 : -1
      );
      setBooks(sorted);
    }
  };
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header onSearch={handleSearch} onSort={handleSort} />
        <BooksGrid books={books} onFavourite={handleFavourite} />
      </main>
      <Footer />
    </>
  );
}
