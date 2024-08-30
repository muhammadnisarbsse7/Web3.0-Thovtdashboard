import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div
      className="rounded-xl border-[#3D3D3D] bg-gradient-to-b from-[#262626] to-[#25252500] py-4 px-6 shadow-default dark:border-strokedark dark:bg-boxdark 
                    sm:px-4 sm:py-3
                    md:px-6 md:py-4
                    lg:px-[18px] lg:py-4"
    >
      <div className="flex items-start justify-start gap-6 sm:gap-4 md:gap-6 lg:gap-6">
        <div className="flex h-14 w-12 items-center justify-center sm:h-12 sm:w-10 md:h-14 md:w-12 lg:h-16 lg:w-14">
          {children}
        </div>
        <div className="">
          <h4 className="font-plusJakartaSans font-semibold text-white text-lg sm:text-base md:text-lg lg:text-xl leading-tight">
            {total}
          </h4>
          <h1 className="font-plusJakartaSans font-medium text-sm text-[#B9B9B9] leading-[18px] sm:text-xs md:text-sm lg:text-base">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
