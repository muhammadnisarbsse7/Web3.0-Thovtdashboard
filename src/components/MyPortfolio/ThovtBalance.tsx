// src/components/CarouselCard.tsx

import React from 'react';

// Replace 'bgImage' with your actual image path
import thovtBalance from '../../images/cards/thovt-balance.png';
import { PopupIcon } from '../../Svg/PopuoIcon';

// Define the functional component using TypeScript
const CarouselCard: React.FC = () => {
  return (
    <div
      className="w-72 h-48 border-2 bg-cover bg-center rounded-lg p-5 flex flex-col justify-between"
      style={{ backgroundImage: `url(${thovtBalance})` }}
    >
      <div>
        <p className="font-raleway font-semibold text-[14px] leading-[16.44px] text-[#090909]">
          Balance:
        </p>
      </div>
      <div>
        <p className="font-mulish font-extrabold text-[36px] leading-[45.18px] text-[#090909] ">
          101,934{' '}
          <span className="font-mulish font-extrabold text-[13px] leading-[16.32px] text-[#090909]">
            $THOVT
          </span>
        </p>
      </div>
      <div>
        <p className="font-mulish font-extrabold text-[20px] leading-[25.1px] text-[#090909]">
          1,248.80{' '}
          <span className="font-mulish font-extrabold text-[13px] leading-[16.32px] ">
            USD
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-raleway font-semibold text-[12px] leading-[18px] text-[#090909]">
          Than last month
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-mulish font-semibold text-[16px] text-[#090909] leading-6">
            +14.6%
          </span>
          <PopupIcon />
          {/* <span className="ml-2">↑</span>  */}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
