import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/locationbutton.css";
import "./CreateInfo";
import axios from "axios";
import qs from "qs";

function LoginPage(key, value) {
    const [username, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true");

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(isLoggedIn);
    }, []);
    const onSubmit = (e) => {
       e.preventDefault();
       axios.post('/loginPage',qs.stringify({
           id : username,
           password : password
       }))
           .then((response) => {
               console.log("success");
               SendId();
               sessionStorage.setItem("isLoggedIn","true");
               sessionStorage.setItem("ID",username);
               document.location.href ="/";

           })
           .catch((error)=>{
               console.error(error);
           });
    };
    const SendId =() =>
    {
        let Id = sessionStorage.getItem("ID");
        axios
            .post('/Send_ID', JSON.stringify({Id}), {
                headers: { 'Content-Type': 'application/json' }
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="login">
            {isLoggedIn ? (
                <div>
                    <p>이미 로그인되어 있습니다.</p>
                    <button onClick={() => { sessionStorage.setItem("isLoggedIn", "false"); setIsLoggedIn(false);}}>로그아웃</button>
                </div>
            ) : (
                <form method ="post" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">
                            <input type="text" id="username" name="username" value={username} onChange={(e)=>setId(e.target.value)} placeholder="아이디를 입력하세요" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="비밀번호를 입력하세요" />
                        </label>
                    </div>
                    <button className="DefaultButton" type="submit">로그인</button>
                    <Link to="/ChooseCreate">
                        <button className="DefaultButton">회원가입</button>
                    </Link>
                </form>
            )}
        </div>
    );
}

export default LoginPage;
