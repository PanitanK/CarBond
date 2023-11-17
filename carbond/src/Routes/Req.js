import React, { useState } from 'react';
import Mapframe from './Mapframe';

import './css/Comp.css'
const Request = (DataPackage) => {
  const [isMapFrameVisible, setIsMapFrameVisible] = useState(true);
  const [jsonData, setJsonData] = useState(null);
// API KEY = AIzaSyDk2tIxfdfOg_LcDDPnULATsahlzRXT-mk
  const userData = DataPackage.DataPackage.userData
  const plotDocuments = DataPackage.DataPackage.plotDocuments


  const handleMapClick = (clicked, data) => {
    setJsonData(data);
    if (clicked) {
      
      setIsMapFrameVisible(false);
      
    }
  };

  console.log("Frame visiblity is : ")
  console.log(isMapFrameVisible)
  


  return (
    <div className='BigBox2'>
      <div className='Topbox'>
      {isMapFrameVisible && <Mapframe onMapClick={handleMapClick} />}
     </div>
      <div className='BotBox'>
      <div className='Subbox'>
      
      </div>
      <div className='Subbox'>
        
      </div>
      </div>

   
    </div>
  );
};

export default Request;
