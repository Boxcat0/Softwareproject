import React, {useState} from 'react';
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
import Post from "./components/ForMapPage/PostFind";
import Loading from "./components/FirstPage";

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
             <Route exact path="/mainPage" element={<Main />}/>
             <Route exact path="/PostFind" element={<Post />} />
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
