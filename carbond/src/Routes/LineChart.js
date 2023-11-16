import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChartJs = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "",
    },
    axisY: {
      title: "ล้านบาท",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "Revenue",
        showInLegend: true,
        lineColor: "Blue", // Customize line color here
        
        dataPoints: [
          { y: 5106, label: "2007" },
          { y: 5098, label: "2008" },
          { y: 4696, label: "2009" },
          { y: 5883, label: "2010" },
          { y: 14747, label: "2011" },
          { y: 14855, label: "2012" },
          { y: 10347, label: "2013" },
          { y: 5694, label: "2014" },
          { y: 5694, label: "2015" }, // You can choose to include or exclude this point
          { y: 8380, label: "2016" },
          { y: 10168, label: "2017" },
          { y: 12095, label: "2018" },
          { y: 13498, label: "2019" },
          { y: 11709, label: "2020" },
          { y: 17523, label: "2021" },
          { y: 12477, label: "2022" },
        ],
      },
      {
        type: "spline",
        name: "Expense",
        showInLegend: true,
        lineColor: "Red", // Customize line color here
        dataPoints: [
          { y: 3706, label: "2007" },
          { y: 4330, label: "2008" },
          { y: 4908, label: "2009" },
          { y: 4672, label: "2010" },
          { y: 4757, label: "2011" },
          { y: 6772, label: "2012" },
          { y: 6294, label: "2013" },
          { y: 6349, label: "2014" },
          { y: 6349, label: "2015" }, 
          { y: 9121, label: "2016" },
          { y: 10188, label: "2017" },
          { y: 11411, label: "2018" },
          { y: 13542, label: "2019" },
          { y: 10435, label: "2020" },
          { y: 20329, label: "2021" },
          { y: 11108, label: "2022" },
        ],
      },
      {
        type: "spline",
        name: "Plantation Subsidy",
        showInLegend: true,
        lineColor: "Black", // Customize line color here
        dataPoints: [
          { y: 2213, label: "2007" },
          { y: 2589, label: "2008" },
          { y: 3231, label: "2009" },
          { y: 2939.3, label: "2010" },
          { y: 2795, label: "2011" },
          { y: 3314, label: "2012" },
          { y: 4240, label: "2013" },
          { y: 4233, label: "2014" },
          { y: 4233, label: "2015" }, // You can choose to include or exclude this point
          { y: 5165, label: "2016" },
          { y: 5485, label: "2017" },
          { y: 6444, label: "2018" },
          { y: 6374, label: "2019" },
          { y: 6157, label: "2020" },
          { y: 6155, label: "2021" },
          { y: 5167, label: "2022" },
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

export default LineChartJs;
