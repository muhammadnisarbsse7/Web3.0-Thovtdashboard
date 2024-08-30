import React from 'react';
import FeesChart from './../images/cards/fees-pie-chart.png';

const CollectionFees = () => {
  return (
    <main>
      <div className="flex justify-between max-w-[402px] ">
        <p className="font-inter font-semibold text-[20px] text-white leading-[20px]">
          Collected Fees
        </p>
        <div className="flex space-x-4 items-center">
          <p className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            1H
          </p>
          <p className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            24H
          </p>
          <p className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            1W
          </p>
          <p className="font-inter font-normal text-[#FFE9A4] text-[14px] leading-[14px] ">
            1M
          </p>
          <p className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            1Y
          </p>
          <p className="font-inter font-normal text-white text-[14px] leading-[14px] ">
            ALL
          </p>
        </div>
      </div>
      <div className="max-w-[402px] bg-gradient-to-b from-[#FFFFFF1A] to-[#FFFFFF00] rounded overflow-hidden border-[#363636] mt-6  p-4">
        <div className="flex justify-center ">
          <img
            className="w-[200px] h-[169px]  "
            src={FeesChart}
            alt="Card Image"
          />
        </div>
        <div className="flex justify-around  mt-[40px]">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-[10px]">
              <div className="h-[14px] w-[14px] bg-[#FFE9A4] rounded-[4px]"></div>
              <p className="font-poppins font-normal text-[14px] text-[#ECF0F1] leading-[21px]">
                Treasury
              </p>
            </div>
            <div className="font-inter font-semibold text-[14px] text-[#00C586] leading-[20px]">
              $1,200,000
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-[10px]">
              <div className="h-[14px] w-[14px] bg-[#838483] rounded-[4px]"></div>
              <p className="font-poppins font-normal text-[14px] text-[#ECF0F1] leading-[21px]">
                Community Fund
              </p>
            </div>
            <div className="font-inter font-semibold text-[14px] text-[#00C586] leading-[20px]">
              $1,200,000
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionFees;
