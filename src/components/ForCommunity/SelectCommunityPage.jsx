import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Modal.css';
import '../css/youtube_button.css';

function MiddleSelect() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(false);
    navigate('/mainPage');
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setShowModal(false); // 모달 창을 닫음
    if (menu === '자유게시판') {
      navigate('/postMain');
    } else if (menu === '회원권 사고 팔기') {
      navigate('/sellMembership');
    } else if (menu === '구인구직') {
      navigate('/jobPost');
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal_review">
          <div className="modal-container-review">
            <div>
              <button className="modalBackbutton" onClick={handleModal}></button>
            </div>
            <div className="CommunityMenu">
              <button className="DefaultButton" onClick={() => handleMenuClick('자유게시판')}>
                자유게시판
              </button>
            </div>
            <div className="CommunityMenu">
              <button className="DefaultButton" onClick={() => handleMenuClick('회원권 사고 팔기')}>
                회원권 사고 팔기
              </button>
            </div>
            <div className="CommunityMenu">
              <button className="DefaultButton" onClick={() => handleMenuClick('구인구직')}>
                구인구직
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MiddleSelect;
