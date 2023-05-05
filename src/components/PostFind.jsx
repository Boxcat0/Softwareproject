import React, {useEffect} from 'react';
import DaumPostcode from 'react-daum-postcode';
import {useNavigate } from "react-router-dom";

const Post = () => {
    const history = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "true") {
            window.location.reload();
            sessionStorage.setItem("toReload", "False");
        }
    });
    const handleComplete = async(data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        console.log(data.address);
        try {
            const response = await fetch(
                `https://dapi.kakao.com/v2/local/search/address.json?query=${data.address}`,
                {
                    headers: {Authorization: "KakaoAK 2180384fb48d77041c8e30c6c14fa5ce"},
                }
            );
            const datas = await response.json();
            if (datas.documents.length === 0) {
                console.error("No result found.");
                return;
            }
            const firstResult = datas.documents[0];
            const {x, y} = firstResult.address;
            // 위도와 경도를 이용해 지도에 위치 표시하는 코드 작성
            sessionStorage.setItem("longitude", x);
            sessionStorage.setItem("latitude", y);
            history("/map");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <DaumPostcode onComplete={handleComplete}/>
    );
}

export default Post;