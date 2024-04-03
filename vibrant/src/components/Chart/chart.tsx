import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import './chart.css';
const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: "line",
        height: "100",
        zoom: {
          enabled: false,
        },
        color: '#000000',
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          name: "Total $",
          data: [2.3800, 40000, 450.000 ],
        },
      ],
      xaxis: {
        categories: ["Jan", "Feb", "Mar"],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy(); // Cleanup chart on unmount
  }, []);

  return (
    <>
    
      <div className="w-full h-[10vh] " ref={chartRef}></div>
    </>
  );
};

export default Chart;
