import React, { useState , useEffect } from 'react';
import MapFrame from './Mapframe';
import './css/Comp.css';
import StaticmapwithPolygon from './StaticmapwithPolygon';

const Request = ({onSubmit}) => {
  const [isMapFrameVisible, setIsMapFrameVisible] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  const handleMapClick = (Bundle) => {
    setJsonData(Bundle);

    if (isMapFrameVisible) {
      setIsMapFrameVisible(!isMapFrameVisible);
    } 
    
    
  };

  const SubmitPlot = (Data) => {
    console.log("Submitting Data ")
    console.log(Data)
    onSubmit(Data);

  }

  useEffect(()=> {

    
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
              </table>

            </div>
            
            <div className='Subbox1x'>
            
              <span>
              <h1 style={{color:"#38991C"}} >Estimate return</h1>
              <p>Carbon Credit Cap {Math.floor(jsonData.PlotData.Area * 625 * 0.6)} Credits / year</p>
              <p>Project Value in 1 year  {Math.floor(jsonData.PlotData.Area * 625 * 0.6) * 200} THB </p>
              </span>
            </div>
          </div>
          </div>
          <button className="ClickBut" onClick={() => SubmitPlot(jsonData)}>Apply</button>
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

export default Request;
