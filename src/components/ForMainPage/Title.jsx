import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../css/ico.css"

function Title() {
    const [IsLogin] = useState(sessionStorage.getItem("isLoggedIn")==="true");
    return (
       <div>
           {IsLogin?(
               <Link to="/mainPage">
                   <div className ="PNG">
                       <img src={`${process.env.PUBLIC_URL}/근육 커GYM.png`} alt="title" />
                   </div>
               </Link>
           ):(
               <Link to="/">
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
