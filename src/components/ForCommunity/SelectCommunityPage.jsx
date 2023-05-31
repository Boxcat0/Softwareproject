import React from "react";
import "../css/Modal.css";
import "../css/youtube_button.css"


function MiddleSelect(){
    const handleModal = () => {
        console.log('false');
        window.location.assign("/mainPage");
    };
    return(
        <div className="modal_review">
            <div className="modal-container-review">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <div className="CommunityMenu">
                    <button className="DefaultButton">자유게시판</button>
                </div>
                <div className="CommunityMenu">
                    <button className="DefaultButton">회원권 사고 팔기</button>
                </div>
                <div className="CommunityMenu">
                    <button className="DefaultButton">구인구직</button>
                </div>
            </div>
        </div>
    );
}

export default MiddleSelect;