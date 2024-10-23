import { useState, useEffect } from "react";
import axios from "axios";
import { FaBlog } from "react-icons/fa"; // Replace with your desired icon
import { Link } from "react-router-dom";

function NewBlogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/BlogPosts"
      );
      setBlogs(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogs(); // Fetch blogs when the component mounts
  }, []);

  return (
    <div>
      <p className="text-xl font-semibold mb-2 pl-6">Blogs</p>
      {blogs.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 pl-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              title={blog.title}
              date={new Date(blog.date).toLocaleDateString()} // Format date
              image={blog.image_url}
              blogPost={blog.blogPost}
              Icon={FaBlog}
              id={blog.id} // Pass the blog ID
            />
          ))}
        </div>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
}

export default NewBlogs;

const Card = ({ title, date, image, blogPost, Icon, id }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500" />
        <Icon className="absolute z-10 -bottom-6 -right-6 text-9xl text-slate-200 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 relative rounded-lg shadow-lg z-11" // Adjust the height as needed
        />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {date}
        </p>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          id-{id}
        </p>
        <p className="text-sm mb-8">{blogPost}</p>
      </div>
    </Link>
  );
};
