// import React from 'react';
import { LocationIcon } from '../Svg/TreasuryAssetSvg/LocationIcon';
import { KeyIcon } from '../Svg/TreasuryAssetSvg/KeyIcon';
import { ContactIcon } from '../Svg/TreasuryAssetSvg/ContactIcon';
import HouseOne from '../images/TreasuryAssetImg/House1.png';
import HouseTwo from '../images/TreasuryAssetImg/House2.png';
import HouseThree from '../images/TreasuryAssetImg/House3.png';
import HouseFour from '../images/TreasuryAssetImg/House4.png';
import HouseFive from '../images/TreasuryAssetImg/House5.png';

const TreasuryAsset = () => {
  return (
    <div className="grid-row flex flex-col  sm:grid sm:grid-cols-12 sm:gap-3">
      <div className="grid sm:col-span-8 bg-[#151517] h-full rounded-3xl">
        <div className="flex flex-col border mt-20 pl-4 md:pl-8 lg:pl-12">
          <h1 className="font-inter font-semibold text-white text-lg lg:text-2xl leading-5">
            Karra Loft 3 A
          </h1>
          <div className="flex mt-5 gap-2 flex-wrap">
            <button
              className="flex items-center rounded-full py-2 px-4 sm:px-6 border-2 text-start text-xs sm:text-sm leading-5 text-[#E43F71] bg-[#FFCDDB]"
              type="button"
            >
              <div className="bg-[#E43F71] h-2.5 w-2.5 rounded-full mx-1"></div>
              Sold Out
            </button>
            <div className="flex items-center rounded-full py-2 px-6 sm:px-12 gap-1 sm:gap-2 font-inter font-normal border-2 text-start text-xs sm:text-sm leading-5 text-[#676970] bg-[#151517]">
              <LocationIcon />
              Indonesia, Bali
            </div>
            <div className="flex items-center rounded-full py-2 px-6 gap-1 sm:gap-2 font-inter font-normal border-2 text-start text-xs sm:text-sm leading-5 text-[#2CB62A] bg-[#BEE8BC]">
              <KeyIcon />
              Rented
            </div>
            <div className="flex items-center rounded-full py-2 px-4 gap-1 sm:gap-2 font-inter font-normal border-2 text-start text-xs sm:text-sm leading-5 text-[#58667E] bg-[#B1BDCF]">
              <ContactIcon />
              93
            </div>
          </div>
          <div className="grid sm:grid-cols-12 gap-[18px] ">
            <div className="sm:col-span-8 sm:mt-5 border h-full">
              <img src={HouseOne} alt="One" />
            </div>
            <div className="sm:col-span-3 sm:mt-5 flex flex-col border space-y-2">
              <img src={HouseTwo} alt="Two" />
              <img src={HouseThree} alt="Three" />
              <img src={HouseFour} alt="Four" />
              <img src={HouseFive} alt="Five" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:col-span-4 bg-[#151517] h-[780px] rounded-3xl">
        <div className="flex flex-row">
          <div className=" border-2">
            <div>Property Price</div>
            <div>
              $220,000 <span>USDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryAsset;
