import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  console.log(blogs);
  return (
    <section id="blogs">
      {blogs?.length &&
        blogs?.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </section>
  );
};

export default Blogs;
