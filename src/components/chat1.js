import React from "react";
import Chart from "react-apexcharts";

const data1 = {
  labels: ["A", "B", "C", "D", "E"],
  series: [
    {
      name: "Chart 1",
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const data2 = {
  labels: ["F", "G", "H", "I", "J"],
  series: [
    {
      name: "Chart 2",
      data: [45, 25, 70, 50, 80],
    },
  ],
};

const data3 = {
  labels: ["K", "L", "M", "N", "O"],
  series: [
    {
      name: "Chart 3",
      data: [30, 50, 75, 40, 60],
    },
  ],
};

const options = {
  xaxis: {
    type: "category", // Use "category" type for labels
  },
};

const BarCharts = () => {
  return (
    <div>
      <div>
        <h2>Chart 1</h2>
        <Chart options={options} series={data1.series} type="bar" />
      </div>
    </div>
  );
};

export default BarCharts;
