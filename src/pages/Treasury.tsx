import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartThree from '../components/Charts/ChartThree';
import { HoldersIcon } from '../Svg/HoldersIcon';
import { MarketCapIcon } from '../Svg/MarketCapIcon';
import { TreasuryBalanceIcon } from '../Svg/TreasuryBalIcon';
import { DivideIcon } from '@heroicons/react/16/solid';
import { DividedIcon } from '../Svg/DividedIcon';
import { AprIcon } from '../Svg/AprIcon';
import { ThovtIcon } from '../Svg/ThovtIcon';
import { RealEstateIcon } from '../Svg/RealEstateIcon';
import { DonutChartIcon } from '../Svg/DonutChartIcon';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import benarHouse from '../images/cards/benar-house.png';
import { FaLocationDot } from 'react-icons/fa6';
import { LeftArrowIcon } from '../Svg/LeftArrowIcon';
import { RightArrowIcon } from '../Svg/RightArrowIcon';

import ProfileCard from '../components/ProfileCard';
import DividentCards from '../components/DividentCards';

// Data array containing heading values for each card
const cardData = [
  { heading1: 'Holders', heading2: '26154', icon: <HoldersIcon /> },
  { heading1: 'Market Cap', heading2: '$50.186.749', icon: <MarketCapIcon /> },
  {
    heading1: 'Treasury bal.',
    heading2: '$10.166.062',
    icon: <TreasuryBalanceIcon />,
  },
  { heading1: 'Dividends', heading2: '$2.748.150', icon: <DividedIcon /> },
  { heading1: 'APR', heading2: '70% APR', icon: <AprIcon /> },
  { heading1: '$THOVT', heading2: '$1.00', icon: <ThovtIcon /> },
];

// Card component
const Card = ({ heading1, heading2, icon }) => {
  return (
    <div className="w-[155px] h-[84px] bg-gradient-to-b from-[#262626] to-[#25252500] p-2 flex flex-col justify-between border border-[#3D3D3D] rounded-lg shadow">
      <div className="flex justify-between items-center mt-[8px] ">
        <div className="flex flex-col space-y-2">
          <h3 className="font-inter font-medium text-[14px] leading-[14px] text-[#FFFFFF]">
            {heading1}
          </h3>
          <h4 className="font-inter font-medium text-[12px] leading-3 text-[#FFFFFF]">
            {heading2}
          </h4>
        </div>
        {icon}
      </div>
      <div className="font-poppins font-normal text-[10px] leading-[15px] text-[#45E3B8] ">
        2.52%(+$324.82)
      </div>
    </div>
  );
};

// Main component rendering cards using map

