import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import "../css/ico.css";
import "../css/SearchBar.css"
import Post from "../ForMapPage/PostFind";

function SearchBar() {
    const history = useNavigate();
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //event = 검색내역
        try {
            const response = await fetch(
                `https://dapi.kakao.com/v2/local/search/address.json?query=${enroll_company.address}`,
                {
                    headers: { Authorization: "KakaoAK 2180384fb48d77041c8e30c6c14fa5ce" },
                }
            );
            const data = await response.json();
            if (data.documents.length === 0) {
                console.error("No result found.");
                return;
            }
            const firstResult = data.documents[0];
            const { x, y } = firstResult.address;
            console.log(`위도: ${y}, 경도: ${x}`);
            // 위도와 경도를 이용해 지도에 위치 표시하는 코드 작성
            sessionStorage.setItem("longitude", x);
            sessionStorage.setItem("latitude",y);
            history("/map");
        } catch (error) {
            console.error(error);
        }
    };
    //onChange={(e) => setSearch(e.target.value)}
    return (
            <form className="form" onSubmit={handleSubmit}>
            <label>
                <input type="text" name="search" id = "search" placeholder="어디서 근육 커질래?"  required={true} onChange={handleInput} value={enroll_company.address} />
                <button className= "bannerButton" onClick={handleComplete}>
                    <div className= "icon">
                        <img src={`${process.env.PUBLIC_URL}/search.ico`} alt="search" />
                    </div>
                </button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
            </label>
        </form>
    );
}

export default SearchBar;
