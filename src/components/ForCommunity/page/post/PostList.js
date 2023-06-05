// PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList, addPost } from '../../Data';
import PostCreate from './PostCreate';

const PostList = () => {
  const [dataList, setDataList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
      <div>
        <button onClick={handleModalOpen}>게시글 작성</button>
      </div>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {dataList.map((item, index) => (
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
      {isModalOpen && <PostCreate onPostCreate={handlePostCreate} onClose={handleModalClose} />}
    </>
  );
};

export default PostList;
