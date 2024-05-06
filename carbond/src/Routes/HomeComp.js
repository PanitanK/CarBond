import React from 'react';
import StaticMapComponent from './StaticMapComponent';
import './css/Comp.css'
import StaticmapwithPolygon from './StaticmapwithPolygon';
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
      {Intermediate == null ? (<div className='Mapbox'>
      <StaticMapComponent initialCenter={{ lat: userData[0].Latitude, lng: userData[0].Longitude,PlotDoc:plotDocuments }} />  
      </div>) : (
       
        <div className='Mapbox'>
        <StaticmapwithPolygon initialCenter={{ Label: "1" ,lat: Intermediate.PlotData.PlotCenter[0], lng: Intermediate.PlotData.PlotCenter[1],Plotpolygon:Intermediate.polygonCoordinates }} />  
        
        </div>
      ) }
      {/*<div className='Polymap'>
        <div className='BondBox'>
        <h1>Active Bond</h1>
        {Intermediate !== null ? (
          // Display content if Intermediate is not null
          <div className='Subbox1x2' >
             
            <h1 style={{color:"#38991C"}} >Bond 1</h1>
            
            <span>
            <h2>Area </h2>
            <h2 style={{color:"#38991C"}} >{Math.floor(Intermediate.PlotData.Area* 625)}</h2>
            <h2> Rais</h2>
            <h2 style={{color:"#FF0000"}} >      0/{Math.floor(Intermediate.PlotData.Area* 625* 0.6)}</h2>
            <h2> Bond sold</h2>
            </span>
            <span>
            <h2>Total </h2>
            <h2 style={{color:"#FF0000"}}>{0*Math.floor(Intermediate.PlotData.Area* 625*0.6*200)} THB </h2>
            <h2> Raised</h2>
            </span>
            <h2 style={{color:"#EB8E21"}}>Status : Pending</h2>
            
          </div>
        ) : (
          // Display "No bond" if Intermediate is null
          <p>No bond</p>
        )}
          
      </div>

              
          <StaticmapwithPolygon  initialCenter={{ Label: "1" ,lat: jsonData.PlotData.PlotCenter?.[0] , lng: jsonData.PlotData.PlotCenter?.[1] , Plotpolygon:jsonData.polygonCoordinates}} />
  </div> */}



  
      
   
    </div>
  );
};

export default HomeMode;
