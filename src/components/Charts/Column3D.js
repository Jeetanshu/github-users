import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisName: "Stars",
        yAxisNameFontSize: "16px",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
