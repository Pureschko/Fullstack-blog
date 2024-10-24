import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PostDetails from "../components/PostDetails";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const [showPopup, setShowPopup] = useState(false); // Inna's code: To display the popup
  const [selectedPost, setSelectedPost] = useState(null); // Inna's code: To store the selected post

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching
        const response = await axios.get(
          `http://localhost:3000/api/v1/BlogPosts/${id}`
        );
        setBlog(response.data); // Set the fetched blog data
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        setError("Failed to fetch blog details."); // Set error message
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchBlogDetail();
  }, [id]);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // If no blog data is found
  if (!blog) return <p>No blog found.</p>;

  // Inna's code: Open the popup
  const openPopup = (post) => {
    setSelectedPost(post);
    setShowPopup(true); 
  };

  // Inna's code: Close the popup
  const closePopup = () => {
    setShowPopup(false); 
    setSelectedPost(null); 
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.image_url ? (
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-auto mb-4 rounded"
          onClick={() => openPopup(blog)} //Inna's code: Open the popup
        />
      ) : (
        <img
          src="default-image-url.jpg"
          alt="Default"
          className="w-full h-auto mb-4 rounded"
          onClick={() => openPopup(blog)} //Inna's code: Open the popup
        /> // Replace with your default image URL
      )}
      <p className="text-gray-600 mb-2">
        {new Date(blog.date).toLocaleDateString()}
      </p>
      <p className="text-lg">{blog.blogPost}</p>
      <p>{blog.id}</p>
      {/* Inna's code: popup rendering */}
      {showPopup && selectedPost && (
  <PostDetails post={selectedPost} onClose={closePopup} />
)}
    </div>
  );
};

export default BlogDetail;
