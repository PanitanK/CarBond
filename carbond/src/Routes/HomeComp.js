/*<div className='Polymap'>
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
  </div> */

  import React from 'react';
  import StaticMapComponent from './StaticMapComponent';
  import './css/Comp.css'
  import StaticmapwithPolygon from './StaticmapwithPolygon';
  
  const HomeMode = (DataPackage) => {
    const userData = DataPackage.DataPackage.userData;
    const plotDocuments = DataPackage.DataPackage.plotDocuments;
    const Intermediate = DataPackage.DataPackage.Intermediate;
  
    const size = plotDocuments ? Object.keys(plotDocuments).length : 0;
  
 
    console.log("This is size: " + size);
  
    return (
      <div className='BigBox'>
        {size === 0 ? (
          <div className='Mapbox'>
            <h1>Loading...</h1>
          </div>
        ) : size >= 2 ? (
          plotDocuments.slice(1, size).map((plotDocument, index) => (
            <div className='Mapcolumn'>
              <div className='Mapbox' key={index}>
                <StaticmapwithPolygon
                  initialCenter={{
                    lat: plotDocument.data.PlotData.PlotCenter[0],
                    lng: plotDocument.data.PlotData.PlotCenter[1],
                    Plotpolygon: plotDocument.data.polygonCoordinates
                  }}
                  
                />
          
              </div>
            </div>
          ))
        ) : (
          <div className='Mapbox'>
            <h1>You have no active Project</h1>
          </div>
        )}
      </div>
    );
  };
  
  export default HomeMode;