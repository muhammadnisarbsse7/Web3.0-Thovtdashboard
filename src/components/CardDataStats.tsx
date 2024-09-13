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
      className="rounded-xl border border-[#3D3D3D] bg-gradient-to-b from-[#262626] to-[#25252500] shadow-default dark:border-strokedark dark:bg-boxdark 
                 w-full flex-grow p-4"
      // style={{
      //   padding: '2vw',
      //   maxWidth: '30%',
      //   minWidth: '250px',
      // }}
    >
      <div className="flex items-start justify-start gap-4 ">
        <div
          className="flex items-start justify-center"
          style={{
            height: 'calc(2.5rem + 1vw)',
            width: 'calc(2.5rem + 1vw)',
          }}
        >
          {children}
        </div>
        <div>
          <h4
            className="font-plusJakartaSans font-semibold text-white lg:text-[16px] leading-tight"
            // style={{
            //   fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            // }}
          >
            {total}
          </h4>
          <h1
            className="font-plusJakartaSans font-medium text-[#B9B9B9] lg:text-[12px]"
            // style={{
            //   fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            // }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
