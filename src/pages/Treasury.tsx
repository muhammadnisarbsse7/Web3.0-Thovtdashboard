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
      <Breadcrumb pageName="Summary" />
      <div className="flex space-x-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            heading1={card.heading1}
            heading2={card.heading2}
            icon={card.icon}
          />
        ))}
      </div>
      <div className="flex mt-[46px] gap-[30px]">
        <div>
          <Breadcrumb pageName="Treasury Growth" />
          <ChartThree />
        </div>
        <div className="flex flex-col">
          <div className="flex ">
            <Breadcrumb pageName="Treasury Portfolio" />
            <div className="ml-[60px]">
              <p className="font-inter font-semibold text-[14px] leading-[14px] text-white">
                List
              </p>
              <div className="h-[2px] w-[19px] bg-[#FFE9A4] mt-[10px]"></div>
            </div>
            <div className="font-inter font-normal text-[#9A9EB1] text-[14px] leading-[14px] ml-[33px]">
              Chart
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex flex-row">
              <RealEstateIcon />
              <div className="flex flex-col justify-between ml-[10px]">
                <h1 className="font-inter font-semibold text-[14px] leading-5 text-white">
                  Real Estate
                </h1>
                <h1 className="font-inter font-normal text-[14px] leading-[16px] text-[#A6B2CD]">
                  BTC
                </h1>
              </div>
              <div className="flex flex-col justify-between ml-[100px]">
                <h1 className="font-inter font-semibold text-white text-[14px] leading-5">
                  $6,000,000
                </h1>
                <h1 className="font-inter font-normal text-[14px] text-[#A6B2CD] leading-4">
                  BTC 224,11
                </h1>
              </div>
            </div>
            <div className="flex flex-row">
              <RealEstateIcon />
              <div className="flex flex-col justify-between ml-[10px]">
                <h1 className="font-inter font-semibold text-[14px] leading-5 text-white">
                  Real Estate
                </h1>
                <h1 className="font-inter font-normal text-[14px] leading-[16px] text-[#A6B2CD]">
                  BTC
                </h1>
              </div>
              <div className="flex flex-col justify-between ml-[100px]">
                <h1 className="font-inter font-semibold text-white text-[14px] leading-5">
                  $6,000,000
                </h1>
                <h1 className="font-inter font-normal text-[14px] text-[#A6B2CD] leading-4">
                  BTC 224,11
                </h1>
              </div>
            </div>
            <div className="flex flex-row">
              <RealEstateIcon />
              <div className="flex flex-col justify-between ml-[10px]">
                <h1 className="font-inter font-semibold text-[14px] leading-5 text-white">
                  Real Estate
                </h1>
                <h1 className="font-inter font-normal text-[14px] leading-[16px] text-[#A6B2CD]">
                  BTC
                </h1>
              </div>
              <div className="flex flex-col justify-between ml-[100px]">
                <h1 className="font-inter font-semibold text-white text-[14px] leading-5">
                  $6,000,000
                </h1>
                <h1 className="font-inter font-normal text-[14px] text-[#A6B2CD] leading-4">
                  BTC 224,11
                </h1>
              </div>
            </div>
            <div className="flex flex-row">
              <RealEstateIcon />
              <div className="flex flex-col justify-between ml-[10px]">
                <h1 className="font-inter font-semibold text-[14px] leading-5 text-white">
                  Real Estate
                </h1>
                <h1 className="font-inter font-normal text-[14px] leading-[16px] text-[#A6B2CD]">
                  BTC
                </h1>
              </div>
              <div className="flex flex-col justify-between ml-[100px]">
                <h1 className="font-inter font-semibold text-white text-[14px] leading-5">
                  $6,000,000
                </h1>
                <h1 className="font-inter font-normal text-[14px] text-[#A6B2CD] leading-4">
                  BTC 224,11
                </h1>
              </div>
            </div>
            <div className="h-[2px] w-[336px] bg-[#F5FAFF] mt-[19px]"></div>
            <div className="flex flex-row justify-between">
              <h1 className="font-inter font-normal text-[14px] leading-5 text-white">
                Total Balance
              </h1>
              <h1 className="font-inter font-semibold text-[14px] leading-5 text-white">
                USD 10.166.062
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="flex flex-col">
          <Breadcrumb pageName="Treasury Balance by Assets" />
          <div className="w-[680px] h-[218px] bg-gradient-to-b from-[#3636361F] to-[#D9D9D91F] rounded-[12px] border border-[#3D3D3D]">
            <div className="flex m-[25px] justify-between">
              <DonutChartIcon />
              <div className=" mt-[33px] space-y-[11px]">
                <div className="flex flex-row items-center justify-center  gap-[10px]">
                  <div className="h-[14px] w-[14px] bg-[#FFE9A4] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-[14px] leading-[21px] text-[#ECF0F1]">
                    Real Estate
                  </h1>
                </div>
                <div className="flex flex-row items-center  gap-[10px]">
                  <div className="h-[14px] w-[14px] bg-[#000000] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-[14px] leading-[21px] text-[#ECF0F1]">
                    Startups
                  </h1>
                </div>
                <div className="flex flex-row items-center  gap-[10px]">
                  <div className="h-[14px] w-[14px] bg-[#838483] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-[14px] leading-[21px] text-[#ECF0F1]">
                    Businesses
                  </h1>
                </div>
                <div className="flex flex-row items-center ] gap-[10px]">
                  <div className="h-[14px] w-[14px] bg-[#FFFFFF] rounded-[4px]"></div>
                  <h1 className="font-poppins font-normal text-[14px] leading-[21px] text-[#ECF0F1]">
                    Crypto
                  </h1>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          {/* <DonutChart /> */}
        </div>

        <div className="flex flex-col ml-[9.05px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-inter font-semibold text-[20px] leading-[24.2px] text-white">
              Last Aquired Asset
            </h1>
            <div className="flex gap-[16px]">
              <IoIosArrowDropleftCircle className="h-[31.11px] w-[31.11px] text-white" />
              <IoIosArrowDroprightCircle className="h-[31.11px] w-[31.11px] text-[#FFE9A4]" />
            </div>
          </div>
          <div
            className="w-[393.94px] h-[241.11px] mt-[12px] bg-cover bg-center rounded-[7.78px]  flex flex-col justify-between"
            style={{ backgroundImage: `url(${benarHouse})` }}
          >
            <div className="flex flex-col mt-[17.83px] ml-[13.95px]">
              <div className="flex">
                <div className="flex h-[23.72px] w-[91.22px] rounded-[97.22px] bg-[#FFFFFF70] justify-center items-center ">
                  <p className="font-inter font-bold text-[11.67px] leading-[14.12px] text-white">
                    Real Estate
                  </p>
                </div>
                <div className="flex justify-center items-center h-[23.72px] w-[78.22px] rounded-[97.22px] bg-[#FFFFFF70]">
                  <p className="font-inter font-bold text-[11.67px] leading-[14.12px] text-white">
                    Featured
                  </p>
                </div>
              </div>
              <div className="mt-[85.83px]">
                <p className="font-inter font-bold text-[24px] leading-[36px] text-white">
                  Pualing Benar House
                </p>
              </div>
              <div>
                <p className="font-inter font-medium text-[12px] leading-[14.52px] text-white">
                  East utjo Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </div>
              <div className="flex mt-[17px] gap-[6.88px]">
                <FaLocationDot className="w-[18.34px] h-[18.34px] text-white" />
                <p className="font-inter font-medium text-[13.76px] leading-[16.65px] text-white">
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
