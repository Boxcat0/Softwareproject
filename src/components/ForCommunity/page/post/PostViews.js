import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostByNo } from '../../Data';
import CommentPost from './CommentPost';
import './Post.css';

const PostView = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setPost(getPostByNo(postId));
    setComments([]); // Reset comments when post changes
  }, [postId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {post ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{post.no}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{post.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{post.createDate}</label>
            </div>
            <div className="post-view-row">
              <label>조회수</label>
              <label>{post.readCount}</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <div>{post.content}</div>
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}

        <CommentPost onCommentSubmit={handleCommentSubmit} />

        <button className="post-view-go-list-btn" onClick={handleGoBack}>
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default PostView;