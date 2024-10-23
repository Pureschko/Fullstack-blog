import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetails({ post, onClose }) {
  const [currentPost, setCurrentPost] = useState(post);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(post.blogPost);

  // Get post data
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/BlogPosts/${postId}`)
      .then(response => {
        setCurrentPost(response.data);
        setContent(response.data.blogPost);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  // Delete the post
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/v1/BlogPosts/${post.id}`)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error deleting the post:', error);
      });
  };

  // Edit the post
  const handleEdit = () => {
    if (isEditing) {
      axios.put(`http://localhost:3000/api/v1/BlogPosts/${post.id}`, {
        ...currentPost,
        blogPost: content,
      })
        .then(response => {
          setCurrentPost(response.data);
          setIsEditing(false); 
        })
        .catch(error => {
          console.error('Error updating the post:', error);
        });
    } else {
      setIsEditing(true);
    }
  };

  // Don't edit the post
  const handleCancel = () => {
    setIsEditing(false);
    setContent(currentPost.blogPost); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl relative p-6">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <h2 className="card-title pt-2 text-left">{currentPost.title}</h2>
        <p className="text-gray-500 text-sm pt-2 text-left">{currentPost.date}</p>
  
        <div className="pt-4">
          <img
            src={currentPost.image_url}
            alt={currentPost.title}
            className="w-full h-48 object-cover rounded-xl border-2 border-gray-300"
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
            <p className="text-gray-700 max-h-40 overflow-y-auto">{content}</p>
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
                className="btn w-24 bg-gray-500 text-white hover:bg-gray-700" 
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