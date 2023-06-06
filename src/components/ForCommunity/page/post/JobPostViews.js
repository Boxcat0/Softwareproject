import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import './CommentPost.css';

const CommentPost = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Your useEffect logic here
  }, [postId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      const newComment = {
        id: comments.length + 1,
        postId,
        content: comment,
        likes: 0,
        isLiked: false,
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const handleLike = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        if (comment.isLiked) {
          return {
            ...comment,
            likes: comment.likes - 1,
            isLiked: false,
          };
        } else {
          return {
            ...comment,
            likes: comment.likes + 1,
            isLiked: true,
          };
        }
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="comment-post-container">
      <h4 className="comment-post-title">댓글 작성</h4>
      <div className="comment-post-input-container">
        <Input
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요."
        />
        <Button type="primary" onClick={handleAddComment} className="comment-post-submit-button">
          <span className="comment-post-submit-text">작성</span>
        </Button>
      </div>
      <div className="comment-post-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-post-item">
            <div className="comment-post-content">
              <span>{comment.content}</span>
            </div>
            <div className="comment-post-likes">
              <Button
                type={comment.isLiked ? 'primary' : 'default'}
                className={`comment-post-like-button ${comment.isLiked ? 'liked' : ''}`}
                onClick={() => handleLike(comment.id)}
              >
                {comment.isLiked ? '♥' : '♡'}
              </Button>
              <span className="comment-post-likes-count">{comment.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentPost;
