import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../css/ico.css"

function Title() {
    const [IsLogin] = useState(sessionStorage.getItem("isLoggedIn")==="true");
    const ChangeEvent=()=>{
        sessionStorage.setItem("toReload","true");
    }
    return (
       <div>
           {IsLogin?(
               <Link to="/mainPage">
                   <div className ="PNG">
                       <img src={`${process.env.PUBLIC_URL}/근육 커GYM.png`} alt="title" />
                   </div>
               </Link>
           ):(
               <Link to="/" onClick={ChangeEvent}>
                   <div className ="PNG">
                       <img src={`${process.env.PUBLIC_URL}/근육 커GYM.png`} alt="title" />
                   </div>
               </Link>
           )
           }
       </div>
    );
}

export default Title;
