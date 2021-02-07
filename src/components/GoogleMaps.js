import React, { useEffect, useRef } from 'react';

const MyMap = ({ placeName }) => {
  const googleMapRef = useRef();
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      getLatLng();
    });
  }, []);

  const createGoogleMap = (coordinates) => {
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 13,
      center: {
        lat: coordinates.lat(),
        lng: coordinates.lng(),
      },
      disableDefaultUI: true,
    });
  };
  const getLatLng = () => {
    let lat;
    let lng;
    let placeId;
    new window.google.maps.Geocoder().geocode(
      { address: `${placeName}` },
      function (results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          placeId = results[0].place_id;
          createGoogleMap(results[0].geometry.location);
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          // eslint-disable-next-line no-new
          new window.google.maps.Marker({
            position: { lat: 52.62122227219, lng: 16.5742751761446 },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: `Kopernika 4`,
          });
          // eslint-disable-next-line no-new
          new window.google.maps.Marker({
            position: { lat: 52.604950593905144, lng: 16.589948927010074 },
            map: googleMap,
            animation: window.google.maps.Animation.DROP,
            title: 'Łąkowa 9',
          });
        } else {
          alert(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      }
    );
  };
  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: '600px', height: '400px' }}
    />
  );
};
export default MyMap;
