import { useContext } from "react";
import { BlogContext } from "../store/BlogContext";
import Blog from "./Blog";
import WelcomeMessage from "./WelcomeMessage";

const BlogList = () => {
  const {blogs} = useContext(BlogContext);
  return (
    <div>
      { blogs.length === 0 && <WelcomeMessage />}
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default BlogList