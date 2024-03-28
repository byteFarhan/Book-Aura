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
  // const [storedReadBooksId, setStoredReadBooksId] = useState([]);
  // const [storedWishListId, setStoredWishListId] = useState([]);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const getDataFromLocalStorage = (keyName) => {
    const data = JSON.parse(localStorage.getItem(keyName));
    if (data) {
      return data;
    }
    return [];
  };
  const filterListedBooks = (arrOfListedIds, books) => {
    const filteredBooks = [];
    if (!arrOfListedIds.length) {
      return filteredBooks;
    }
    for (const book of books) {
      const isBookListed = arrOfListedIds.find((id) => id === book.bookId);
      // console.log(isBookListed);
      if (isBookListed) {
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  };
  // let storedReadBooksIds = getDataFromLocalStorage("readBooks");
  // let storedWishListIds = getDataFromLocalStorage("wishList");
  // console.log("storedReadBooksIds", storedReadBooksIds);
  // console.log("storedWishListIds", storedWishListIds);
  useEffect(() => {
    const storedReadBooksIds = getDataFromLocalStorage("readBooks");
    setReadList(filterListedBooks(storedReadBooksIds, books));
    // setReadList(readBooks);
  }, [books]);
  //console.log("readBooks", storedReadBooksId);
  useEffect(() => {
    const storedWishListIds = getDataFromLocalStorage("wishList");
    setWishList(filterListedBooks(storedWishListIds, books));
    // setWishList(wishList);
  }, [books]);
  // console.log("wishList", storedWishListId);
  // setReadList(useFilterListedBooks(storedReadBooksIds, books));
  // console.log(readList);
  // useEffect(() => {
  // }, [storedWishListIds, books]);
  // setWishList(useFilterListedBooks(storedWishListIds, books));
  // console.log(wishList);
  // const readListDefault = useFilterListedBooks(storedReadBooksIds, books);
  // const wishListDefault = useFilterListedBooks(storedWishListIds, books);

  //console.log("filteredReadList", readListDefault);
  //console.log("filteredWishList", wishListDefault);
  //Functionallity for Sort Books
  const handleSort = (
    readListedBooks,
    wishListedBooks,
    sortBy = "totalPages"
  ) => {
    const sortedReadList = readListedBooks
      .slice()
      .sort((a, b) => b[sortBy] - a[sortBy]);
    const sortedWishList = wishListedBooks
      .slice()
      .sort((a, b) => b[sortBy] - a[sortBy]);
    console.log(`sortBy${sortBy}ReadList`, sortedReadList);
    console.log(`sortBy${sortBy}WishList`, sortedWishList);
    setReadList(sortedReadList);
    setWishList(sortedWishList);
  };
  // //Functionallity for Sort by rating
  // const handleSortByRating = (defltReadListedBooks, defltWishListedBooks) => {
  //   const sortByRatingReadList = defltReadListedBooks
  //     .slice()
  //     .sort((a, b) => b.rating - a.rating);
  //   const sortByRatingWishList = defltWishListedBooks
  //     .slice()
  //     .sort((a, b) => b.rating - a.rating);
  //   console.log("sortByRatingReadList", sortByRatingReadList);
  //   console.log("sortByRatingWishList", sortByRatingWishList);
  // };
  // //Functionallity for Sort by Published Year
  // const handleSortByPublishedYear = (
  //   defltReadListedBooks,
  //   defltWishListedBooks
  // ) => {
  //   const sortByYearOfPublishingReadList = defltReadListedBooks
  //     .slice()
  //     .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  //   const sortByYearOfPublishingWishList = defltWishListedBooks
  //     .slice()
  //     .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  //   console.log(
  //     "sortByYearOfPublishingReadList",
  //     sortByYearOfPublishingReadList
  //   );
  //   console.log(
  //     "sortByYearOfPublishingWishList",
  //     sortByYearOfPublishingWishList
  //   );
  // };
  // //Functionallity for Sort by Total Pages
  // const handleSortByTotalPages = (
  //   defltReadListedBooks,
  //   defltWishListedBooks
  // ) => {
  //   const SortByReadingListTotalPages = defltReadListedBooks
  //     .slice()
  //     .sort((a, b) => b.totalPages - a.totalPages);
  //   const SortByWishListTotalPages = defltWishListedBooks
  //     .slice()
  //     .sort((a, b) => b.totalPages - a.totalPages);
  //   console.log("SortByReadingListTotalPages", SortByReadingListTotalPages);
  //   console.log("SortByWishListTotalPages", SortByWishListTotalPages);
  // };
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
              <a onClick={() => handleSort(readList, wishList, "rating")}>
                Rating
              </a>
            </li>
            <li>
              <a onClick={() => handleSort(readList, wishList, "totalPages")}>
                Number of pages
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  handleSort(readList, wishList, "yearOfPublishing")
                }
              >
                Publisher year
              </a>
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
            {readList?.length ? (
              readList?.map((book) => (
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
            {wishList?.length ? (
              wishList?.map((book) => (
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
