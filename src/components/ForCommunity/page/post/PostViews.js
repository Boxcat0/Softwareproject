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
    // Here you can implement the logic to add the comment to the post
    // For simplicity, I'm just updating the comments state with the new comment
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

        <div className="comments">
          <h3>댓글</h3>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                {comment}
              </div>
            ))
          ) : (
            <div>댓글이 없습니다.</div>
          )}
        </div>

        <button className="post-view-go-list-btn" onClick={handleGoBack}>
          목록으로 돌아가기
        </button>
      </div>
    </>
  );
};

export default PostView;