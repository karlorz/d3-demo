import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ data }) => {
  return (
    <div style={{ height: "400px" }}>
      <Plot data={data} />
    </div>
  );
};

export default BarChart;
