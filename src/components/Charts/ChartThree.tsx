import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const chartData = [11111110, 1200000, 1000000, 5000000, 20000000];

const chartConfig = (data, chartHeight) => ({
  type: 'area',
  height: chartHeight, // Set height dynamically
  width: '100%', // Ensure the chart width is responsive
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
      // Responsive options
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 200, // Adjust height for small screens
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 160, // Adjust height for extra small screens
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
  const [chartHeight, setChartHeight] = useState(240);

  useEffect(() => {
    const updateChartHeight = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480) {
        setChartHeight(160);
      } else if (windowWidth < 768) {
        setChartHeight(200);
      } else {
        setChartHeight(240);
      }
    };

    updateChartHeight();
    window.addEventListener('resize', updateChartHeight);

    return () => {
      window.removeEventListener('resize', updateChartHeight);
    };
  }, []);

  return (
    <Card className="border-[#444444] w-full bg-gradient-to-t from-[#1F1F1F] to-[#0A0A0A]">
      <CardHeader className="flex flex-col gap-4 justify-between md:flex-row md:items-center rounded-none">
        <div className="text-white flex justify-between items-center w-full bg-[#0A0A0A]">
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
        <h2 className="text-white text-[24px] mb-4">USD 10,166,062</h2>
        <Chart {...chartConfig(chartData, chartHeight)} />
      </CardBody>
    </Card>
  );
}
