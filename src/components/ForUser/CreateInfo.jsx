import React, { useState } from 'react';
import "../css/Formdesign.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import qs from 'qs';
//import Post from "../ForMapPage/PostFind";

function CreateInfo() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    //const [address, setAddress] = useState('');
    const [address, setAddress] = useState('');

    //const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setAddress(e.target.value)
        //setAddress(e.target.value);
    }

    //const handleComplete = (data) => {
        //setPopup(!popup);
    //}

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/CreateInfo', qs.stringify({
            name: name,
            id: id,
            password: password,
            address: address,
            role: 'USER',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/loginPage";
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const history = useNavigate();

    function pw_check(e) {
        if (password.length < 5) {
            e.preventDefault();
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo");
        } else {
            handleSubmit(e);
        }
    }

    return (
        <div className="CreateInfo">
            <form className="CreateForm" method="post" onSubmit={pw_check}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                <input type="text" name="place" placeholder="주소 검색 버튼을 눌러주세요"  value={address} onChange={handleInput} />
                <input type="hidden" name="role" value="USER" />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
}

export default CreateInfo;