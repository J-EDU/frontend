import React from 'react';
import ReactECharts from 'echarts-for-react';

const Page: React.FC = () => {
  const option = {
    title: {
      text: 'Category'
    },
    tooltip: {},
    legend: {
      data:['Data']
    },
    xAxis: {
      data: ['Students', 'Teachers']
    },
    yAxis: {},
    series: [{
      name: 'Data',
      type: 'bar',
      data: [50, 30,]
    }]
  };

  return <ReactECharts
    option={option}
     style={{height: '300px', width: '100%'}}
    opts={{ renderer: 'svg' }}
  />;
};

export default Page;
