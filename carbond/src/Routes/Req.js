import React from 'react';
import StaticMapComponent from './StaticMapComponent';
import './css/Comp.css'
const Request = (DataPackage) => {
// API KEY = AIzaSyDk2tIxfdfOg_LcDDPnULATsahlzRXT-mk
  const userData = DataPackage.DataPackage.userData
  const plotDocuments = DataPackage.DataPackage.plotDocuments
  //console.log(user.userData[0])
  console.log("This is userData")
  console.log(userData)


  return (
    <div className='BigBox2'>
      <div className='Topbox'>
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
