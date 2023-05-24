import React, {useState} from "react";
import "../css/Formdesign.css"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import Post from "../ForMapPage/PostFind";

function CreateInfoGym(){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress]  = useState('');
    const [Gym_name, setGym_name] = useState('');
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        setAddress(enroll_company.address);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const handleSubmitGym = (e) => {
        e.preventDefault();
        axios.post('/CreateInfo_G', qs.stringify({
            name: name,
            id: id,
            password: password,
            Gym_name : Gym_name,
            address: address,
            role: 'GYM',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/LoginPage";
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const history = useNavigate();
    function pw_check(e)
    {
        if(password.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo_G");
            return false;
        }else {
            handleSubmitGym(e);
        }
    }
    return(
        <div className="CreateInfo">
            <form className ="CreateForm_g" method="post" onSubmit={pw_check}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                <input type="text" name = "Gym_name" value={Gym_name} onChange={(e) => setGym_name(e.target.value)} placeholder="상호명"/>
                <input type="text" name="address" placeholder="주소 검색 버튼을 눌러주세요"  required={true} onChange={handleInput} value={enroll_company.address} />
                <div>
                    <button className = "FormButton" onClick={handleComplete}>주소찾기</button>
                    {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                </div>
                <input type="hidden" name = "role" value = "GYM"/>
                <input type = "submit" value = "Register"/>
            </form>
        </div>
    );
}


export default CreateInfoGym;