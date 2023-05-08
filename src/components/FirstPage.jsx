import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./css/Loadingdesign.css"
import MapButton from "./ForMapPage/MapButton";


function useLoading(){
    const toPostFind = () =>{
        sessionStorage.setItem("toReload","true");
    }
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "False") {
            window.location.reload();
            sessionStorage.setItem("toReload", "not");

        }
    },[]);
    return(
        <div>
            <div className="LoadingButton">
                <div className="Loading_location">
                    <Link to="/PostFind">
                        <button className ="Loading" onClick={toPostFind}>위치 검색</button>
                    </Link>
                </div>
                <div className = "Loading_main">
                    <Link to="/mainPage">
                        <button className ="Loading">근육 커GYM 메인 페이지로 이동</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default useLoading;