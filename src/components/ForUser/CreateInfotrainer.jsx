import React,{useState} from "react";
import "../css/Formdesign.css"
import "../css/Loadingdesign.css"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

function CreateInfo_t(){
    const [showInputs, setShowInputs] = useState(false);
    const [showInputs2, setShowInputs2] = useState(false);
    const history = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [place, setPlace] = useState('');
    const [Gym_name, setGym_name] = useState('');
    const handleSubmitTrainer_Gym = (e) => {
        e.preventDefault();
        axios.post('/CreateInfoTrainer', qs.stringify({
            name: name,
            id: id,
            password: password,
            Gym_name : Gym_name,
            place: place,
            role: 'GYM_t',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/";
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleSubmitTrainer = (e) => {
        e.preventDefault();
        axios.post('/CreateInfoTrainer', qs.stringify({
            name: name,
            id: id,
            password: password,
            place: place,
            role: 'Personal_t',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/";
            })
            .catch((error) => {
                console.error(error);
            });
    };
    function pw_check(e){
        if(document.getElementById("password").value.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo_Gym");
            return false;
        }else
        {
            if(showInputs === true)
            {
                handleSubmitTrainer_Gym(e);
            }
            else if(showInputs2 === true)
            {
                handleSubmitTrainer(e);
            }
        }
    }
    const GymEnter =() =>{
        setShowInputs(true);
        setShowInputs2(false);
    }
    const NonEnter =() =>{
        setShowInputs(false);
        setShowInputs2(true);
    }
    return(
        <div>
            <div className="Loading_main2">
                <button className="T_button" onClick={GymEnter}>헬스장 소속</button>
                <button className="T_button" onClick={NonEnter}>개인 트레이너</button>
            </div>
            {showInputs &&(
                <div className="CreateForm2">
                    <form className ="CreateForm_t" method="post" action ="/CreateInfo" onSubmit={pw_check}>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                        <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                        <input type="text" id = "Gym_name" name = "Gym_name" value={Gym_name} onChange={(e) => setGym_name(e.target.value)} placeholder="상호명"/>
                        <input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="주소를 입력해주세요" />
                        <input type="hidden" name = "role" value = "GYM_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
            {showInputs2 &&(
                <div className="CreateForm2">
                    <form className ="CreateForm" method="post" action ="/CreateInfo" onSubmit={pw_check}>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                        <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                        <input type="hidden" name = "role" value = "Personal_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreateInfo_t;