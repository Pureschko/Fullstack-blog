import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PostDetails({ post, onClose, onUpdate }) {
  const [currentPost, setCurrentPost] = useState(post);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(post ? post.blogpost : ""); 
  const { id } = useParams();
  const navigate = useNavigate();
  // Loading post
  useEffect(() => {
    if (post) {
      setCurrentPost(post);
      setContent(post.blogpost); 
    } else {
      axios
        .get(`http://localhost:3000/api/v1/BlogPosts/${id}`)
        .then((response) => {
          setCurrentPost(response.data);
          setContent(response.data.blogPost); 
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [id, post]);
// Function for deleting
const handleDelete = () => {
  axios
    .delete(`http://localhost:3000/api/v1/BlogPosts/${id}`)
    .then(() => {
      onClose(); 
      navigate("/Blogs"); 
    })
    .catch((error) => {
      console.error("Error deleting the post:", error);
    });
};
// Function for editing
  const handleEdit = () => {
    if (isEditing) {
      const date = new Date().toISOString();
      axios
        .put(`http://localhost:3000/api/v1/BlogPosts/${id}`, {
          date: date, 
          title: currentPost.title, 
          image_url: currentPost.image_url, 
          blogPost: content,
        })
        .then((response) => {
          setCurrentPost(response.data); 
          setIsEditing(false);
          onUpdate(response.data); // Update data
        })
        .catch((error) => {
          console.error("Error updating the post:", error);
        });
    } else {
      setIsEditing(true);
    }
  };
// Cancel editing
  const handleCancel = () => {
    setIsEditing(false);
    setContent(currentPost.blogPost);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="card bg-base-100 w-96 shadow-xl relative p-6"
        onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-bold">{currentPost?.title}</h2>
        <p className="text-gray-500 text-sm pt-2">
          {new Date(currentPost?.date).toLocaleDateString()}
        </p>

        <div className="pt-4">
          <img
            src={currentPost?.image_url}
            alt={currentPost?.title}
            className="w-full h-48 object-cover rounded-lg border-2 border-gray-300"
          />
        </div>

        <div className="mb-6 mt-6">
          {isEditing ? (
            <textarea
              className="textarea textarea-bordered w-full h-40 overflow-y-auto"
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              rows={10}
            />
          ) : (
            <div className="text-gray-700 max-h-40 overflow-y-auto">
              <div dangerouslySetInnerHTML={{ __html: content || "No content available" }} />
            </div>
          )}
        </div>

        {isEditing ? (
          <div className="flex justify-between mt-4">
            <button
              className="btn w-24 btn-error text-white hover:bg-red-600"
              onClick={handleDelete}>
              Delete
            </button>
            <div className="flex space-x-2">
              <button
                className="btn w-16 bg-white text-gray-500 hover:bg-transparent hover:text-gray-700 shadow-none border-0"
                onClick={handleCancel}>
                Cancel
              </button>

              <button
                className="btn w-24 btn-success text-white hover:bg-green-600"
                onClick={handleEdit}>
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mt-4">
            <button
              className="btn w-24 btn-error text-white hover:bg-red-600"
              onClick={handleDelete}>
              Delete
            </button>

            <button
              className="btn w-24 bg-blue-700 text-white hover:bg-blue-900"
              onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
