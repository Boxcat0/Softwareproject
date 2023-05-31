import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../css/user.css"

function MyInfo() {
    const [userData, setUserData] = useState();
    const [userDataName, setUserDataName] = useState();
    const [userDataId, setUserDataId] = useState();
    const [userDataAd, setUserDataAd] = useState();
    useEffect(()=>{
        const url ="/MyInfo";
        axios
            .get(url)
            .then((res)=>{
                setUserData(res.data);
                setUserDataName(res.data.name);
                setUserDataId(res.data.id);
                setUserDataAd(res.data.address);
                console.log("성공");
            })
            .catch((Error) =>{
                console.log(Error);
            })
    })
    return (
        <div className="1st">
            {userData ?
                (
                <div className ="userInfo">
                    <div>
                        <label className = "userLabel">이름: </label>
                        <span>{userDataName}</span>
                    </div>
                    <div>
                        <label className = "userLabel">ID: </label>
                        <span>{userDataId}</span>
                    </div>
                    <div>
                        <label className = "userLabel">PW: </label>
                        <button>수정하기</button>
                    </div>
                    <div>
                        <label className = "userLabel">주소: </label>
                        <span>{userDataAd}</span>
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
