import React, {useState} from "react";
import {Link} from "react-router-dom";

function Title() {
    const [IsLogin] = useState(sessionStorage.getItem("isLoggedIn")==="true");
    return (
       <div>
           {IsLogin?(
               <Link to="/mainPage">
                   <h1>근육 커GYM</h1>
               </Link>
           ):(
               <Link to="/">
                   <h1>근육 커GYM</h1>
               </Link>
           )
           }
       </div>
    );
}

export default Title;
