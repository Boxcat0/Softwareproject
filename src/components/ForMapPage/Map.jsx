import React, { useEffect } from "react";
import "../css/map.css";
import gym_data from "../gym_data.json";
import gym_data_seoul from "../gymdata.json";

function Map() {
    useEffect(() => {
        if (sessionStorage.getItem("toReload") === "False") {
            window.location.reload();
            sessionStorage.setItem("toReload", "true");
        }
    });
    let latitude = parseFloat(sessionStorage.getItem("latitude"));
    let longitude = parseFloat(sessionStorage.getItem("longitude"));
    if (latitude == null || longitude == null) {
        latitude = 35.1167;
        longitude = 128.9685;
    }
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
        });

        gym_data.positions.map((positions, index) =>//반복문처럼 json파일 다 돌아다니면서 확인
        {
            const markerPosition = new window.kakao.maps.LatLng(positions.Lat, positions.Lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
            return null;
        });
        gym_data_seoul.positions.map((positions, index) =>//반복문처럼 json파일 다 돌아다니면서 확인
        {
            const markerPosition = new window.kakao.maps.LatLng(positions.Lat, positions.Lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
            return null;
        });
        marker.setMap(map);
    }, [latitude, longitude]);

    return (
        <div className="kakaoMap">
            <div id="map" style={{ width: "850px", height: "550px" }}>
                {/* 지도를 표시할 영역입니다. */}
            </div>
        </div>
    );
}

export default Map;
