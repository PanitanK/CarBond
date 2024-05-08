import React, { useState } from 'react';
import MapFrame from './Mapframe';
import './css/Comp.css';
import StaticmapwithPolygon from './StaticmapwithPolygon';
import Geolocate from './Geolocate';
const AddPlot = ({onSubmit}) => {
  const [isMapFrameVisible, setIsMapFrameVisible] = useState(true);
  const [jsonData, setJsonData] = useState(null);
  const [addressData, setAddressData] = useState({ subdistrict: '', district: '', province: '' });

  const handleAddressUpdate = (address) => {
  setAddressData(address); // Update state with address data
  console.log("This is address from addplot")
  console.log(address)

};  
  const handleMapClick = (Bundle) => {
    setJsonData(Bundle);
    console.log(Bundle)

    if (isMapFrameVisible) {
      setIsMapFrameVisible(!isMapFrameVisible);
    } 
  };

  const SubmitPlot = (Data,Addr) => {
    console.log("Submitting Data ")
    onSubmit(Data,Addr);
  }
  
  /*useEffect(()=> {
  })*/
 

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
          <div className='ResBox'>
            <div className='LeftBundle'>
              <div className='Polymap'>

              
          <StaticmapwithPolygon  initialCenter={{ Label: "1" ,lat: jsonData.PlotData.PlotCenter?.[0] , lng: jsonData.PlotData.PlotCenter?.[1] , Plotpolygon:jsonData.polygonCoordinates}} />
          </div>
          </div>
            <div className='RightBundle'>
            <div className='Subbox1x'>
            <h1 style={{color:"#38991C", lineHeight :"3vh"}}>Area : {Math.floor(jsonData.PlotData.Area * 625) } Rai</h1>
              
              <table class="invisible-border-table">
                <tr>
                  <td>Latiude</td>
                  <td>: {jsonData.PlotData.PlotCenter?.[0]}</td>
                </tr>
                <tr>
                  <td>Longitude</td>
                  <td>: {jsonData.PlotData.PlotCenter?.[1]}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td><Geolocate latitude={jsonData.PlotData.PlotCenter?.[0]} longitude={jsonData.PlotData.PlotCenter?.[1]} onAddressUpdate={handleAddressUpdate} /></td>
                </tr>
              </table>

            </div>
            
            <div className='Subbox1x'>
            
        
            </div>
          </div>
          </div>
          <button className="ClickBut" onClick={() => SubmitPlot(jsonData,addressData.Area * 625)}>Apply</button>
          <button className="ClickBut" onClick={() => setIsMapFrameVisible(!isMapFrameVisible)}>Revert</button>
          </>
        )}

        {!isMapFrameVisible && !(jsonData?.PlotData) &&(
          <>
            <h1>There is no data</h1>
            <button className="ClickBut" onClick={() => setIsMapFrameVisible(!isMapFrameVisible)}>Revert</button>
        </>
        )}

      </div>
    
    </div>
  );
};

export default AddPlot;