import React from "react";
import "./Comment.css"
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
  };

  return (
    <div className="container">
      <h2 className="title">Comments</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
        />
        <button type="submit" className="button">Post Comment</button>
      </form>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p className="empty">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-name">{comment.name}</div>
              <div className="comment-time">{comment.timestamp}</div>
              <p className="comment-text">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
<Link to="/comment">Comment</Link>