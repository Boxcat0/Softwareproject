import React, { useState, useRef } from 'react';

const CommentPost = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');
  const textareaRef = useRef(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  const handleResizeTextarea = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // 먼저 높이를 자동으로 조정
    textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이에 맞게 설정
  };

  return (
    <div>
      <h3>댓글 작성</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="comment-container">
          <textarea
            placeholder="댓글을 입력하세요."
            value={comment}
            onChange={handleCommentChange}
            ref={textareaRef}
            className="comment-textarea"
            style={{ resize: 'none', overflow: 'hidden' }}
            onInput={handleResizeTextarea}
          ></textarea>
        </div>
        <button type="submit" className="comment-button">
          작성
        </button>
      </form>
    </div>
  );
};

export default CommentPost;
