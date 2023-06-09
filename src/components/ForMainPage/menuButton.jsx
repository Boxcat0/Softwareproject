import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/locationbutton.css";
import Select from "../ForCommunity/SelectCommunityPage";

function MenuButton() {
    const history = useNavigate();
    const [popup, setPopup] = useState(false);
    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem("isLoggedIn")==="true"
    );
    const handleLogout = () => {
        sessionStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
        sessionStorage.clear();
        window.location.reload();
        history("/");
    };
    const mapSetting =() =>{
        sessionStorage.setItem("latitude","35.1167");
        sessionStorage.setItem("longitude","128.9685");
    }
    const toReload =() =>{
        sessionStorage.setItem("toReload","true");
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <div className="logoutName">
                        <button className="location_my" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </div>
                    <div className ="my_info">
                        <Link to="/MyInfo">
                            <button className ="location_my">내 정보</button>
                        </Link>
                    </div>
                    <div className="location">
                        <Link to ="/Map">
                            <button className="location_my" onClick={mapSetting}>내 위치</button>
                        </Link>
                    </div>
                    <div className="location">
                        <button className="location_my" onClick={handleComplete}>커뮤니티 이동</button>
                        {popup &&<Select></Select>}
                    </div>
                    <div className="location">
                        <Link to ="/PostFind">
                            <button className="location_my" onClick={toReload}>검색</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="loginName">
                    <Link to="/LoginPage">
                        <button className="location_my">로그인</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MenuButton;
