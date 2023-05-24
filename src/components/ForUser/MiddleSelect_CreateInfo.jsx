import React from "react";
import {Link} from "react-router-dom";
import "../css/Loadingdesign.css"

function useLoading_CreateInfo(){
    return(
        <div>
            <div className = "Loading_main">
                <Link to="/CreateInfo">
                    <button className ="Loading">개인 회원가입</button>
                </Link>
            </div>
            <div className = "Loading_main">
                <Link to="/CreateInfo_G">
                    <button className ="Loading">헬스장 점주 회원가입</button>
                </Link>
            </div>
            <div className = "Loading_main">
                <Link to="/CreateInfo_T">
                    <button className ="Loading">트레이너 회원가입</button>
                </Link>
            </div>
        </div>
    );
}

export default useLoading_CreateInfo;