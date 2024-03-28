const useFilterListedBooks = (arrOfListedIds, books) => {
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
export default useFilterListedBooks;
