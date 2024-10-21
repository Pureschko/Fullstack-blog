import React, { useEffect, useState } from 'react';

function PostDetails({ post, onClose }) {
  const [currentPost, setCurrentPost] = useState(post);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${post.id}`)
      .then(response => response.json())
      .then(data => setCurrentPost(data));
  }, [post]);

  const handleDelete = () => {
    fetch(`http://localhost:8080/posts/${post.id}`, {
      method: 'Delete',
    }).then(() => {
      onClose();
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
