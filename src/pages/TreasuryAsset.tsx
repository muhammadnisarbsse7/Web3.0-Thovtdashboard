import React, { useState } from 'react';
import { LocationIcon } from '../Svg/TreasuryAssetSvg/LocationIcon';
import { KeyIcon } from '../Svg/TreasuryAssetSvg/KeyIcon';
import { ContactIcon } from '../Svg/TreasuryAssetSvg/ContactIcon';
import HouseOne from '../images/TreasuryAssetImg/House1.png';
import HouseTwo from '../images/TreasuryAssetImg/House2.png';
import HouseThree from '../images/TreasuryAssetImg/House3.png';
import HouseFour from '../images/TreasuryAssetImg/House4.png';
import HouseFive from '../images/TreasuryAssetImg/House5.png';
import { ExclamatoryIcon } from '../Svg/TreasuryAssetSvg/ExclamatoryIcon';
import TreasuryAssetDetails from './TreasuryAssetDetails';

const TreasuryAsset = () => {
  const [activeButton, setActiveButton] = useState('Partners');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="grid-row flex flex-col  sm:grid sm:grid-cols-12 gap-3 sm:gap-3">
        <div className="grid sm:col-span-8 bg-[#151517] h-full rounded-3xl">
          <div className="flex flex-col mt-20 pl-4 md:pl-8 lg:pl-12">
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
              <div className="sm:col-span-8 sm:mt-5  h-full">
                <img src={HouseOne} alt="One" />
              </div>
              <div className="sm:col-span-3 sm:mt-5 flex flex-col  space-y-2">
                <img src={HouseTwo} alt="Two" />
                <img src={HouseThree} alt="Three" />
                <img src={HouseFour} alt="Four" />
                <img src={HouseFive} alt="Five" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:col-span-4 bg-[#151517] h-[780px] rounded-3xl">
          <div className="flex flex-col h-20 w-full mt-16">
            <div className=" flex  items-center gap-8 justify-between mx-auto">
              <div className="flex flex-col space-y-3 ">
                <div className="font-inter font-semibold text-white text-[20px] leading-5 ">
                  Property Price
                </div>
                <div className="font-inter font-semibold text-[#FFE9A4] text-[20px] leading-5 ">
                  $220,000{' '}
                  <span className="font-inter font-semibold text-[14px] text-[#7D8090] leading-[14px]">
                    USDT
                  </span>
                </div>
              </div>
              <div className="h-[93px] w-[2px] bg-[#7D8090]"></div>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-center items-center gap-2">
                  <div className="font-inter font-normal text-white text-[14px] leading-[14px] ">
                    IRR
                  </div>
                  <div>
                    <ExclamatoryIcon />
                  </div>
                  <div className="font-inter font-semibold text-[#FFE9A4] text-[14px] leading-[14px] ">
                    31.3%
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="font-inter font-normal text-white text-[14px] leading-[14px] ">
                    IRR
                  </div>
                  <div>
                    <ExclamatoryIcon />
                  </div>
                  <div className="font-inter font-semibold text-[#FFE9A4] text-[14px] leading-[14px] ">
                    31.3%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto  ">
              <div className="flex justify-between gap-28  mt-8 ">
                <div className="font-inter font-semibold text-[10px] text-white leading-[10px] ">
                  Token Price:
                  <span className="font-inter font-semibold text-[#FFE9A4] text-[14px] leading-[14px]">
                    $50
                  </span>
                </div>
                <div className="font-inter font-semibold text-[10px] text-white leading-[10px]">
                  Collection: 100.00 %
                </div>
              </div>
              <div className="mt-3 h-2  w-full bg-[#FFE9A4] rounded-[4px]"></div>
              <div className="w-full border border-[#7D8090] mt-8"></div>

              <div className="h-[190px] w-full rounded-[24px] bg-[#FFE9A4] mt-7">
                <div className="flex flex-col justify-center items-center mt-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="h-[6px] w-[1px] bg-black"></div>
                    <div className="h-[31px] w-[48px] bg-[#6E6748] border border-black flex justify-center items-center">
                      <h1 className="font-inter font-normal text-white text-[10px] leading-[10px] ">
                        Sold out
                      </h1>
                    </div>
                    <div className="h-[6px] w-[1px] bg-black"></div>
                  </div>
                  <div className="font-inter font-semibold text-black text-[20px] leading-5  mt-2">
                    Property is sold out!
                  </div>
                  <div className="h-[40px] w-[180px] rounded-[10px] bg-gradient-to-t from-[#262626] to-[#363636] mt-[18px] flex justify-center items-center">
                    <h1 className="font-inter font-semibold text-[#FFE9A4] text-[14px] leading-[14px]  ">
                      Secondary Market
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex rounded-[24px]  bg-[#FFE9A4]   gap-[1px] mt-[27px]">
                <button
                  onClick={() => handleButtonClick('Partners')}
                  className={`px-6 rounded-[17px] ${
                    activeButton === 'Partners'
                      ? 'bg-[#FBF4F4] text-black border border-black py-1'
                      : 'text-black'
                  }`}
                >
                  Partners
                </button>
                <button
                  onClick={() => handleButtonClick('Owners')}
                  className={`px-5 rounded-[17px] ${
                    activeButton === 'Owners'
                      ? 'bg-[#FBF4F4] text-black border border-black py-1'
                      : 'text-black'
                  }`}
                >
                  Owners
                </button>
                <button
                  onClick={() => handleButtonClick('Activities')}
                  className={`px-4 rounded-[17px] ${
                    activeButton === 'Activities'
                      ? 'bg-[#FBF4F4] text-black border border-black py-1'
                      : 'text-black'
                  }`}
                >
                  Activities
                </button>
              </div>
              <div className="flex mt-8 gap-2">
                <div className="h-12 w-12 bg-[#D9D9D9] rounded-[10px]"></div>
                <div className="flex flex-col  justify-between">
                  <div className="font-inter font-semibold text-[#FFFDFD] text-[14px] leading-[14px] ">
                    Bali Business Consulting{' '}
                  </div>
                  <div className="font-inter font-semibold text-[#7D8090]  text-[14px] leading-[14px]">
                    Legal
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-dashed border-[#7D8090] mt-5"></div>
              <div className="flex mt-8 gap-2">
                <div className="h-12 w-12 bg-[#D9D9D9] rounded-[10px]"></div>
                <div className="flex flex-col  justify-between">
                  <div className="font-inter font-semibold text-[#FFFDFD] text-[14px] leading-[14px] ">
                    Bali Invest Management
                  </div>
                  <div className="font-inter font-semibold text-[#7D8090]  text-[14px] leading-[14px]">
                    Managements
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-dashed border-[#7D8090] mt-5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-12 space-y-4 sm:space-y-0 sm:space-x-12 items-center">
        <div className="font-inter font-semibold text-black text-[16px] sm:text-[20px] leading-5 bg-[#FFE9A4] rounded-[10px] p-3">
          Details
        </div>
        <div className="font-inter font-semibold text-[16px] sm:text-[20px] text-white leading-5">
          Roadmap
        </div>
        <div className="font-inter font-semibold text-[16px] sm:text-[20px] text-white leading-5">
          Documents
        </div>
        <div className="font-inter font-semibold text-[16px] sm:text-[20px] text-white leading-5">
          Financials
        </div>
        <div className="font-inter font-semibold text-[16px] sm:text-[20px] text-white leading-5">
          Governance
        </div>
      </div>

      <div>
        <TreasuryAssetDetails />
      </div>
    </>
  );
};

export default TreasuryAsset;
