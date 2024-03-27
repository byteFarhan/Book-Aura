import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "./ListedBook/ListedBook";

const ListedBooks = () => {
  const books = useLoaderData();
  //   console.log(books);
  const [storedReadBooksId, setStoredReadBooksId] = useState([]);
  const [storedWishListId, setStoredWishListId] = useState([]);
  //   const readBooks = books.filter(book=> )
  const filterListedBooks = (arrOfListedIds, listedBooks) => {
    const filteredBooks = [];
    if (!arrOfListedIds.length) {
      return filteredBooks;
    }
    for (const book of listedBooks) {
      const isBookListed = arrOfListedIds.find((id) => id === book.bookId);
      console.log(isBookListed);
      if (isBookListed) {
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  };

  const getDataFromLocalStorage = (keyName) => {
    const data = JSON.parse(localStorage.getItem(keyName));
    if (data) {
      return data;
    }
    return [];
  };
  useEffect(() => {
    const newReadBooks = getDataFromLocalStorage("readBooks");
    setStoredReadBooksId(newReadBooks);
  }, []);
  console.log("readBooks", storedReadBooksId);
  useEffect(() => {
    const newWishList = getDataFromLocalStorage("wishList");
    setStoredWishListId(newWishList);
  }, []);
  console.log("wishList", storedWishListId);
  const readList = filterListedBooks(storedReadBooksId, books);
  const wishList = filterListedBooks(storedWishListId, books);
  console.log("filteredReadList", readList);
  console.log("filteredWishList", wishList);
  return (
    <section id="listed-books">
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <TabPanel>
          {readList?.length &&
            readList?.map((book) => (
              <ListedBook key={book?.bookId} book={book} />
            ))}
        </TabPanel>
        <TabPanel>
          {wishList?.length &&
            wishList?.map((book) => (
              <ListedBook key={book?.bookId} book={book} />
            ))}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ListedBooks;
