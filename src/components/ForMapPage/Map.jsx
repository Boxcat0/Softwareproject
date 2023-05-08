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
            var infowindow = new window.kakao.maps.InfoWindow(
                {
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">' + positions.title + '</div>'
                }
            )
            window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
            return null;
        });
        gym_data_seoul.positions.map((positions, index) =>//반복문처럼 json파일 다 돌아다니면서 확인
        {
            const markerPosition = new window.kakao.maps.LatLng(positions.Lat, positions.Lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
            var infowindow = new window.kakao.maps.InfoWindow(
                {
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">' + positions.title + '</div>'
                }
            )
            window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
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
