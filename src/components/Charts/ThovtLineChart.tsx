// File: SingleLineChart.js
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

// SingleLineChart Component
const ThovtLineChart = () => {
  useEffect(() => {
    // Build the chart
    const buildChart = () => {
      const options = {
        chart: {
          height: 250,
          type: 'line',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        series: [
          {
            name: 'USD',
            // color: '#363636',
            data: [1000, 900, 600, 700, 670, 250, 830, 720, 680, 200, 750, 0],
          },
        ],
        colors: ['#FFE9A4'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
          width: 2,
        },
        grid: {
          strokeDashArray: 5,
          borderColor: '#e5e7eb',
          padding: {
            top: -20,
            right: 0,
          },
        },
        xaxis: {
          type: '',
          categories: Array.from({ length: 12 }, (_, i) => i),
          tickAmount: 10,
          labels: {
            style: {
              colors: '#9ca3af',
              fontSize: '13px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          min: 0,
          max: 1000,
          tickAmount: 4,
          labels: {
            align: 'left',
            style: {
              colors: '#FFE9A4',
              fontSize: '12px',
              fontFamily: 'Inter, ui-sans-serif',
              fontWeight: 400,
            },
            formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
      };

      const chart = new ApexCharts(document.querySelector('#chart'), options);
      chart.render();

      return () => {
        chart.destroy();
      };
    };

    const cleanup = buildChart();

    return cleanup;
  }, []);

  return (
    <div className=" relative">
      <div className="flex justify-between mt-6 ">
        <div className="font-inter font-semibold text-white text-5 leading-5 ">
          Volume
        </div>
        <div className="flex gap-3">
          <div className="space-y-[10px]">
            <h1 className="font-inter font-semibold text-white text-[14px] leading-[14px]">
              List
            </h1>
            <p className="h-[2px] w-[19px] bg-[#FFE9A4] rounded-full"></p>
          </div>
          <h1 className="font-inter font-normal text-[#9A9EB1] text-[14px] leading-[14px]">
            Chart
          </h1>
        </div>
      </div>
      <div className="w-full h-[441px] mt-6 bg-gradient-to-b from-[#1F1F1F] to-[#0A0A0A] shadow-md rounded-2xl border border-[#FFFFFF1A] relative">
        <div className="absolute top-10 left-0 w-full flex justify-between pl-20 p-4 z-10">
          <h2 className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            Volume
          </h2>
          <div className="flex gap-4">
            <h1 className="font-inter font-normal text-[14px] text-white leading-[14px] ">
              1H
            </h1>
            <h1 className="font-inter font-normal text-[14px] text-white leading-[14px] ">
              24H
            </h1>
            <h1 className="font-inter font-normal text-[14px] text-white leading-[14px] ">
              1W
            </h1>
            <h1 className="font-inter font-normal text-[14px] text-[#FFE9A4] leading-[14px] ">
              1M
            </h1>
            <h1 className="font-inter font-normal text-[14px] text-white leading-[14px] ">
              1Y
            </h1>
            <h1 className="font-inter font-normal text-[14px] text-white leading-[14px] ">
              ALL
            </h1>
          </div>
        </div>

        <div className="absolute top-16 left-0 w-full text-start z-10 pl-20 p-4">
          <h3 className="text-lg font-semibold text-white">USD 10.166.062</h3>
        </div>

        <div id="chart" className="absolute inset-0 z-0 mt-36 pl-20 px-4"></div>
      </div>
    </div>
  );
};

export default ThovtLineChart;
