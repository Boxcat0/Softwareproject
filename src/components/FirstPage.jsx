import React from "react";
import {Link} from "react-router-dom";
import "./css/Loadingdesign.css"


function useLoading(){
    const toPostFind = () =>{
        sessionStorage.setItem("toReload","true");
    }
    return(
        <div>
            <div className="LoadingButton">
                <div className="Loading_location">
                    <Link to="/PostFind">
                        <button className ="Loading" onClick={toPostFind}>위치 검색</button>
                    </Link>
                </div>
                <div className = "Loading_main">
                    <Link to="/MainPage">
                        <button className ="Loading">근육 커GYM 메인 페이지로 이동</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default useLoading;