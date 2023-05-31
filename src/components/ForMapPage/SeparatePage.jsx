import React,{useEffect,useState} from 'react';
import axios from 'axios';
import "../css/map.css"
import "../css/youtube_button.css"
import {Link} from "react-router-dom";
import Review from "./ReviewPage";
import Mini from "./MiniMap";
import Rev from "../ForUser/Reservation"
import qs from "qs";


function useSeparatePage(){

    const [gymData, setgymData] = useState(null);
    const [gymname,setGymName] = useState("");
    useEffect(()=>{
        axios.get('/SeparatePage').then(res=>setgymData(res.data))
    },[]);
    const [popup, setPopup] = useState(false);
    const [popup2, setPopup2] = useState(false);
    const [popup3, setPopup3] = useState(false);
    const com =()=>{
        setGymName(sessionStorage.getItem("targetName"));
        axios.post('/map_click', qs.stringify({
            GymName : gymname
        }))
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const handleComplete = () => {
        com();
        setPopup(!popup);
    }
    const handleComplete2 = (data) => {
        setPopup2(!popup2);
    }
    const handleComplete3 = (data) => {
        setPopup3(!popup3);
    }
    const handleSession =() =>{
        sessionStorage.removeItem("targetName");
    }
    return(
       <div className ="modal">
           <div className="modal-container">
               <div>
                   <Link to="/Map">
                       <button className="DefaultButton" onClick={handleSession}>뒤로가기</button>
                   </Link>
                   <div>
                       <button className="DefaultButton" onClick={handleComplete2}>지도 확인</button>
                       {popup2&&<Mini></Mini>}
                       
                   </div>
                   <h1><span>{sessionStorage.getItem("targetName")}</span></h1>
               </div>
               <div>
                   <button className= "DefaultButton" onClick={handleComplete3}>예약하기</button>
                   {popup3&&<Rev></Rev>}
                   <button className= "DefaultButton">문의하기</button>
               </div>
               <div>
                   <textarea className="textArea" rows="10" cols="50" value={gymData.value || '현재 등록된 설명이 없습니다.'} readOnly />
               </div>
               <div>
                   <button className="DefaultButton" onClick={handleComplete}>리뷰 확인하기</button>
                   {popup&& <Review></Review>}
               </div>
           </div>
       </div>
    );
}

export default useSeparatePage;