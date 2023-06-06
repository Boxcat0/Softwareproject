import React, { useState } from 'react';

const PostCreate = ({ onPostCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onPostCreate(title, content);
    onClose();
    setTitle('');
    setContent('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>게시글 작성</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <label htmlFor="title">제목</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="content">내용</label>
            <textarea id="content" value={content} onChange={handleContentChange}></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">작성</button>
            <button type="button" onClick={onClose}>
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
