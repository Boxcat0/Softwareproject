import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Any} from "react-spring";

function MyInfo() {
    const [userData, setUserData] = useState();
    useEffect(()=>{
        const url ="/MyInfo";
        axios
            .get(url)
            .then((res)=>{
                setUserData(res.data.result);
                console.log(userData);
            })
            .catch((Error) =>{
                console.log(Error);
            })
    })
    return (
        <div className="1st">
            {userData ?
                (
                <div>
                    <div>
                        <label>이름: </label>
                        <span>{userData[0].name}</span>
                    </div>
                    <div>
                        <label>ID: </label>
                        <span>{userData[0].id}</span>
                    </div>
                    <div>
                        <label>PW: </label>
                        <button>수정하기</button>
                    </div>
                    <div>
                        <label>주소: </label>
                        <span>{userData[0].address}</span>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>저장된 데이터가 없는 오류가 발생했습니다.</h1>
                </div>
            )
            }
        </div>
    );
}

export default MyInfo;
