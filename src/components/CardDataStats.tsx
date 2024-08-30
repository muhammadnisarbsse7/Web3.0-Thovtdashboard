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
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className=" rounded-xl border border-[#3D3D3D] bg-gradient-to-b from-[#262626] to-[#25252500] py-4 px-[19.3px] shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div> */}

      <div className=" flex  items-start justify-start gap-[27.98px] ">
        <div className="flex h-13.5 w-11.5 items-center justify-center">
          {children}
        </div>
        <div>
          <h4 className="font-plusJakartaSans font-semibold text-white text-[21.38px] leading-[26.94px]">
            {total}
          </h4>
          <span className="font-plusJakartaSans font-medium text-[12px] text-[#B9B9B9] leading-[18px]">
            {title}
          </span>
        </div>

        {/* <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {/* {rate} */}

        {/* {levelUp && (
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        )} */}
        {/* {levelDown && (
          <svg
            className="fill-meta-5"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
              fill=""
            />
          </svg>
        )} */}
        {/* </span> */}
      </div>
    </div>
  );
};

export default CardDataStats;
