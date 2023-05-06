import React, {useEffect} from "react";
import SearchBar from "./ForMainPage/SearchBar"
import Youtube from "./ForMainPage/YoutubeSlider"
import './css/youtube_button.css'
import Banner from "./ForMainPage/banner"


function useMain(){
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "False") {
            window.location.reload();
            sessionStorage.setItem("toReload", "not");
        }
    },[]);
    return(
        <div>

            <div className="Banner_menu">
                <Banner/>
            </div>
            <div className ="SearchBar">
                <SearchBar />
            </div>
            <div className="youtube_menu">
                <Youtube/>
            </div>
        </div>
    )

}
export default useMain;