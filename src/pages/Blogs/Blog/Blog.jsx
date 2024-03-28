import PropTypes from "prop-types";
import {
  IoPersonCircleOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";

const Blog = ({ blog }) => {
  const { id, title, content, publish_date, author } = blog;
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-2xl lg:text-3xl">{title}</h3>
      <div className="flex flex-col gap-3 md:gap-6 md:flex-row">
        <p className="flex items-center gap-1">
          <IoPersonCircleOutline /> Author: {author}
        </p>
        <p className="flex items-center gap-1">
          <IoCalendarNumberOutline /> Publish Date: {publish_date}
        </p>
      </div>
      <hr className="h-[2px] bg-slate-900" />
      <ul className="ml-6 space-y-3 list-disc">
        {content?.map((item, idx) => (
          <li key={idx}>
            <p>
              <span className="text-lg font-semibold">{item.point}: </span>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
