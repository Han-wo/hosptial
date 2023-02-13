import React, { useState, useEffect } from "react";

function HospitalFinder() {
  const [hospitals, setHospitals] = useState([]);
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // HTML5 Geolocation API를 사용하여 현재 위치를 가져옴
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => console.log(error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      // Google Maps JavaScript API를 로드
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMqIfX1QsHqHejE3u4XPIW0dCVH4I_QJA&libraries=places`;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [currentLocation]);

  function initMap() {
    // Google 지도 생성
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: currentLocation,
      zoom: 15
    });
    setMap(map);

    // Google 장소 검색기 생성
    const placesService = new window.google.maps.places.PlacesService(map);

    // 검색 옵션 설정
    const request = {
      location: currentLocation,
      radius: 10000, // 검색 반경 (m)
      type: ["hospital"] // 검색할 장소 유형
    };

    // 장소 검색 요청
    placesService.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results.slice(0, 10)); // 가장 가까운 10개 병원 정보만 저장
        createMarkers(results);
      }
    });
  }

  function createMarkers(places) {
    // 검색된 장소마다 마커 생성
    places.forEach(place => {
      const marker = new window.google.maps.Marker({
        position: place.geometry.location,
        map: map
      });

      // 마커 클릭시 정보창 열기
      marker.addListener("click", () => {
        const infowindow = new window.google.maps.InfoWindow({
          content: `<h3>${place.name}</h3>
            <p>${place.vicinity}</p>`
        });
        infowindow.open(map, marker);
      });
    });
  }

  return (
    <div className="hospital-finder">
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      <div>
        <h2>가까운 병원 목록</h2>
        <ul>
          {hospitals.map((hospital, index) => (
            <li key={index}>
              {hospital.name} ({hospital.vicinity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HospitalFinder;