import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const Pichart: React.FC = () => {
  const option = {
    title: {
      text: "Category Chart",
      subtext: "Category",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "Chart",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "Math" },
          { value: 310, name: "History" },
          { value: 234, name: "IT" },
          { value: 135, name: "Arabic" },
          { value: 1548, name: "English" },
          { value: 948, name: "French" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  function onChartReady(echarts) {
   //
  }
  function onChartLegendselectchanged(param, echarts) {
    //console.log(param, echarts);
  }

  return (
    <>
      <ReactECharts
        option={option}
        style={{height: '300px', width: '100%'}}
        onChartReady={onChartReady}
        onEvents={{
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
    </>
  );
};

export default Pichart;
