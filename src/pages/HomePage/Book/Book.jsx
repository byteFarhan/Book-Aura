import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, fiction } = book;
  return (
    <>
      <div>
        <Link to={`books/${bookId}`}>
          <div className="card rounded-2xl p-6 border border-[#13131326]">
            <figure className="bg-base-200 py-6 rounded-2xl">
              <img
                src={image}
                alt={bookName}
                className="h-[166px] w-auto object-cover"
              />
            </figure>
            <div className="mt-6 flex flex-col">
              <div className="flex gap-2 my-5">
                {tags?.map((tag) => (
                  <p
                    key={tag}
                    className="text-[#23BE0A] bg-[#23be0a0d] px-2 py-1 cursor-pointer font-medium rounded-full"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex-grow mb-4">
                <h2 className="text-2xl font-bold">{bookName}</h2>
              </div>
              <p>By: {author}</p>
              <div className="flex justify-between mt-10">
                <span>{fiction ? "Fiction" : "Non-Fiction"}</span>
                <span className="flex items-center gap-1">
                  <p>{rating}</p>
                  <FaRegStar />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
