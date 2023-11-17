import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart2 = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "",
    },
    axisY: {
      title: "",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "ราคายาง(บาท)",
        showInLegend: true,
        lineColor: "Blue", // Customize line color here
        
        dataPoints: [
         
          { y: 57.77, label: "2009" },
          { y: 104.89, label: "2010" },
          { y: 129.36, label: "2011" },
          { y: 91.07, label: "2012" },
          { y: 75.55, label: "2013" },
          { y: 55.53, label: "2014" },
          { y: 45.88, label: "2015" },
          { y: 50.37, label: "2016" },
          { y: 77.86, label: "2017" },
          { y: 50.8, label: "2018" },
          { y: 54.82, label: "2019" },
          { y: 54.8, label: "2020" },
          { y: 65.6, label: "2021" },
          { y: 66.50, label: "2022" }
        ],
      },
      {
        type: "spline",
        name: "Gross Production 100k Ton",
        showInLegend: true,
        lineColor: "Red", // Customize line color here
        dataPoints: [
          { y: 31.64, label: "2009" },
          { y: 32.5, label: "2010" },
          { y: 35.69, label: "2011" },
          { y: 37.78, label: "2012" },
          { y: 41.9, label: "2013" },
          { y: 43, label: "2014" },
          { y: 44.7, label: "2015" },
          { y: 45, label: "2016" },
          { y: 51.3, label: "2017" },
          { y: 50.8, label: "2018" },
          { y: 47.3, label: "2019" },
          { y: 44, label: "2020" },
          { y: 48.9, label: "2021" },
          { y: 48, label: "2022" }
        ],
      },
     
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart2;
