import {React} from 'react';
//import StaticMapComponent from './StaticMapComponent';
import './css/Comp.css'
import StaticmapwithPolygon from './StaticmapwithPolygon';
  
const HomeMode = ( {DataPackage, submitHomeClick, onMapboxClick} ) => {
    //const userData = DataPackage.DataPackage.userData;
    const plotDocuments = DataPackage.plotDocuments;
    //const Intermediate = DataPackage.DataPackage.Intermediate;
    const size = plotDocuments ? Object.keys(plotDocuments).length : 0;
    const onHomeClick = () => {
      console.log("Clicking");
      submitHomeClick();

    };

    const handleMapboxClick = (index) => {
      onMapboxClick(index)
    };

    return (
      <div >
        {size === 0 ? (
          <div className='Mapbox'>
            <h1>Loading...</h1>
          </div>
        ) : size >= 2 ? (
   
          plotDocuments.slice(1, size).map((plotDocument, index) => (
            <div key={`${plotDocument.id}-${index}`} className='Mapcolumn' onClick={() => handleMapboxClick(index)}>
              <div className='Mapbox'>
                <StaticmapwithPolygon
                  initialCenter={{
                    lat: plotDocument.data.PlotData.PlotCenter[0],
                    lng: plotDocument.data.PlotData.PlotCenter[1],
                    Plotpolygon: plotDocument.data.polygonCoordinates
                  }}
                />
              </div>
              <div className='MapBoxInfo'>
                <h1 style={{ marginBottom: '-1vh' }}>Plot No.{index + 1}</h1> {/* Updated line */}
                <p style={{ marginBottom: '-3vh' }}>Area : {plotDocument.data.PlotData.Area} Rai</p>
                <p style={{ marginBottom: '-3vh' }}>Sub-District : {plotDocument.address.subdistrict}</p>
                <p style={{ marginBottom: '-3vh' }} >District : {plotDocument.address.district}</p>
                <p style={{ marginBottom: '1vh' }}>Province : {plotDocument.address.province}</p>
              </div>
            </div>
          ))
          
        ) : (
          <div className='MapFeedBack'>
            <div className='MapContentFeedback'>
              <h1>You have no Active Projects</h1>
              <button className="ClickBut" onClick={() => onHomeClick()}> Click here to Add Project</button>

            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default HomeMode;