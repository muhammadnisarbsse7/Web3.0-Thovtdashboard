import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Chart from 'react-apexcharts';
import { Colors } from 'chart.js';

const chartData = [1111110, 11500000, 1000000, 15000000, 2000000];

const chartConfig = (data, chartHeight, chartWidth) => ({
  type: 'area',
  height: chartHeight,
  width: chartWidth,
  series: [
    {
      name: 'Value',
      data: data,
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 200,
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 160,
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#FFE9A4'],
    xaxis: {
      categories: ['27 Nov', '04 Dec', '11 Dec', '18 Dec', '25 Dec'],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 20000000,
      tickAmount: 4,
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: 'rgba(226, 241, 255, 0.2)',
      strokeDashArray: 6,
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.6,
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0.2,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return `Value: ${val} USD`;
        },
        title: {
          formatter: () => 'USD Dollar',
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
  },
});

export default function SplineAreaChart() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1M');
  const [chartHeight, setChartHeight] = useState(240);
  const [chartWidth, setChartWidth] = useState('100%');

  useEffect(() => {
    const updateChartSize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 480) {
        setChartHeight(160);
        setChartWidth('100%');
      } else if (windowWidth < 768) {
        setChartHeight(200);
        setChartWidth('100%');
      } else {
        setChartHeight(240);
        setChartWidth('100%');
      }
    };

    updateChartSize();
    window.addEventListener('resize', updateChartSize);

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <Card className=" w-full bg-gradient-to-b from-[#1F1F1F] to-[#0A0A0A]">
      <CardHeader className="flex flex-col gap-4 justify-between md:flex-row md:items-center rounded-none">
        <div className="text-white flex justify-between items-center w-full bg-[#1F1F1F] ">
          <h1 className="font-inter font-normal text-[14px] py-2 leading-[14px] text-white">
            Current Value
          </h1>
          <div className="flex space-x-4">
            {['1H', '24H', '1W', '1M', '1Y', 'ALL'].map((range) => (
              <button
                key={range}
                className={`font-inter font-normal text-white text-[14px] leading-[14px] ${
                  selectedTimeRange === range
                    ? 'font-bold text-[#edd078]'
                    : 'text-white'
                }`}
                onClick={() => setSelectedTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <h2 className="text-white text-[24px] ml-3 mb-4">USD 10,166,062</h2>
        <Chart {...chartConfig(chartData, chartHeight, chartWidth)} />
      </CardBody>
    </Card>
  );
}
