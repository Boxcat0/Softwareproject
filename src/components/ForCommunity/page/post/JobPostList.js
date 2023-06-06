import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { jobList, addJob } from '../../JobData';
import JobPostCreate from './JobPostCreate';
import './Post.css'

const JobPostList = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    setDataList(jobList);
  }, []);

  const handleJobClick = (no) => {
    navigate(`/jobPostView/${no}`);
  };

  const handleJobCreate = (title, content) => {
    addJob(title, content);
    setIsModalOpen(false);
    setDataList([...jobList]);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <button onClick={handleModalOpen}>구인구직 글 작성</button>
      </div>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {dataList.map((item, index) => (
          <CommonTableRow key={index}>
            <CommonTableColumn>{item.no}</CommonTableColumn>
            <CommonTableColumn>
              <Link to={`/jobPostView/${item.no}`} onClick={() => handleJobClick(item.no)}>
                {item.title}
              </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.createDate}</CommonTableColumn>
            <CommonTableColumn>{item.readCount}</CommonTableColumn>
          </CommonTableRow>
        ))}
      </CommonTable>
      {isModalOpen && <JobPostCreate onJobCreate={handleJobCreate} onClose={handleModalClose} />}
    </>
  );
};

export default JobPostList;

