import React from 'react';
import thovtBalance from './../images/cards/thovt-balance.png';
import { PopupIcon } from '../Svg/PopuoIcon';

const ThovtBalaceCard: React.FC = () => {
  return (
    <main className="px- sm:px- lg:px-">
      <h1 className="font-inter font-semibold text-[5vw] sm:text-[4vw] lg:text-[20px] text-white leading-[1.2em]">
        Balance
      </h1>
      <div
        className="w-full h-[40vw] sm:h-[30vw] lg:h-[234px]  bg-cover bg-center rounded-lg pt-[8vw] sm:pt-[6vw] lg:pt-8 px-[8vw] sm:px-[6vw] lg:px-11 flex flex-col mt-[4vw] lg:mt-[16px]"
        style={{ backgroundImage: `url(${thovtBalance})` }}
      >
        <div>
          <p className="font-raleway font-semibold text-[5vw] sm:text-[4vw] lg:text-[20px] leading-[1.2em] text-[#090909]">
            Balance:
          </p>
        </div>
        <div className=" space-x-2 mt-[2vw] lg:mt-3">
          <p className="font-mulish font-extrabold text-[10vw] sm:text-[8vw] lg:text-[50px] leading-[1em] text-[#090909]">
            101,934
            <span className="font-mulish font-extrabold text-[3vw] sm:text-[2.5vw] lg:text-[16px] leading-[1.2em] text-[#090909]">
              $THOVT
            </span>
          </p>
        </div>

        <div className="flex mt-[6vw] lg:mt-9 items-center justify-between mb-[6vw] lg:mb-8">
          <h3 className="font-raleway font-semibold text-[3vw] sm:text-[2.5vw] lg:text-[12px] leading-[1.5em] text-[#090909]">
            Than last month
          </h3>
          <div className="flex items-center gap-[2.5vw] sm:gap-3">
            <span className="font-mulish font-semibold text-[4vw] sm:text-[3vw] lg:text-[16px] text-[#090909] leading-6">
              +14.6%
            </span>
            <PopupIcon />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-[3vw] sm:gap-4 mt-[4vw] lg:mt-[14px]">
          <div className="h-[3vw] sm:h-[2.5vw] lg:h-[12px] w-[3vw] sm:w-[2.5vw] lg:w-[12px] bg-[#FFE9A4] rounded-full"></div>
          <div className="h-[3vw] sm:h-[2.5vw] lg:h-[12px] w-[3vw] sm:w-[2.5vw] lg:w-[12px] bg-[#FFE9A4] rounded-full"></div>
          <div className="h-[3vw] sm:h-[2.5vw] lg:h-[12px] w-[3vw] sm:w-[2.5vw] lg:w-[12px] bg-[#FFE9A4] rounded-full"></div>
        </div>
        <div className="py-[2vw] sm:py-2 px-[4vw] sm:px-[3vw] lg:px-[13px] bg-[#FFE9A4] rounded-[10px] flex justify-center items-center mt-[3vw] lg:mt-[10px]">
          <p className="flex font-inter font-semibold text-[3.5vw] sm:text-[3vw] lg:text-[14px] leading-[1.5em] text-[#272727] justify-center items-center">
            Top up Balance
          </p>
        </div>
      </div>
    </main>
  );
};

export default ThovtBalaceCard;
