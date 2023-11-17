import React from 'react';
import StaticMapComponent from './StaticMapComponent';
import './css/Comp.css'
const HomeMode = (DataPackage) => {
// API KEY = AIzaSyDk2tIxfdfOg_LcDDPnULATsahlzRXT-mk
  const userData = DataPackage.DataPackage.userData
  const plotDocuments = DataPackage.DataPackage.plotDocuments
  //console.log(user.userData[0])
  console.log("This is userData")
  console.log(userData)


  return (
    <div className='BigBox'>
      <div className='Mapbox'>
          <StaticMapComponent initialCenter={{ lat: userData[0].Latitude, lng: userData[0].Longitude,PlotDoc:plotDocuments }} />  
      </div>
      <div className='BondBox'>
        
          
      </div>

   
    </div>
  );
};

export default HomeMode;
