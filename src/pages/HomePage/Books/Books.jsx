import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./data/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  //   console.log(books);
  return (
    <>
      <section id="books" className="mb-[100px]">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center mb-4 md:mb-9">
          Books
        </h2>
        <div
          id="books-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {books &&
            books?.map((book) => <Book key={book?.bookId} book={book} />)}
        </div>
      </section>
    </>
  );
};

export default Books;
