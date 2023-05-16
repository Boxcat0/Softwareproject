import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/ForMainPage/Navbar';
import Title from './components/ForMainPage/Title';
import MenuButton from './components/ForMainPage/menuButton';
import LoginPage from './components/ForUser/LoginPage';
import './App.css';
import './components/css/SearchBar.css'
import Map from "./components/ForMapPage/Map";
import Main from "./components/main";
import SearchBar from "./components/ForMainPage/SearchBar";
import CreateInfo from "./components/ForUser/CreateInfo";
import Loading from "./components/FirstPage";
import MyInfo from "./components/ForUser/MyInfo";
import CreateInfoGym from "./components/ForUser/CreateInfoGym";
import CreateInfoTrainer from "./components/ForUser/CreateInfotrainer";
import MiddleSelect from "./components/ForUser/MiddleSelect_CreateInfo";
import FindPage from "./components/ForMapPage/FindPage";
import SeparatePage from "./components/ForMapPage/SeparatePage";


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
     <div>
       <BrowserRouter>
         <div>
           <Navbar onClick={() => setShowLogin(!showLogin)} />
           <div className={`login-menu ${showLogin ? 'show-login-menu' : ''}`}>
             <div className="searchBar_menu">
               <SearchBar/>
             </div>
             <MenuButton/>
           </div>
           <div className="title-Center">
             <Title />
           </div>
           <Routes>
             <Route exact path="/" element={<Loading />} />
             <Route exact path="/myInfo" element ={<MyInfo />}/>
             <Route exact path="/mainPage" element={<Main />}/>
             <Route exact path="/PostFind" element={<FindPage />}/>
             <Route exact path="/chooseCreate" element={<MiddleSelect/>}/>
             <Route exact path="/CreateInfo_G" element={<CreateInfoGym/>}/>
             <Route exact path="/CreateInfo_t" element={<CreateInfoTrainer/>}/>
             <Route exact path="/SeparatePage" element={<SeparatePage />}/>
             <Route exact path="/login" element={<LoginPage />} />
             <Route exact path="/Map" element={<Map />} />
             <Route exact path="/CreateInfo" element={<CreateInfo />}/>
           </Routes>
         </div>

       </BrowserRouter>
     </div>
  );
}

export default App;
