import React, { useState, useEffect, useRef } from 'react';
import { searchAddress } from 'services/api-services';

const LocationMap = ({ address }) => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [map, setMap] = useState(null);
  // const [marker, setMarker] = useState(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coordinatesData = await searchAddress(address);
        if (coordinatesData.data.status === 'OK') {
          const { lat, lng } =
            coordinatesData.data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          throw new Error('Could not find location!');
        }
      } catch (error) {
        alert('Error occurred while fetching coordinates: ' + error.message);
        console.error(error);
      }
    };

    fetchCoordinates();
  }, [address]);

  useEffect(() => {
    if (coordinates.lat !== 0 && coordinates.lng !== 0) {
      const mapOptions = {
        center: coordinates,
        zoom: 12,
      };
      const mapInstance = new window.google.maps.Map(
        document.getElementById('map'),
        mapOptions
      );
      setMap(mapInstance);
    }
  }, [coordinates]);

  useEffect(() => {
    if (map && coordinates.lat !== 0 && coordinates.lng !== 0) {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
      const newMarker = new window.google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Marker',
      });
      markerRef.current = newMarker;
    }
  }, [map, coordinates]);

  return (
    <div
      id="map"
      style={{ width: '100%', height: '300px', border: '1px solid grey' }}
    ></div>
  );
};

export default LocationMap;
