import { useState } from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const chartData = [11111110, 1200000, 1000000, 5000000, 20000000];

const chartConfig = (data) => ({
  type: 'area',
  height: 240,
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
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    grid: {
      show: false,
      borderColor: '#dddddd',
      strokeDashArray: 5,
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

  return (
    <main>
      <p className="font-inter font-bold text-[18px] text-white leading-[21.78px]">
        $THOVT Token Price
      </p>

      <Card className="border-[#444444] w-[649px] bg-gradient-to-t from-[#1F1F1F] to-[#0A0A0A] border-2 border-red-800 mt-5">
        <CardHeader className="flex flex-col gap-4  justify-between md:flex-row md:items-center border border-green-700 rounded-none ">
          <div className="text-white flex justify-between  items-center w-full bg-black">
            <h1 className="font-inter font-normal text-[14px]  leading-[14px] text-white">
              Current Value
            </h1>
            <div className="flex space-x-4 border-2 border-red-900">
              {['1H', '24H', '1W', '1M', '1Y', 'ALL'].map((range) => (
                <button
                  key={range}
                  className={`font-inter font-normal  text-white   text-[14px] leading-[14px] ${
                    selectedTimeRange === range
                      ? 'font-bold font-inter  text-[#edd078]'
                      : 'text-white '
                  }`}
                  onClick={() => setSelectedTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0 border-2">
          <h2 className="text-white text-[24px] mb-4">USD 10,166,062</h2>
          <Chart {...chartConfig(chartData)} />
        </CardBody>
      </Card>
    </main>
  );
}
