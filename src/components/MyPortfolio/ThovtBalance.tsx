import React from 'react';
import thovtBalance from '../../images/cards/thovt-balance.png';
import { PopupIcon } from '../../Svg/PopuoIcon';

const CarouselCard: React.FC = () => {
  return (
    <div
      className="w-full h-48 sm:h-56 md:h-64 lg:h-48 bg-cover bg-center rounded-2xl p-4 md:p-6 lg:p-5 flex flex-col justify-between"
      style={{ backgroundImage: `url(${thovtBalance})` }}
    >
      <div className="">
        <div>
          <p className="font-raleway font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[14px] leading-[16px] md:leading-[20px] text-[#090909]">
            Balance:
          </p>
        </div>
        <div className="mt-2">
          <p className="font-mulish font-extrabold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[32px] leading-[34px] md:leading-[45px] text-[#090909] ">
            101,934{' '}
            <span className="font-mulish font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[18px] text-[#090909]">
              $THOVT
            </span>
          </p>
        </div>
        <div>
          <p className="font-mulish font-extrabold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[20px] leading-[20px] md:leading-[26px] text-[#090909]">
            1,248.80{' '}
            <span className="font-mulish font-extrabold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[18px] ">
              USD
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h3 className="font-raleway font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[14px] md:leading-[18px] text-[#090909]">
            Than last month
          </h3>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mulish font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#090909] leading-[20px]">
              +14.6%
            </span>
            <PopupIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
