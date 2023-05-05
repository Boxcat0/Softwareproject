import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../../Softwareproject/src/components/Navbar';
import Title from '../../Softwareproject/src/components/Title';
import MenuButton from '../../Softwareproject/src/components/menuButton';
import LoginPage from '../../Softwareproject/src/components/LoginPage';
import './App.css';
import Map from "../../Softwareproject/src/components/Map";
import Main from "./components/main";
import SearchBar from "../../Softwareproject/src/components/SearchBar";
import CreateInfo from "../../Softwareproject/src/components/CreateInfo";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
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
            <Route exact path="/" element={<Main />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/Map" element={<Map />} />
            <Route exact path="/CreateInfo" element={<CreateInfo />}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
