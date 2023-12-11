// Import necessary libraries
import React from "react";
import { Bar } from "react-chartjs-2";

// Sample data for the charts
const data1 = {
  labels: ["A", "B", "C", "D", "E"],
  datasets: [
    {
      label: "Chart 1",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const data2 = {
  labels: ["F", "G", "H", "I", "J"],
  datasets: [
    {
      label: "Chart 2",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [45, 25, 70, 50, 80],
    },
  ],
};

const data3 = {
  labels: ["K", "L", "M", "N", "O"],
  datasets: [
    {
      label: "Chart 3",
      backgroundColor: "rgba(255,206,86,0.2)",
      borderColor: "rgba(255,206,86,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,206,86,0.4)",
      hoverBorderColor: "rgba(255,206,86,1)",
      data: [30, 50, 75, 40, 60],
    },
  ],
};

// Create a functional component to render the charts
const BarCharts = () => {
  return (
    <div>
      <div>
        <h2>Chart 1</h2>
        <Bar data={data1} />
      </div>
      <div>
        <h2>Chart 2</h2>
        <Bar data={data2} />
      </div>
      <div>
        <h2>Chart 3</h2>
        <Bar data={data3} />
      </div>
    </div>
  );
};

export default BarCharts;
