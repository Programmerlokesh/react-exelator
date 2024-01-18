import { useState } from "react";
import { bookLists } from "./../utils/data";
import Book from "./Book";

export default function BooksGrid() {
  const initialState = bookLists;

  const [books, setBooks] = useState(initialState);
  console.log(books);
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}
