import { useState } from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const chartData = {
  '2024': [320, 600, 600, 710, 350, 850, 470, 290, 310, 470, 760, 400],
  '2025': [420, 500, 700, 810, 450, 750, 570, 390, 210, 370, 660, 500],
  '2026': [220, 400, 500, 610, 250, 950, 670, 190, 410, 270, 560, 300],
};

const chartConfig = (data) => ({
  type: 'bar',
  height: 240,
  series: [
    {
      name: 'Thovt',
      data: data,
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: 'true',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#FFE9A4'],
    plotOptions: {
      bar: {
        columnWidth: '40%',
        barHeight: '100%',
        borderRadius: 6,
        borderRadiusApplication: 'end',
        distributed: false,
      },
    },
    xaxis: {
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
          lineHeight: '1px',
        },
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      min: 0,
      max: 1000,
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
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.6, // Default opacity
      type: 'solid',
      colors: ['#FFE9A4'],
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return `Thovt Currency: ${val} USD`;
        },
        title: {
          formatter: () => 'USD Dollar',
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
        fill: {
          color: '#FFE9A4', // Grey color on hover
        },
      },
    },
  },
});

export default function BarChart() {
  const [selectedYear, setSelectedYear] = useState('2024');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      <h1 className="font-inter font-semibold text-[20px] text-white leading-5">
        Profit
      </h1>
      <Card className="border-[#444444] w-full bg-gradient-to-b  from-[#1F1F1F] to-[#0A0A0A]">
        <CardHeader
          floated={true}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none justify-between md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg text-white">
            <h1 className="font-inter font-bold text-[18px] text-white ml-[10px] leading-5">
              Holder's Profit
            </h1>
          </div>
          <div>
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="bg-[#323D4E] opacity-80 font-nunitoSans font-semibold text-[10px] justify-center leading-[10px] text-white px-3 py-[6px] rounded-lg"
            >
              <option
                value="2024"
                className="border-2 font-nunitoSans font-semibold text-[10px] text-white justify-center leading-[10px] "
              >
                2024
              </option>
              <option
                value="2025"
                className="border-2 font-nunitoSans font-semibold text-[10px] text-white justify-center leading-[10px]  "
              >
                2025
              </option>
              {/* <option
              value="2026"
              className="border-2 font-nunitoSans font-semibold text-[10px] text-white justify-center leading-[10px] "
            >
            2026
            </option> */}
            </select>
          </div>
        </CardHeader>
        <CardBody className="px-2 pt-0 ">
          <Chart {...chartConfig(chartData[selectedYear])} />
        </CardBody>
      </Card>
    </>
  );
}
