import React, {useState} from 'react';
import "../css/youtube_button.css"
import "../css/Formdesign.css"
import axios from "axios";
import qs from 'qs';
import Post from "../ForMapPage/PostFind2";

function Reservation(){
    const [name, setName] = useState("");
    const [say, setSay] = useState("");
    const [id, setId] = useState("");
    const [number, setNumber] = useState("");
    const [gym_name, setGymname] = useState("");
    const handleModal = () => {
        console.log('false');
        window.location.assign('/SeparatePage');
    };
    const checkRev =(e) => {
        if (say === "")
        {
            setSay("없음");
        }
        handleSubmit(e);
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('/Reservation', qs.stringify({
            name : name,
            id : id,
            gym_name : gym_name,
            fee : number,
            say : say
        }))
            .then((response)=>{
                console.log(response.data);
                console.log("success");
                document.location.href ="/SeparatePage";
            })
            .catch((error) =>{
                console.error(error);
            });
    };
    return(
        <div className = "modal">
            <div className= "modal-container">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <h2><span>{sessionStorage.getItem("targetName")}</span></h2>
                <h2>예약페이지 입니다.</h2>
                <form method="post" onSubmit={checkRev}>
                    <input type="text" name = "name" value ={name} placeholder="예약자 성함을 입력해주세요" onChange={(e) => setName(e.target.value)}/>
                    <input type="hidden" name ="id" value ={id} onChange={(e) => setId(sessionStorage.getItem("ID"))}/>
                    <input type="hidden" name ="gym_name" value={gym_name} onChange={(e) => setGymname(sessionStorage.getItem("targetName"))}/>
                    <label className ="RevLabel">
                        <input type="number" min="0" name = "number" value ={number} placeholder="등록기간"  onChange = {(e)=>setNumber(e.target.value)} />
                    </label>
                    <label className ="RevLabel">
                        <input type= "text" name ="say"  value ={say} placeholder="요청사항(필수X)"  onChange = {(e)=>setSay(e.target.value)}/>
                    </label>
                    <button type="submit"className="DefaultButton">예약하기</button>
                </form>
            </div>
        </div>
    );
}

export default Reservation;