import React from 'react';
import StaticMapComponent from './StaticMapComponent';

const HomeMode = (userData,plotDocuments) => {
  return (
    <div>
      <StaticMapComponent initialCenter={{ lat: userData[0].Latitude, lng: userData[0].Longitude,PlotDoc:plotDocuments }} />  
     <h1>Current Active Bond</h1>

    </div>
  );
};

export default HomeMode;
