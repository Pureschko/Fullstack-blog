import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetails({ post, onClose }) {
  const [currentPost, setCurrentPost] = useState(post);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${post.id}`)
      .then(response => {
        setCurrentPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching the post:', error);
      });
  }, [post]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/posts/${post.id}`)
      .then(() => {
        onClose();
      })
      .catch(error => {
        console.error('Error deleting the post:', error);
      });
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h1>{currentPost.title}</h1>
        <img src={currentPost.bgImage} alt={currentPost.title} />
        <p>{currentPost.content}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PostDetails;
