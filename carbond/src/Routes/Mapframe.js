import React, { useEffect, useState } from "react";

const MapFrame = ({onMapClick}) => {
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);
  const [ Clicked , setClicked] = useState(false)


  useEffect(() => {
    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (event) => {
    if (event.data.type === "polygonCoordinates") {
      const receivedCoordinates = event.data.coordinates;
      setPolygonCoordinates(receivedCoordinates);
      console.log("I've get")
      console.log(receivedCoordinates)
    }

    else if (event.data.type === "applyButtonClicked") {


      setClicked(true)
      console.log("This is click status")
      console.log(Clicked)
      onMapClick(Clicked,polygonCoordinates);
    }
    
   
  };



  const calculatePolygonArea = (coords) => {
    if (coords.length < 3) return 0;

    let area = 0;

    for (let i = 0; i < coords.length; i++) {
      const curr = coords[i];
      const next = coords[(i + 1) % coords.length];

      area += (next.lng + curr.lng) * (next.lat - curr.lat);
    }

    // Conversion factor: 1 sq degree = 111.32 sq km (approximately)
    const sqKmArea = (Math.abs(area) / 2) * 111.32 * 111.32;

    return sqKmArea;
  };


  return (
    <div className="MapBoxContainerForDraw">
     
      <iframe
        src="/mapdrawing.html"
        width="100%"
        height="280vh"
        frameBorder="0"
        title="Google Map"
      ></iframe>




              
    </div>
    
  );
};

export default MapFrame;
