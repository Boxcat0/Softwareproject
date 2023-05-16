import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MyInfo(){
    const [userData, setUserData] = useState(null);
    useEffect(() =>{
        axios.get('/Myinfo')
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    },[]);
    return(
        <div className ='1st'>
            <div>
                <div>
                    <lable>이름: </lable>
                    <span>{userData.name}</span>
                </div>
                <div>
                    <lable>ID: </lable>
                    <span>{userData.id}</span>
                </div>
                <div>
                    <lable>PW: </lable>
                    <button>수정하기</button>
                </div>
                <div>
                    <label>주소: </label>
                    <span>{userData.address}</span>
                </div>
            </div>
        </div>
    );
}
export default MyInfo;