import React from 'react';
import StaticMapComponent from './StaticMapComponent';
import './css/Comp.css'
const HomeMode = (DataPackage) => {
// API KEY = AIzaSyDk2tIxfdfOg_LcDDPnULATsahlzRXT-mk
  const userData = DataPackage.DataPackage.userData
  const plotDocuments = DataPackage.DataPackage.plotDocuments
  const Intermediate = DataPackage.DataPackage.Intermediate
  //console.log(user.userData[0])
  console.log("This is userData")
  console.log(userData)
  console.log(Intermediate)

  return (
    <div className='BigBox'>
      <div className='Mapbox'>
          <StaticMapComponent initialCenter={{ lat: userData[0].Latitude, lng: userData[0].Longitude,PlotDoc:plotDocuments }} />  
        
      </div>
      <div className='BondBox'>
        <h1>Active Bond</h1>
        {Intermediate !== null ? (
          // Display content if Intermediate is not null
          <div className='Subbox1x' >
             <span>
            <h1 style={{color:"#38991C"}} >Bond 1</h1>
            {/* Display the content of Intermediate */}
            <h1>Area {Math.floor(Intermediate.PlotData.Area* 625)} Rai</h1>
            <h1>0/ {Math.floor(Intermediate.PlotData.Area* 625* 0.6)} Bond sold</h1>
            < h1>Total {0*Math.floor(Intermediate.PlotData.Area* 625*0.6*200)} THB Raised</h1>
            <h1>Status : Pending</h1>
            </span>
          </div>
        ) : (
          // Display "No bond" if Intermediate is null
          <p>No bond</p>
        )}
          
      </div>

   
    </div>
  );
};

export default HomeMode;
