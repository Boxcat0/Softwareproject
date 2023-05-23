import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MyInfo(){
    const [userData, setUserData] = useState([{
        name : '',
        id : '',
        address : ''
        }]);
   useEffect(async()=>{
       try{
           const res = await axios.get ('/MyInfo')
           const userInfo = await res.data.map((rowData)=>(
               {
                   name : rowData.name,
                   id : rowData.id,
                   address : rowData.address
               })
           )
           setUserData(userData.concat(userInfo))
       }catch(e){
           console.error(e.message);
       }
   },[])
    return(
        <div className ='1st'>
            {!userData ?
                ( <div>
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
                </div> ): (
                    <div>
                        <h1>저장된 데이터가 없는 오류가 발생했습니다.</h1>
                    </div>
                )
            }
        </div>
    );
}
export default MyInfo;