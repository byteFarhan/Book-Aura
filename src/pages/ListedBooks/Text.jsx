import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBook from "./ListedBook/ListedBook";
import useFilterListedBooks from "../../hooks/useFilterListedBooks";

const ListedBooks = () => {
  const books = useLoaderData();
  //   console.log(books);
  const [storedReadBooksId, setStoredReadBooksId] = useState([]);
  const [storedWishListId, setStoredWishListId] = useState([]);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const getDataFromLocalStorage = (keyName) => {
    const data = JSON.parse(localStorage.getItem(keyName));
    if (data) {
      return data;
    }
    return [];
  };
  // const filterListedBooks = (arrOfListedIds, books) => {
  //   const filteredBooks = [];
  //   if (!arrOfListedIds.length) {
  //     return filteredBooks;
  //   }
  //   for (const book of books) {
  //     const isBookListed = arrOfListedIds.find((id) => id === book.bookId);
  //     // console.log(isBookListed);
  //     if (isBookListed) {
  //       filteredBooks.push(book);
  //     }
  //   }
  //   return filteredBooks;
  // };
  useEffect(() => {
    const newReadBooks = getDataFromLocalStorage("readBooks");
    setStoredReadBooksId(newReadBooks);
    // const readListDefault = filterListedBooks(storedReadBooksId, books);
    // setReadList(readListDefault);
  }, []);
  //console.log("readBooks", storedReadBooksId);
  useEffect(() => {
    const newWishList = getDataFromLocalStorage("wishList");
    setStoredWishListId(newWishList);
  }, []);

  // const newReadBooks = getDataFromLocalStorage("readBooks");
  // setStoredReadBooksId(newReadBooks);
  // const newWishList = getDataFromLocalStorage("wishList");
  // setStoredWishListId(newWishList);
  // console.log("wishList", storedWishListId);
  const readListDefault = useFilterListedBooks(storedReadBooksId, books);
  // useEffect(() => {
  //   setReadList(readListDefault);
  // }, [readListDefault]);
  const wishListDefault = useFilterListedBooks(storedWishListId, books);
  // useEffect(() => {
  //   setWishList(wishListDefault);
  // }, [wishListDefault]);
  //console.log("filteredReadList", readListDefault);
  //console.log("filteredWishList", wishListDefault);
  const handleSortByRating = (defltReadListedBooks, defltWishListedBooks) => {
    // Sort by rating
    const sortByRatingReadList = defltReadListedBooks
      .slice()
      .sort((a, b) => b.rating - a.rating);
    const sortByRatingWishList = defltWishListedBooks
      .slice()
      .sort((a, b) => b.rating - a.rating);
    console.log("sortByRatingReadList", sortByRatingReadList);
    console.log("sortByRatingWishList", sortByRatingWishList);
  };
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
              <a onClick={() => handleSortByRating(readList, wishListDefault)}>
                Rating
              </a>
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
            {readListDefault?.length ? (
              readListDefault?.map((book) => (
                <ListedBook key={book?.bookId} book={book} />
              ))
            ) : (
              <div className="flex items-center justify-center h-96">
                <h3 className="text-2xl text-center md:text-3xl font-work-sans">
                  No book has been listed yet!
                </h3>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {wishListDefault?.length ? (
              wishListDefault?.map((book) => (
                <ListedBook key={book?.bookId} book={book} />
              ))
            ) : (
              <div className="flex items-center justify-center h-96">
                <h3 className="text-2xl text-center md:text-3xl font-work-sans">
                  No book has been listed yet!
                </h3>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ListedBooks;
