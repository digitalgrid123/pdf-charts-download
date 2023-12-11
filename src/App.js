import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import BarCharts from "./components/chat1";
import Chart from "./components/chart3";

function App() {
  const [selectedCharts, setSelectedCharts] = useState({
    chart1: false,
    chart2: false,
    chart3: false,
  });

  const downloadRef = useRef(null);

  const toggleChartSelection = (chart) => {
    setSelectedCharts((prevSelectedCharts) => ({
      ...prevSelectedCharts,
      [chart]: !prevSelectedCharts[chart],
    }));
  };

  const handleDownloadClick = async () => {
    const chartsToDownload = Object.entries(selectedCharts).filter(
      ([, isSelected]) => isSelected
    );

    if (chartsToDownload.length === 0) {
      // No charts selected, handle accordingly (show an alert or something)
      return;
    }

    const pdf = new jsPDF();

    for (const [chartKey, isSelected] of chartsToDownload) {
      const chartDiv = document.getElementById(`chart-${chartKey}`);

      if (!chartDiv) {
        // Handle case where the chart div is not found
        continue;
      }

      // Increase the scale for better resolution
      const scale = 2;

      const canvas = await html2canvas(chartDiv, { scale });
      const imageData = canvas.toDataURL("image/png");

      pdf.addImage(imageData, "PNG", 10, 10, 180, 100);
      pdf.addPage();
    }

    pdf.save("charts.pdf");

    // Update state to uncheck all checkboxes
    setSelectedCharts({
      chart1: false,
      chart2: false,
      chart3: false,
    });

    // Hide the download button
    downloadRef.current.style.display = "none";
  };

  return (
    <div className="App">
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCharts.chart1}
            onChange={() => toggleChartSelection("chart1")}
          />
          Chart 1
        </label>
        <div id="chart-chart1" style={{ width: "400px", height: "400px" }}>
          <BarCharts />
        </div>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCharts.chart2}
            onChange={() => toggleChartSelection("chart2")}
          />
          Chart 2
        </label>
        <div id="chart-chart2" style={{ width: "400px", height: "400px" }}>
          <BarCharts />
        </div>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCharts.chart3}
            onChange={() => toggleChartSelection("chart3")}
          />
          Chart 3
        </label>
        <div id="chart-chart3" style={{ width: "400px", height: "400px" }}>
          <Chart />
        </div>
      </div>
      {Object.values(selectedCharts).some((isSelected) => isSelected) && (
        <button ref={downloadRef} onClick={handleDownloadClick}>
          Download PDF
        </button>
      )}
    </div>
  );
}

export default App;
