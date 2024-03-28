// import PropTypes from "prop-types";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books);
  const { bookId } = useParams();
  //   console.log(bookId);
  let theBook = [];
  if (books.length) {
    theBook = books.find((book) => book.bookId === parseInt(bookId));
  }
  //   console.log(theBook);
  //   useEffect(() => {
  //     const handleRead = (id) => {
  //       localStorage;
  //     };
  //   }, []);
  const getDataFromLocalStorage = (keyName) => {
    const data = JSON.parse(localStorage.getItem(keyName));
    if (data) {
      return data;
    }
    return [];
  };
  const setBookToLocalStorage = (listName, bookId) => {
    const listedBooks = getDataFromLocalStorage(listName);
    const readBookInLocalStorage = getDataFromLocalStorage("readBooks");
    if (listName === "wishList") {
      if (readBookInLocalStorage.includes(parseInt(bookId))) {
        toast.error(`Book is already been added to Read Books!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        return;
      }
    }
    if (listedBooks.includes(parseInt(bookId))) {
      toast.error(
        `Book is already been added to ${
          listName === "readBooks" ? "Read Books" : "Wishlist Books"
        }.`,
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        }
      );
      return;
    }
    listedBooks.push(parseInt(bookId));
    // console.log(listedBooks);
    const listedBooksStringify = JSON.stringify(listedBooks);
    // console.log(listedBooksStringify);
    localStorage.setItem(listName, listedBooksStringify);
    toast.success(
      `Book has been added to ${
        listName === "readBooks" ? "Read Books" : "Wishlist Books"
      }.`,
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      }
    );
  };
  // const [count, setCount] = useState(0);
  const handleRead = (id) => {
    setBookToLocalStorage("readBooks", id);
    // setCount(count + 1);
  };
  const handleWishlist = (id) => {
    setBookToLocalStorage("wishList", id);
    // setCount(count + 1);
  };
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
    fiction,
  } = theBook;
  return (
    <>
      <section>
        <ToastContainer />
        <div
          id="book-details"
          className="flex flex-col lg:flex-row gap-8 my-12 *:flex-1"
        >
          <div className="bg-base-200 py-[75px] rounded-2xl flex">
            <img
              src={image}
              alt={bookName}
              className="h-[350px] md:h-[450px] lg:h-[565px] mx-auto w-auto cursor-pointer object-cover"
            />
          </div>
          <div>
            {/* <h3 className="text-3xl">{count}</h3> */}
            <h3 className=" text-3xl md:text-4xl lg:text-[40px] leading-normal mb-4">
              {bookName}
            </h3>
            <p className="text-[#131313cc] font-medium text-xl">
              By : {author}
            </p>
            <div className="py-4 my-6 border-[#13131326] border-y">
              <p className="text-[#131313cc] text-xl font-medium">
                {fiction ? "Fiction" : "Non-Fiction"}
              </p>
            </div>
            <p>
              <span className="font-semibold">Review :</span> {review}
            </p>
            <div className="flex gap-2 my-5">
              <p className="mr-3 font-bold">Tags</p>
              {tags?.map((tag) => (
                <p
                  key={tag}
                  className="text-[#23BE0A] bg-[#23be0a0d] px-2 py-1 cursor-pointer font-medium rounded-full"
                >
                  {`#${tag}`}
                </p>
              ))}
            </div>
            <hr className="h-[1px] bg-gray-400" />
            <div className="my-6 space-y-3">
              <span className="flex items-center gap-2">
                <p>Number of Pages:</p>
                <p className="font-semibold">{totalPages}</p>
              </span>
              <span className="flex items-center gap-2">
                <p>Publisher:</p>
                <p className="font-semibold">{publisher}</p>
              </span>
              <span className="flex items-center gap-2">
                <p>Year of Publishing:</p>
                <p className="font-semibold">{yearOfPublishing}</p>
              </span>
              <span className="flex items-center gap-2">
                <p>Rating:</p>
                <p className="font-semibold">{rating}</p>
              </span>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => handleRead(bookId)}
                className="btn btn-outline"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(bookId)}
                className="btn bg-[#50B1C9] hover:bg-[#50B1C9] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