const CardRow = () => {
  return (
    <div>
      <h1 className="font-inter font-semibold text-white text-[20px] leading-[28px] mb-6 ">
        Summary
      </h1>
      {/* <Breadcrumb pageName="Summary" /> */}
      <div className="flex  flex-wrap gap-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            heading1={card.heading1}
            heading2={card.heading2}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 gap-6 lg:gap-10 border-4 border-green-950">
        <div className="flex-1 border">
          <Breadcrumb pageName="Treasury Growth" />
          <ChartThree />
        </div>

        <div className="flex-1 flex flex-col space-y-5 border-2 border-yellow-500">
          <div className="flex items-center justify-between lg:justify-start lg:space-x-8 border">
            {/* <Breadcrumb pageName="Treasury Portfolio" /> */}
            <h1 className="font inter font-semibold text-[20px] text-white leading-5 ">
              Treasury Portfolio
            </h1>
            <div className="ml-4 lg:ml-12">
              <p className="font-inter font-semibold text-sm lg:text-base text-white">
                List
              </p>
              <div className="h-[2px] w-5 bg-[#FFE9A4] mt-2"></div>
            </div>
            <div className="font-inter font-normal text-[#9A9EB1] text-sm lg:text-base">
              Chart
            </div>
          </div>
          <div className="space-y-4 border">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-row items-center">
                <RealEstateIcon />
                <div className="flex flex-col justify-between ml-2 lg:ml-4">
                  <h1 className="font-inter font-semibold text-sm lg:text-base text-white">
                    Real Estate
                  </h1>
                  <h1 className="font-inter font-normal text-sm lg:text-base text-[#A6B2CD]">
                    BTC
                  </h1>
                </div>
                <div className="flex flex-col justify-between ml-auto lg:ml-24">
                  <h1 className="font-inter font-semibold text-white text-sm lg:text-base">
                    $6,000,000
                  </h1>
                  <h1 className="font-inter font-normal text-sm lg:text-base text-[#A6B2CD]">
                    BTC 224,11
                  </h1>
                </div>
              </div>
            ))}
            <div className="h-[2px] w-full bg-[#F5FAFF] mt-4"></div>
            <div className="flex flex-row justify-between ">
              <h1 className="font-inter font-normal text-sm lg:text-base text-white">
                Total Balance
              </h1>
              <h1 className="font-inter font-semibold text-sm lg:text-base text-white">
                USD 10,166,062
              </h1>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 lg:mt-[30px] lg:justify-between  border-2 border-green-950">
        <div className="flex flex-col border-2 border-red-950  ">
          {/* <Breadcrumb pageName="Treasury Balance by Assets" /> */}
          <h1 className="font-inter font-semibold text-[20px] text-white leading-5 ">
            Treasury Balance by Assets
          </h1>
          <div className="w-full lg:max-w-[100%] h-auto lg:h-[24vh] bg-gradient-to-b from-[#3636361F] to-[#D9D9D91F] rounded-[12px] border border-[#3D3D3D]">
            <div className="flex flex-col sm:flex-row border-2 p-6 justify-between">
              <DonutChartIcon />
              <div className="mt-6 lg:mt-[2vh] space-y-3 lg:space-y-[1vh]">
                <div className="flex items-center gap-2.5 lg:gap-[1vw]">
                  <div className="h-3.5 w-3.5 lg:h-[2vh] lg:w-[2vh] bg-[#FFE9A4] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-sm lg:text-[1vw] leading-[2vh] text-[#ECF0F1]">
                    Real Estate
                  </h1>
                </div>
                <div className="flex items-center gap-2.5 lg:gap-[1vw]">
                  <div className="h-3.5 w-3.5 lg:h-[2vh] lg:w-[2vh] bg-[#000000] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-sm lg:text-[1vw] leading-[2vh] text-[#ECF0F1]">
                    Startups
                  </h1>
                </div>
                <div className="flex items-center gap-2.5 lg:gap-[1vw]">
                  <div className="h-3.5 w-3.5 lg:h-[2vh] lg:w-[2vh] bg-[#838483] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-sm lg:text-[1vw] leading-[2vh] text-[#ECF0F1]">
                    Businesses
                  </h1>
                </div>
                <div className="flex items-center gap-2.5 lg:gap-[1vw]">
                  <div className="h-3.5 w-3.5 lg:h-[2vh] lg:w-[2vh] bg-[#FFFFFF] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-sm lg:text-[1vw] leading-[2vh] text-[#ECF0F1]">
                    Crypto
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 lg:mt-0 lg:ml-[9.05px] border-2 border-yellow-400">
          <div className="flex justify-between items-center">
            <h1 className="font-inter font-semibold text-lg lg:text-[20px] leading-[24.2px] text-white">
              Last Acquired Asset
            </h1>
            <div className="flex gap-4 lg:gap-[16px]">
              <IoIosArrowDropleftCircle className="h-8 w-8 lg:h-[31.11px] lg:w-[31.11px] text-white" />
              <IoIosArrowDroprightCircle className="h-8 w-8 lg:h-[31.11px] lg:w-[31.11px] text-[#FFE9A4]" />
            </div>
          </div>
          <div
            className="w-full lg:max-w-[393.94px] h-auto lg:h-[241.11px] mt-3 lg:mt-[12px] bg-cover bg-center rounded-lg lg:rounded-[7.78px] flex flex-col justify-between"
            style={{ backgroundImage: `url(${benarHouse})` }}
          >
            <div className="flex flex-col mt-4 lg:mt-[17.83px] ml-4 lg:ml-[13.95px]">
              <div className="flex space-x-2 lg:space-x-4">
                <div className="flex h-6 lg:h-[23.72px] w-[50%] lg:w-[91.22px] rounded-full bg-[#FFFFFF70] justify-center items-center">
                  <p className="font-inter font-bold text-xs lg:text-[11.67px] leading-[14.12px] text-white">
                    Real Estate
                  </p>
                </div>
                <div className="flex justify-center items-center h-6 lg:h-[23.72px] w-[50%] lg:w-[78.22px] rounded-full bg-[#FFFFFF70]">
                  <p className="font-inter font-bold text-xs lg:text-[11.67px] leading-[14.12px] text-white">
                    Featured
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:mt-[85.83px]">
                <p className="font-inter font-bold text-lg lg:text-[24px] leading-[36px] text-white">
                  Pualing Benar House
                </p>
              </div>
              <div>
                <p className="font-inter font-medium text-xs lg:text-[12px] leading-[14.52px] text-white">
                  East utjo Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="flex mt-4 lg:mt-[17px] gap-2 lg:gap-[6.88px]">
                <FaLocationDot className="w-4 lg:w-[18.34px] h-4 lg:h-[18.34px] text-white" />
                <p className="font-inter font-medium text-sm lg:text-[13.76px] leading-[16.65px] text-white">
                  East utjo Mabar, East Java
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[29.89px] ">
        <h1 className="font-inter font-semibold text-[20px] leading-[24.2px] text-white">
          Portfolio
        </h1>
        <div className="mt-[26.89px]">
          <ProfileCard />
        </div>
      </div>

      <div className=" mt-[29.89px] ">
        <div className="flex justify-between">
          <h1 className="font-inter font-semibold text-[20px] leading-[24.2px] text-white">
            Last Dividends
          </h1>
          <div className="flex gap-[16px]">
            <IoIosArrowDropleftCircle className="h-[31.11px] w-[31.11px] text-white" />
            <IoIosArrowDroprightCircle className="h-[31.11px] w-[31.11px] text-[#FFE9A4]" />
          </div>
        </div>

        <div className="flex mt-[27px">
          <DividentCards />
        </div>
      </div>
    </div>
  );
};

export default CardRow;
