// components/Map.tsx
import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  apiKey: string;
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ apiKey, latitude, longitude }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <Box rounded="lg" overflow="hidden">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={defaultCenter}
          zoom={15}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Map;
