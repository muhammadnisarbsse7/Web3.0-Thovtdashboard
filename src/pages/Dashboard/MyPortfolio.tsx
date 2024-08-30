import React, { useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
// import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import CarouselCard from '../../components/MyPortfolio/ThovtBalance';
// import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne';
// import TableOne from '../../components/Tables/TableOne';
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
      <div className="flex flex-row   w-[1144px] gap-12">
        {/* Personal dashboard card  */}

        <div className="flex flex-col">
          <Breadcrumb pageName="Personal Dashboard" />

          <div className="flex flex-wrap gap-4 md:gap-4 w-full max-w-[689px] 2xl:gap-7.5">
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
            <CardDataStats
              title="Last Dividend"
              total="$15.97"
              rate="4.35%"
              levelUp
            >
              <CalenderIcon />
            </CardDataStats>
          </div>

          <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="flex justify-between w-[682px]">
              <h1 className="font-inter font-semibold text-[20px] leading-5 text-white">
                Token Balance
              </h1>
              <div className="flex rounded-[9px]  bg-[#FFE9A4]  gap-[1px]">
                <button
                  onClick={() => handleButtonClick('Thovt')}
                  className={`px-13 py-1 rounded-md ${
                    activeButton === 'Thovt'
                      ? 'bg-[#3D3D3D] font-inter font-medium text-[14px] leading-[17px]  text-white'
                      : ' font-inter font-bold text-[14px] leading-[17px] text-[#090909]'
                  }`}
                >
                  $THOVT
                </button>
                <button
                  onClick={() => handleButtonClick('USD')}
                  className={`px-16 py-2 rounded-md ${
                    activeButton === 'USD'
                      ? 'bg-[#3D3D3D] font-inter font-medium text-[14px] leading-[16.94px] text-white'
                      : 'font-inter font-bold text-[14px] leading-[16.94px] text-[#090909]'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
            <ChartThree />
            <ChartTwo />
          </div>
        </div>

        <div className="">
          {/* Balance  part*/}
          <div className="">
            <Breadcrumb pageName="Balance" />
            <CarouselCard />
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-[12px] w-[12px] bg-[#FFE9A4] rounded-full"></div>
              <div className="h-[12px] w-[12px] bg-[#FFE9A4] rounded-full"></div>
              <div className="h-[12px] w-[12px] bg-[#FFE9A4] rounded-full"></div>
            </div>
            <div className="h-[40px] w-[288px] bg-[#FFE9A4] rounded-[10px] flex justify-center items-center mt-[23px]">
              <p className="flex font-inter font-semibold text-[14px] leading-[24px] text-[#272727] justify-center items-center h-full w-full">
                Top up Balance
              </p>
            </div>
          </div>

          {/* Token Balance Toggle */}

          <div className="mt-[43px]">
            <Breadcrumb pageName="Transactions " />
          </div>

          <div>
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

          {/* Transaction */}
          <div className="flex flex-col mt-[22.42px] space-y-5 ">
            <div className="flex ">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97{' '}
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
            <div className="flex">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97{' '}
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
            <div className="flex">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97{' '}
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
            <div className="flex">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97{' '}
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
            <div className="flex">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97{' '}
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
            <div className="flex">
              <div className="h-[35px] w-[3.89px] bg-[#00C586] rounded-[3.89px]"></div>
              <div className="flex flex-col ml-[19.44px] justify-between">
                <h1 className="font-inter font-bold text-[14px] leading-[16.94px] text-white">
                  107,12 $THOVT
                </h1>
                <h1 className="font-inter font-medium  text-[11.67px] leading-[14.12px] text-[#00C586]">
                  $14.97
                </h1>
              </div>
              <div className="ml-[66.11px]">
                <h1 className="font-inter font-medium text-[11.67px] leading-[14.12px] text-[#959595]">
                  12 Jan, 2023
                </h1>
              </div>
              <MdKeyboardArrowRight className="text-[#B5B5B5] ml-[8.24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
