import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyInfo() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/MyInfo');
                const userInfo = res.data.map((rowData) => ({
                    name: rowData.name,
                    id: rowData.id,
                    address: rowData.address,
                }));
                setUserData([...userData, ...userInfo]);
            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="1st">
            {userData ? (
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
            )}
        </div>
    );
}

export default MyInfo;
