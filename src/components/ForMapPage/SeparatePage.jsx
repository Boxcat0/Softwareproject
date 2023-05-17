import React,{useEffect,useState} from 'react';
import axios from 'axios';
import "../css/map.css"
import "../css/youtube_button.css"
import {Link} from "react-router-dom";
import Review from "./ReviewPage";


function useSeparatePage(){
    const [gymData, setgymData] = useState(null);
    useEffect(()=>{
        axios.get('/SeparatePage').then(res=>setgymData(res.data))
    },[]);
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const handleSession =() =>{
        sessionStorage.removeItem("targetName");
    }
    return(
       <div className ="modal">
           <div className="modal-container">
               <div>
                   <Link to="/Map">
                       <button className="bannerButton" onClick={handleSession}>뒤로가기</button>
                   </Link>
                   <h1><span>{sessionStorage.getItem("targetName")}</span></h1>
               </div>
               <div>
                   <Link to="/Rev">
                       <button className= "bannerButton">예약하기</button>
                   </Link>
                   <button className= "bannerButton">문의하기</button>
               </div>
               <div>
                   <textarea className="textArea" rows="10" cols="50" value={gymData || '현재 등록된 설명이 없습니다.'} readOnly />
               </div>
               <div>
                   <button className="bannerButton" onClick={handleComplete}>리뷰 확인하기</button>
                   {popup&&<Review></Review>}
               </div>
           </div>
       </div>
    );
}

export default useSeparatePage;