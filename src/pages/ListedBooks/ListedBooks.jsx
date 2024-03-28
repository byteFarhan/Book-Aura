import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
      <div className="py-6 rounded-2xl bg-base-200">
        <h3 className="text-3xl text-center font-work-sans">Books</h3>
      </div>
      <div className="mt-8 mb-10 text-center">
        <details className="text-2xl dropdown">
          <summary className="flex items-center m-1 btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white">
            Sort By <MdOutlineKeyboardArrowDown className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Publisher year</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
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
      </div>
    </section>
  );
};

export default ListedBooks;
