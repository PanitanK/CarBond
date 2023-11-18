import React, { useState , useEffect } from 'react';
import MapFrame from './Mapframe';
import './css/Comp.css';

const Request = () => {
  const [isMapFrameVisible, setIsMapFrameVisible] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  const handleMapClick = (Bundle) => {
    setJsonData(Bundle);

    if (isMapFrameVisible) {
      setIsMapFrameVisible(!isMapFrameVisible);
    } 
    
    
  };

  useEffect(()=> {
    /*console.log("Use effect JSON")
    console.log("JSON0");
    console.log(jsonData.PlotData.Area)
    console.log(jsonData.PlotData.PlotCenter[0])
    console.log(jsonData.PlotData.PlotCenter[1])
    console.log(jsonData)*/
  })
 

  return (
    <div className='BigBox2'>
      <div className='Topbox2'>
        {isMapFrameVisible  &&(
          <>
            <MapFrame onMapClick={handleMapClick} />
       </>
        )}
          
        {!isMapFrameVisible && jsonData?.PlotData && (
          <>
           
            <h1>Area : {Math.floor(jsonData.PlotData.Area * 625) } Rai</h1>
            <p>Latiude: {jsonData.PlotData.PlotCenter?.[0]}</p>
            <p>Longitude : {jsonData.PlotData.PlotCenter?.[1]}</p>
            <h1>Estimate </h1>
            <h1>Carbon Credit Cap {Math.floor(jsonData.PlotData.Area * 625 * 0.6)} </h1>
            <h1>Value in 1 year  {Math.floor(jsonData.PlotData.Area * 625 * 0.6) * 300} THB </h1>
          </>
        )}

        {!isMapFrameVisible && (
          <>
            <button className="ClickBut" onClick={() => setIsMapFrameVisible(!isMapFrameVisible)}>Revert</button>
        </>
        )}

      </div>
    
    </div>
  );
};

export default Request;
