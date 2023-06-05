import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from './PostList';
import PostViews from './PostViews'; // 수정된 부분

const PostMain = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    navigate('/postMain');
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPost(postId);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <>
      {selectedPost ? (
        <PostViews postId={selectedPost} onBackClick={handleBackClick} /> // 수정된 부분
      ) : (
        <PostList onPostClick={handlePostClick} />
      )}
    </>
  );
};

export default PostMain;
