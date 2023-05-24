import React,{useState} from "react";
import "../css/Formdesign.css"
import "../css/Loadingdesign.css"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import Post from "../ForMapPage/PostFind";

function CreateInfo_t(){
    const [showInputs, setShowInputs] = useState(false);
    const [showInputs2, setShowInputs2] = useState(false);
    const history = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress]  = useState('');
    const [Gym_name, setGym_name] = useState('');
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        setAddress(e.target.value);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }
    const handleSubmitTrainer_Gym = (e) => {
        e.preventDefault();
        axios.post('/CreateInfo_T', qs.stringify({
            name: name,
            id: id,
            password: password,
            Gym_name : Gym_name,
            address: address,
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
        axios.post('/CreateInfo_T', qs.stringify({
            name: name,
            id: id,
            password: password,
            address: address,
            role: 'Personal_t',
        }))

            .then((response) => {
                console.log(response.data);
                document.location.href="/loginPage";
            })
            .catch((error) => {
                console.error(error);
            });
    };
    function pw_check(e){
        if(password.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            history("/CreateInfo_T");
            return false;
        }else
        {
            if(showInputs === true)
            {
                if(document.getElementById("Gym_name").value === null)
                {
                    alert("상호명을 입력해주세요. 개인 트레이너라면 개인 트레이너 회원가입으로 진행해주세요.");
                    history("/CreateInfo_T");
                    return false;
                }
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
                <div className="CreateForm3">
                    <form className ="CreateForm_t" method="post" onSubmit={pw_check}>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                        <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                        <input type="text" id = "Gym_name" name = "Gym_name" value={Gym_name} onChange={(e) => setGym_name(e.target.value)} placeholder="상호명"/>
                        <input type="text" name="place" placeholder="주소 검색 버튼을 눌러주세요"  required={true} onChange={handleInput} value={enroll_company.address} />
                        <div>
                            <button className = "FormButton" onClick={handleComplete}>주소찾기</button>
                            {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                        </div>
                        <input type="hidden" name = "role" value = "GYM_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
            {showInputs2 &&(
                <div className="CreateForm2">
                    <form className ="CreateForm" method="post" onSubmit={pw_check}>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
                        <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="5자리 이상의 비밀번호를 입력해주세요" />
                        <input type="text" name="place" placeholder="주소 검색 버튼을 눌러주세요"  required={true} onChange={handleInput} value={enroll_company.address} />
                        <div>
                            <button className = "FormButton" onClick={handleComplete}>주소찾기</button>
                            {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                        </div>
                        <input type="hidden" name = "role" value = "Personal_t"/>
                        <input type = "submit" value = "Register"/>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreateInfo_t;