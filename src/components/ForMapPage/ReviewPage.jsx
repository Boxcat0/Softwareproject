import React, {useState} from "react";
import "../css/Modal.css";
import "../css/youtube_button.css"
import Review from "../ForUser/Review"

const ReviewPage = (props) =>{
    const handleModal =() =>{
        console.log("false");
        window.location.assign("/SeparatePage");
    }
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    return(
        <div className="modal">
            <div className= "modal-container">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <h1>확인용</h1>
                <div>
                    <button className="bannerButton" onClick={handleComplete}>리뷰 작성하기</button>
                    {popup&& <Review></Review>}
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;