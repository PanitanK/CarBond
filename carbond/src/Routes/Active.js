import {React} from 'react';
//import { useState } from 'react';
import './css/Comp.css'
import StaticmapwithPolygon from './StaticmapwithPolygon';
  
const Active = ({ DataPackage,CredClick,PropClick,Export }) => {
    //console.log("hello")
    console.log(DataPackage.reports.length);
   

    const handleCredClick = () =>{
      CredClick()
    }

    const handlePropClick = () =>{
      PropClick()
    }
    const handleExport = () =>{
      Export()
    }


    //console.log(DataPackage.plotDocuments[DataPackage.index])
    return (
      <div className='Mapcolumn2'>
      <div className='Mapbox2' >
      <StaticmapwithPolygon
                  initialCenter={{
                    lat: DataPackage.plotDocuments[DataPackage.index].data.PlotData.PlotCenter[0],
                    lng: DataPackage.plotDocuments[DataPackage.index].data.PlotData.PlotCenter[1],
                    Plotpolygon: DataPackage.plotDocuments[DataPackage.index].data.polygonCoordinates
                  }}
                  
                />
               <button className="ClickBut" onClick={() => handleCredClick()} >Plot Credential</button>
        </div>
        <div className='MapBoxInfo'>
                <h1 style={{ marginBottom: '-1vh' }}>Plot No.{DataPackage.index }</h1> {/* Updated line */}
                <p style={{ marginBottom: '-3vh' }}>Area : {DataPackage.plotDocuments[DataPackage.index].data.PlotData.Area.toFixed(2)} Rai</p>
                <p style={{ marginBottom: '-3vh' }}>Sub-District : {DataPackage.plotDocuments[DataPackage.index].address.subdistrict}</p>
                <p style={{ marginBottom: '-3vh' }} >District : {DataPackage.plotDocuments[DataPackage.index].address.district}</p>
                <p style={{ marginBottom: '1vh' }}>Province : {DataPackage.plotDocuments[DataPackage.index].address.province}</p>
                {DataPackage.reports.length >= 1 && (
                    <p>There are {DataPackage.reports.length} reports available.</p>
                )}
                
                
     
                <button className="ClickBut" onClick={() => handlePropClick()}>Update Properties</button>
                <p></p>
                <button className="ClickBut" onClick={() => handleExport()}>Export</button>
      
                
                </div>
              


      </div>
    );
  };
  
  export default Active;