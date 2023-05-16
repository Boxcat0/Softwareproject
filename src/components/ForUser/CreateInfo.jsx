/*

import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

function CreateInfo() {
    const history = useNavigate();

    function pw_check() {
        if (document.getElementById('password').value.length < 5) {
            alert('비밀번호는 5자리 이상 입력해주세요');
            history('/CreateInfo');
            return false;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;
        const place = document.getElementById('place').value;
        const role = 'USER';

        const data = {
            name: name,
            id: id,
            password: password,
            place: place,
            role: role
        };
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');


        // JSON 데이터를 전송

            fetch("/CreateInfo",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{

                });
        }



    return (
        <div className="CreateInfo">
            <form className="CreateForm" method="post" action="/CreateInfo" onSubmit={pw_check} encType="application/json">
                <input type="text" id="name" name="name" placeholder="이름" />
                <input type="text" id="id" name="id" placeholder="아이디를 입력해주세요" />
                <input type="text" id="password" name="password" placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                <input type="text" id="place" name="place" placeholder="주소를 입력해주세요" />
                <input type="hidden" name="role" value="USER" />
                <input type="submit" value="Register" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default CreateInfo;*/
import React, { useState } from 'react';
import "../css/Formdesign.css"
import {json, useNavigate} from "react-router-dom";
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