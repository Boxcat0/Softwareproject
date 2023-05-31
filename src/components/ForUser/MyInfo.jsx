import React, {useEffect, useState} from 'react';
import axios from 'axios';

function MyInfo() {
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        const getData = async()=>{
            const url ="/MyInfo";
            axios
                .get(url)
                .then((res)=>{
                    setUserData(res.data);
                    console.log("성공");
                })
                .catch((Error) =>{
                    console.log(Error);
                })
        }
    })
    return (
        <div className="1st">
            {userData ?
                userData.map((user)=>(
                <div>
                    <div>
                        <label>이름: </label>
                        <span>{user[0].name}</span>
                    </div>
                    <div>
                        <label>ID: </label>
                        <span>{user[0].id}</span>
                    </div>
                    <div>
                        <label>PW: </label>
                        <button>수정하기</button>
                    </div>
                    <div>
                        <label>주소: </label>
                        <span>{user[0].address}</span>
                    </div>
                </div>
            )) : (
                <div>
                    <h1>저장된 데이터가 없는 오류가 발생했습니다.</h1>
                </div>
            )
            }
        </div>
    );
}

export default MyInfo;
