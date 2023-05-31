import React, {useEffect,useState} from "react";
import "../css/Modal.css";
import "../css/youtube_button.css"
import Review from "../ForUser/Review"
import axios from "axios";

const ReviewPage = () =>{
    let trigger = sessionStorage.getItem("isLoggedIn");
    const handleModal =() =>{
        console.log("false");
        window.location.assign("/SeparatePage");
    }
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const [lastIdx, setLastIdx] = useState(0);
    const [Data, setData] = useState([{
        id :'',
        rate : '',
        review : ''
    }])
    useEffect(async()=>{
        try{
            const res = await axios.get('/ReviewPage')
            const inputData = await res.data.map((rowData) => (
                setLastIdx(lastIdx +1),
                    {
                        id : rowData.id,
                        rate : rowData.rate,
                        review : rowData.review
                    })
            )
            setData(Data.concat(inputData))
        } catch(e){
            console.error(e.message);
        }
    },[])
    return(
        <div className="modal">
            <div className= "modal-container">
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
                {lastIdx !==0 ?
                    Data.map(rowData =>(
                        rowData.id !== ''&&
                            <tr>
                                <td>{rowData.id}</td>
                                <td>{rowData.rate}</td>
                                <td>{rowData.review}</td>
                            </tr>
                    )):
                    <tr>
                        <h3> 저장된 리뷰가 없습니다. 리뷰를 작성해주세요!</h3>
                    </tr>

                }
                {trigger?(
                    <div>
                        <button className="DefaultButton" onClick={handleComplete}>리뷰 작성하기</button>
                        {popup&& <Review></Review>}
                    </div>
                ):(
                    <div>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default ReviewPage;