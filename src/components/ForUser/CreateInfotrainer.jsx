import React,{useState} from "react";
import "../css/Formdesign.css"
import "../css/Loadingdesign.css"
import {useNavigate } from "react-router-dom";

function CreateInfo_t(){
    const [showInputs, setShowInputs] = useState(false);
    const [showInputs2, setShowInputs2] = useState(false);
    const history = useNavigate();
    function pw_check(){
        if(document.getElementById("password").value.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo_Gym");
            return false;
        }
    }
    const GymEnter =() =>{
        setShowInputs(true);
        setShowInputs2(false);
    }
    const NonEnter =() =>{
        setShowInputs(false);
        setShowInputs2(true);
    }
    return(
        <div>
            <div className="Loading_main2">
                <button className="T_button" onClick={GymEnter}>헬스장 소속</button>
                <button className="T_button" onClick={NonEnter}>개인 트레이너</button>
            </div>
            {showInputs &&(
                <div className="CreateForm2">
                    <form className ="CreateForm" method="post" action ="/CreateInfo" onSubmit={pw_check}>
                        <input type="text" id = "name" name = "name" placeholder="이름"/>
                        <input type="text" id = "id" name ="id" placeholder="아이디를 입력해주세요"/>
                        <input type="text" id = "password" name = "password" placeholder="5자리 이상의 비밀번호를 입력해주세요"/>
                        <input type="text" id = "Gym_name" name = "Gym_name" placeholder="상호명"/>
                        <input type="text" id = "place" name = "place" placeholder = "시설 주소를 입력해주세요"/>
                        <input type="hidden" name = "role" value = "GYM_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
            {showInputs2 &&(
                <div className="CreateForm2">
                    <form className ="CreateForm" method="post" action ="/CreateInfo" onSubmit={pw_check}>
                        <input type="text" id = "name" name = "name" placeholder="이름"/>
                        <input type="text" id = "id" name ="id" placeholder="아이디를 입력해주세요"/>
                        <input type="text" id = "password" name = "password" placeholder="5자리 이상의 비밀번호를 입력해주세요"/>
                        <input type="hidden" name = "role" value = "Personal_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreateInfo_t;