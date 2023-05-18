import React, {useEffect} from "react";
import "../css/Modal.css";

const MiniMap=(props)=>{
    const handleModal =() =>{
        console.log("false");
        window.location.assign("/SeparatePage");
    }
    let Lat = sessionStorage.getItem("targetLat");
    let Lng = sessionStorage.getItem("targetLng");
    useEffect(()=>{
        const container = document.getElementById("map");
        const options = {
            center: new window.kakao.maps.LatLng(Lat, Lng),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(Lat, Lng);
        const marker = new window.kakao.maps.Marker({
            map : map,
            position : markerPosition
        });
        marker.setMap(map);
        map.setCenter(markerPosition);
    })
    return(
        <div className="modal2">
            <div className="modal-container2">
                <div>
                    <button className="modalBackbutton" onClick={handleModal}></button>
                </div>
                <div className="kakaoMap2">
                    <div id="map" style={{ width: "500px", height: "470px"}}>
                        {/* 지도를 표시할 영역입니다. */}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default MiniMap;