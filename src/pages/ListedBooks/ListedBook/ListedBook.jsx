import PropTypes from "prop-types";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaOldRepublic, FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="p-6 rounded-2xl border border-[#13131326] my-6 flex flex-col lg:flex-row gap-6">
      <div className="lg:basis-1/4 bg-base-200 rounded-2xl py-7">
        <img
          src={image}
          alt={bookName}
          className="h-[170px] object-cover w-auto mx-auto"
        />
      </div>
      <div className="space-y-4 lg:flex-auto">
        <h1 className="text-2xl">{book?.bookName}</h1>
        <p className="font-medium">By : {author}</p>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-wrap gap-2">
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
          <p className="flex items-center gap-2">
            <IoCalendarNumberOutline />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <p className="flex items-center gap-2">
            <FaOldRepublic />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <FaRegFileAlt />
            Page: {totalPages}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 *:p-2 *:px-4 *:rounded-full border-t border-dashed border-[#13131326] pt-4 mt-4">
          <p className="bg-[#328eff26] text-[#328EFF]">Category: {category}</p>
          <p className="bg-[#ffac3326] text-[#FFAC33]">Rating: {rating}</p>
          <Link to={`/books/${bookId}`} className="bg-[#23BE0A]">
            <p className="font-semibold text-white">View Details</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
ListedBook.propTypes = {
  book: PropTypes.object.isRequired,
};
