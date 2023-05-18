import React, { useState } from 'react';
import "../css/Formdesign.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import qs from 'qs';

function CreateInfo() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [place, setPlace] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/CreateInfo', qs.stringify({
            name: name,
            id: id,
            password: password,
            place: place,
            role: 'USER',
        }))

            .then((response) => {
                console.log(response.data);
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
                <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="주소를 입력해주세요" />
                <input type="hidden" name="role" value="USER" />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default CreateInfo;