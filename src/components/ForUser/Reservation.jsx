import React, {useState} from 'react';
import "../css/youtube_button.css"
import "../css/Formdesign.css"
import axios from "axios";
import qs from 'qs';
import Post from "../ForMapPage/PostFind2";

function Reservation(){
    const [name, setName] = useState("");
    const [say, setSay] = useState("");
    const [selectedFee, setSelectedFee] = useState("");
    const [address, setAddress] = useState('');
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });
    const [popup, setPopup] = useState(false);

    const handleInput = (e) =>
    {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        setAddress(enroll_company.address);
    }
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const handleModal = () => {
        console.log('false');
        window.location.assign('/SeparatePage');
    };
    const handleFeeChange = (event) => {
        setSelectedFee(event.target.value);
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
            address: address,
            fee : selectedFee,
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
                    <input type="text" name="address" placeholder="주소 검색 버튼을 눌러주세요" required={true}  value={enroll_company.address} onChange={handleInput} />
                    <div>
                        <button className = "FormButton" onClick={handleComplete}>주소찾기</button>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    <label className ="RevLabel">
                        <input type="radio" name = "fee" value = "1M" checked={selectedFee === "1M"} onChange={handleFeeChange} /> 1개월
                        <input type="radio" name = "fee" value = "3M" checked={selectedFee === "3M"} onChange={handleFeeChange} /> 3개월
                        <input type="radio" name = "fee" value = "6M" checked={selectedFee === "6M"} onChange={handleFeeChange} /> 6개월
                    </label>
                    <label className ="RevLabel">
                        <input type= "text" name ="say"  value ={say} placeholder= "요청사항(필수X)"  onChange = {(e)=>setSay(e.target.value)}/>
                    </label>
                    <button type="submit"className="DefaultButton">예약하기</button>
                </form>
            </div>
        </div>
    );
}

export default Reservation;