import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getJobByNo } from '../../JobData';
import CommentPost from './CommentPost';
import './Post.css';

const JobPostViews = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobData = getJobByNo(jobId);
      if (jobData) {
        setJob(jobData);
        setComments(jobData.comments);
      } else {
        navigate('/JobPostMain');
      }
    };

    fetchData();
  }, [jobId, navigate]);

  const handleGoBack = () => {
    navigate('/JobPostMain');
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {job ? (
          <>
            <div className="post-view-row">
              <label>게시글 번호</label>
              <label>{job.no}</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>{job.title}</label>
            </div>
            <div className="post-view-row">
              <label>작성일</label>
              <label>{job.createDate}</label>
            </div>
            <div className="post-view-row">
              <label>조회수</label>
              <label>{job.readCount}</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <div>{job.content}</div>
            </div>
          </>
        ) : (
          '해당 게시글을 찾을 수 없습니다.'
        )}

        <CommentPost onCommentSubmit={handleCommentSubmit} />

        <div className="comments">
          <h3>댓글</h3>
          {comments && comments.length > 0 ? (
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

export default JobPostViews;