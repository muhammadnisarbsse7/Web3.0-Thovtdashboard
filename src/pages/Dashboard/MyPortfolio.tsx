import React, { useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartThree from '../../components/Charts/ChartThree';
import PortfolioChart from '../../components/Charts/PortfolioChart';
import ChartTwo from '../../components/Charts/ChartTwo';
import CarouselCard from '../../components/MyPortfolio/ThovtBalance';
import { MessageIcon } from '../../Svg/MessageIcon';
import { DividedIcon } from '../../Svg/DividedIcon';
import { CalenderIcon } from '../../Svg/CalendeIcon';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ECommerce: React.FC = () => {
  const [activeButton, setActiveButton] = useState('Thovt');
  const [activeTab, setActiveTab] = useState('Dividends');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Personal dashboard card  */}
        <div className="flex flex-col w-full lg:w-2/3">
          <Breadcrumb pageName="Personal Dashboard" />

          <div className="flex flex-wrap gap-4 justify-between w-full">
            <CardDataStats
              title="Total Dividends"
              total="$156.97"
              rate="0.43%"
              levelUp
            >
              <MessageIcon />
            </CardDataStats>
            <CardDataStats
              title="Last Dividend"
              total="$15.97"
              rate="4.35%"
              levelUp
            >
              <DividedIcon />
            </CardDataStats>
            <CardDataStats title="APR" total="20%" rate="4.35%" levelUp>
              <CalenderIcon />
            </CardDataStats>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <div className="flex justify-between items-center w-full">
              <h1 className="font-inter font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-5 text-white">
                Token Balance
              </h1>
              <div className="flex rounded-[9px] p-1 bg-[#FFE9A4] gap-1">
                <button
                  onClick={() => handleButtonClick('Thovt')}
                  className={`px-4 py-1 sm:px-10 sm:py-2 lg:px-10 lg:py-2 rounded-md ${
                    activeButton === 'Thovt'
                      ? 'bg-[#3D3D3D] font-inter font-medium text-sm sm:text-base md:text-lg text-white'
                      : 'font-inter font-bold text-sm sm:text-base md:text-lg text-[#090909]'
                  }`}
                >
                  $THOVT
                </button>
                <button
                  onClick={() => handleButtonClick('USD')}
                  className={`px-6 py-1 sm:px-16 sm:py-2 lg:px-16 lg:py-2 rounded-md ${
                    activeButton === 'USD'
                      ? 'bg-[#3D3D3D] font-inter font-medium text-sm sm:text-base md:text-lg text-white'
                      : 'font-inter font-bold text-sm sm:text-base md:text-lg text-[#090909]'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            <PortfolioChart />
            <ChartTwo />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/3">
          {/* Balance section */}
          <div className="mb-6">
            <Breadcrumb pageName="Balance" />
            <CarouselCard />
            <div className="flex justify-center gap-2 mt-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 bg-[#FFE9A4] rounded-full"
                  ></div>
                ))}
            </div>
            <div className="mt-4 w-full bg-[#FFE9A4] rounded-md flex justify-center items-center py-3">
              <p className="text-[#272727] font-semibold">Top up Balance</p>
            </div>
          </div>

          {/* Transaction Tabs */}
          <div>
            <Breadcrumb pageName="Transactions" />
            <div className="flex rounded-[9px] h-[42.58px] w-[281px] bg-[#FFE9A4]  border-[#ffffff]  gap-[1px]">
              <button
                onClick={() => handleTabClick('Dividends')}
                className={`px-10 py-1 m-[2px] rounded-md ${
                  activeTab === 'Dividends'
                    ? 'bg-[#3D3D3D] font-inter font-medium text-[14px] leading-[17px]  text-white'
                    : ' font-inter font-bold text-[14px] leading-[16.94px] text-[#090909]'
                }`}
              >
                Dividends
              </button>
              <button
                onClick={() => handleTabClick('Thovt')}
                className={`px-[34px] py-2 m-[2px] rounded-md ${
                  activeTab === 'Thovt'
                    ? 'bg-[#3D3D3D] font-inter font-medium text-[14px] leading-[16.94px] text-white'
                    : 'font-inter font-medium text-[14px] leading-[16.94px] text-[#090909]'
                }`}
              >
                $THOVT
              </button>
            </div>
          </div>

          {/* Transactions List */}
          <div className="mt-6 space-y-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-[35px] w-2 bg-[#00C586] rounded-full"></div>
                  <div className="ml-4 flex flex-col">
                    <h1 className="text-white font-bold">107,12 $THOVT</h1>
                    <h1 className="text-[#00C586]">$14.97</h1>
                  </div>
                  <div className="ml-auto text-[#959595]">12 Jan, 2023</div>
                  <MdKeyboardArrowRight className="ml-2 text-[#B5B5B5]" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
