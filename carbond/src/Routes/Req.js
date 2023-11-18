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
    console.log("Use effect JSON")
    console.log(jsonData);
  })
 

  return (
    <div className='BigBox2'>
      <div className='Topbox'>
        {isMapFrameVisible && (
          <>
            <MapFrame onMapClick={handleMapClick} />
       </>
        )}

        {!isMapFrameVisible && (
          <>
            <button className="ClickBut" onClick={() => setIsMapFrameVisible(!isMapFrameVisible)}>Revert</button>
          </>
        )}
      </div>
      <div className='BotBox'>
        <div className='Subbox'></div>
        <div className='Subbox'></div>
      </div>
    </div>
  );
};

export default Request;
