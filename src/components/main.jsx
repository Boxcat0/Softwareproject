import React, {useEffect} from "react";
import SearchBar from "./SearchBar"
import Youtube from "./YoutubeSlider"
import './css/youtube_button.css'
import Banner from "./banner"


function useMain(){
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "False") {
            window.location.reload();
            sessionStorage.setItem("toReload", "not");
        }
    },[]);
    return(

        <div>
            <SearchBar />
            <div className="Banner_menu">
                <Banner/>
            </div>
            <div className="youtube_menu">
                <Youtube/>
            </div>
        </div>
    )

}
export default useMain;