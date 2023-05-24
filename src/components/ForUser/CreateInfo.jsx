import React, { useState } from 'react';
import "../css/Formdesign.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import qs from 'qs';
import Post from "../ForMapPage/PostFind";

function CreateInfo() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [place, setPlace] = useState('');
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        setPlace(e.target.value);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }

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
                <input type="text" name="place" placeholder="주소 검색 버튼을 눌러주세요"  required={true} onChange={handleInput} value={enroll_company.address} />
                <div>
                    <button className = "FormButton" onClick={handleComplete}>주소찾기</button>
                    {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                </div>
                <input type="hidden" name="role" value="USER" />
                <input type="submit" value="Register" />
            </form>

        </div>
    );
}

export default CreateInfo;