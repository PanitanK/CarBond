import React from 'react';
import StaticMapComponent from './StaticMapComponent';

const HomeMode = (DataPackage) => {

  const userData = DataPackage.DataPackage.userData
  const plotDocuments = DataPackage.DataPackage.plotDocuments
  //console.log(user.userData[0])
  
  console.log(userData)
  console.log(plotDocuments)
  //console.log(userData.userData[0].Name)
  

  /*console.log("This is 2")
  console.log({plotDocuments})
  console.log("This is 2E" )*/
  return (
    <div>

<StaticMapComponent initialCenter={{ lat: userData[0].Latitude, lng: userData[0].Longitude,PlotDoc:plotDocuments }} />  
     
      <h1>Current Active Bond</h1>
      <h1>Current Active Bond</h1>
      <h1>Current Active Bond</h1>

    </div>
  );
};

export default HomeMode;
