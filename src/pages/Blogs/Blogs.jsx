import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

//   console.log(blogs);
  return (
    <section id="blogs" className="mb-10">
      {blogs?.length &&
        blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </section>
  );
};

export default Blogs;
