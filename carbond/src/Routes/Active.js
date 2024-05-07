import {React} from 'react';
//import { useState } from 'react';
import './css/Comp.css'
import StaticmapwithPolygon from './StaticmapwithPolygon';
  
const Active = ({ DataPackage,CredClick,PropClick,Export }) => {
    //console.log("hello")
    console.log(DataPackage.reports);
    console.log(DataPackage)

    const handleCredClick = () =>{
      CredClick()
    }

    const handlePropClick = () =>{
      PropClick()
    }
    const handleExport = () =>{
      window.print()
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
                <button className="ClickBut2" onClick={() => handleCredClick()} >Plot Credential</button>
                <button className="ClickBut2" onClick={() => handlePropClick()}>Update Properties</button>
                <button className="ClickBut2" onClick={() => handleExport()}>Export</button>
        </div>
        <div className='MapBoxInfo'>
                <h1 style={{ marginBottom: '-1vh' }} className = "editprint">Plot No.{DataPackage.index }</h1> {/* Updated line */}
                <p style={{ marginBottom: '-3vh'}} className = "editprint">Area : {DataPackage.plotDocuments[DataPackage.index].data.PlotData.Area.toFixed(2)} Rai</p>
                <p style={{ marginBottom: '-3vh' } } className = "editprint">Sub-District : {DataPackage.plotDocuments[DataPackage.index].address.subdistrict}</p>
                <p style={{ marginBottom: '-3vh' }} className = "editprint">District : {DataPackage.plotDocuments[DataPackage.index].address.district}</p>
                <p style={{ marginBottom: '1vh' }} className = "editprint">Province : {DataPackage.plotDocuments[DataPackage.index].address.province}</p>
                {DataPackage.reports.length >= 1 ? (
                    <div>
                    
                    <div className="table-container">
                    <p>There are {DataPackage.reports.length} reports available.</p>
                      <table className="custom-table"> {/* Apply the 'custom-table' class */}
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Age</th>
                            <th>N-Concentration</th>
                            <th>Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          {DataPackage.reports.map((report) => (
                            <tr key={report.id}>
                              <td>{report.id}</td>
                              <td>{report.InputDate}</td>
                              <td>{report.Age}</td>
                              <td>{report.Percentage}</td>
                              <td>{report.Weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                ) : (
                  <p>No reports available.</p>
                )}
                
                
     
                
      
                
                </div>
              


      </div>
    );
  };
  
  export default Active;