import React, {useState} from 'react';
import axios from "axios";
import qs from "qs";

function MiddlePage (){
    const [gymname, setGymName] = useState('');
    const com =(e)=>{
        e.preventDefault();
        axios.post('/map_click', qs.stringify({
            GymName : gymname
        }))
            .then((response) => {
                console.log(response.data);
                document.location.href="/SeparatePage";
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return(
        <form method="post" action="/map_click" onSubmit={com}>
            <input type="hidden" name ="gymName" value={gymname} onChange={(e)=>setGymName(sessionStorage.getItem("targetName"))}/>
            <button className="DefaultButton" type="submit">해당 페이지로 이동</button>
        </form>
    );
}
export default MiddlePage;