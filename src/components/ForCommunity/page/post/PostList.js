import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList, addPost } from '../../Data';
import PostCreate from './PostCreate';
import './Post.css';

const PostList = () => {
  const [dataList, setDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setDataList(postList);
  }, []);

  const handlePostClick = (no) => {
    const updatedList = dataList.map((item) => {
      if (item.no === no) {
        return {
          ...item,
          readCount: item.readCount + 1
        };
      }
      return item;
    });
    setDataList(updatedList);
  };

  const handlePostCreate = (title, content) => {
    addPost(title, content);
    setIsModalOpen(false);
    setDataList([...postList]);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    if (!isModalOpen) {
      handleModalOpen();
    }
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const lastPage = Math.ceil(dataList.length / itemsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, lastPage));
  };

  const renderPageNumbers = () => {
    const pageNumbers = Math.ceil(dataList.length / itemsPerPage);

    return (
      <div className="pagination">
        <button
          className={`page-number-button ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          이전
        </button>
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-number-button ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className={`page-number-button ${currentPage === pageNumbers ? 'disabled' : ''}`}
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers}
        >
          다음
        </button>
      </div>
    );
  };

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {currentItems.map((item, index) => (
          <CommonTableRow key={index}>
            <CommonTableColumn>{item.no}</CommonTableColumn>
            <CommonTableColumn>
              <Link to={`/postView/${item.no}`} onClick={() => handlePostClick(item.no)}>
                {item.title}
              </Link>
            </CommonTableColumn>
            <CommonTableColumn>{item.createDate}</CommonTableColumn>
            <CommonTableColumn>{item.readCount}</CommonTableColumn>
          </CommonTableRow>
        ))}
      </CommonTable>
      <div>
        {renderPageNumbers()}
      </div>
      <div>
        <button className="create-button" onClick={handleButtonClick}>게시글 작성</button>
      </div>
      {isModalOpen && <PostCreate onPostCreate={handlePostCreate} onClose={handleModalClose} />}
    </>
  );
};

export default PostList;
