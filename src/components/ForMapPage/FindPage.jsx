import React from 'react';
import SearchBar from "../ForMainPage/SearchBar";
import "../css/MainFind.css"
import {Link} from "react-router-dom";

function findPage(){
    return(
        <div>
            <div className="MainFind">
                <SearchBar />
            </div>
            <div className="WE">
               <Link to = "/chooseCreate">
                   <img src={`${process.env.PUBLIC_URL}/we want you.png`} alt="we want you" />
               </Link>
            </div>
        </div>

    );
}

export default findPage;