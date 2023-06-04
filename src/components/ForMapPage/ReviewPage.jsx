import React, {useEffect,useState} from "react";
import "../css/Modal.css";
import "../css/youtube_button.css"
import Review from "../ForUser/Review"
import axios from "axios";

const ReviewPage = () =>{
    let trigger = sessionStorage.getItem("isLoggedIn");
    const [ex,setEx] = useState(false);
    const handleExpand =() =>{
        setEx(!ex);
    }
    const handleModal =() =>{
        console.log("false");
        window.location.assign("/SeparatePage");
    }
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const [Data, setData] = useState([])
    useEffect(()=> {
        const url = "/ReviewPage";
        axios
            .get(url)
            .then((res)=>{
                setData(res.data);
            })
            .catch((Error) =>{
                console.log(Error);
            })
    })
    return(
        <div className="modal_reviews">
            <div className= "modal-container_reviews">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <form method="post" action ="/ReviewPage_word">
                    <input type="hidden" name="star" value="1"/>
                    <input type="hidden" name="gym" value ="none"/>
                    <input type="hidden" name="id" value="none"/>
                    <label>키워드 별 조회</label>
                    <input type="text" name="reviews"/>
                    <input type="submit" value="검색"/>
                </form>
                {trigger ? (
                    <div>
                        <div>
                            <button className="DefaultButton" onClick={handleComplete}>리뷰 작성하기</button>
                            {popup && <Review></Review>}
                        </div>
                        <div>
                            <br/>
                        </div>
                    </div>
                ) : (
                    <div>
                    </div>
                )}
                {Data.length > 0 ?
                    Data.map((rowData)=>(
                        <div>
                            <div className="ShowReview">
                               <div className="NameAndStar">
                                   {rowData.userId} | {'  '}
                                   {rowData.star.toFixed(1)}<br/>
                               </div>
                                <div>
                                    {rowData.reviews.length >= 20 ? (
                                        <div>
                                            {ex?(
                                                <div>
                                                    <span>{rowData.reviews}</span>
                                                    <button className="ReviewButton" onClick={() => handleExpand(rowData.reviews)}>
                                                        <div className ="buttonType">
                                                            접기
                                                        </div>
                                                    </button>
                                                </div>
                                            ):(
                                                <div>
                                                    <span>{rowData.reviews.slice(0, 20)}</span>
                                                    <button className="ReviewButton" onClick={() => handleExpand(rowData.reviews)}>
                                                        <div className ="buttonType">
                                                            더 보기
                                                        </div>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <span>{rowData.reviews}</span>
                                    )}
                                </div>
                                <div className="showDate">
                                    날짜:{rowData.date}
                                </div>
                            </div>
                            <br />
                        </div>
                    )): (
                        <div>
                            <h3> 저장된 리뷰가 없습니다. 리뷰를 작성해주세요!</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ReviewPage;