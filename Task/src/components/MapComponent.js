import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ location }) => (
  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={location}
      zoom={10}
    >
      <Marker position={location} />
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;