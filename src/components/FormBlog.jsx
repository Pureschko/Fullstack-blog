import { useState } from "react";
import axios from "axios";

const FormBlog = () => {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [blogPost, setBlogPost] = useState("");
const date = new Date().toISOString();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ date, title, image_url, blogPost });
    axios.post(`http://localhost:3000/api/v1/BlogPosts`, {date, title, image_url, blogPost})
    .then(response => {
        console.log('Post successful:', response.data);
    })
    .catch(error => {
        console.error('There was an error posting the blog:', error);
    });
  };

  const handleReset = () => {
    setTitle("");
    setImage_url("");
    setBlogPost("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-md mx-[10%] bg-slate-300"
    >
      <div className="mb-4 mx-[20%]">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4 mx-[20%]">
        <label className="block text-gray-700 font-bold mb-2">Date:</label>
        <span className="text-gray-700">
          {new Date().toLocaleDateString("en-US")}
        </span>
      </div>
      <div className="mb-4 mx-[20%]">
        <label
          htmlFor="image_url"
          className="block text-gray-700 font-bold mb-2"
        >
          Background Image URL:
        </label>
        <input
          type="text"
          id="image_url"
          required
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-4 mx-[10%]">
        <label htmlFor="blog" className="block text-gray-700 font-bold mb-2">
          Blog:
        </label>
        <textarea
          id="blog"
          required
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
          className="textarea textarea-bordered w-full min-h-28 sm:min-h-36 md:min-h-48 lg:min-h-56 xl:min-h-64"
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
        >
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormBlog;
