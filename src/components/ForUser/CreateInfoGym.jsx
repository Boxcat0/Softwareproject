import React, {useState} from "react";
import "../css/Formdesign.css"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

function CreateInfoGym(){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [place, setPlace] = useState('');
    const [Gym_name, setGym_name] = useState('');
    const handleSubmitGym = (e) => {
        e.preventDefault();
        axios.post('/CreateInfoGym', qs.stringify({
            name: name,
            id: id,
            password: password,
            Gym_name : Gym_name,
            place: place,
            role: 'USER',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/";
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const history = useNavigate();
    function pw_check(e)
    {
        if(document.getElementById("password").value.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo_Gym");
            return false;
        }else {
            handleSubmitGym(e);
        }
    }
    return(
        <div className="CreateInfo">
            <form className ="CreateForm_g" method="post" action ="/CreateInfo_G" onSubmit={pw_check}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                <input type="text" id = "Gym_name" name = "Gym_name" value={Gym_name} onChange={(e) => setGym_name(e.target.value)} placeholder="상호명"/>
                <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="주소를 입력해주세요" />
                <input type="hidden" name = "role" value = "GYM"/>
                <input type = "submit" value = "Register"/>
            </form>
        </div>
    );
}


export default CreateInfoGym;