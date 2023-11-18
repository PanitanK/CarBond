import React, { useEffect, useState, useCallback } from "react";
import "./css/Comp.css";

const MapFrame = ({ onMapClick }) => {
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);
  const [PlotData, setPlotData] = useState(null);

  const getcenter = useCallback((Coordinates) => {
    var centerlat = 0;
    var centerlng = 0;
    var CDL = Coordinates.length;
    for (let i = 0; i < CDL; i++) {
      centerlat = centerlat + Coordinates[i].lat;
      centerlng = centerlng + Coordinates[i].lng;
    }

    centerlat = centerlat / CDL;
    centerlng = centerlng / CDL;

    return [centerlat, centerlng];
  }, []);

  const calculatePolygonArea = useCallback((coords) => {
    console.log("This is what we received ");
    console.log(coords);
    console.log(coords.length);

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
  }, []);

  const receiveMessage = useCallback(
    (event) => {
      if (event.data.type === "polygonCoordinates") {
        setPolygonCoordinates(event.data.coordinates);
        const collection = {
          PlotCenter: getcenter(event.data.coordinates),
          Area: calculatePolygonArea(event.data.coordinates),
        };
        setPlotData(collection);
      }
    },
    [getcenter, calculatePolygonArea]
  );

  useEffect(() => {
    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [receiveMessage]);

  const handleApplyClick = useCallback(() => {
    console.log("Apply button clicked in MapFrame");
    console.log(polygonCoordinates);
    console.log(PlotData);
    console.log("Data before Send");
    onMapClick({ polygonCoordinates, PlotData });
  }, [onMapClick, polygonCoordinates, PlotData]);

  return (
    <div className="MapBoxContainerForDraw">
      <iframe src="/mapdrawing.html" title="Google Map"></iframe>
      <button className="ClickBut" onClick={handleApplyClick}>
        Apply
      </button>
    </div>
  );
};

export default MapFrame;
