// src/components/CardGrid.js

import React from 'react';
import { HoldersIcon } from '../Svg/HoldersIcon';
import { MarketCapIcon } from '../Svg/MarketCapIcon';
import { ThovtIcon } from '../Svg/ThovtIcon';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

// Sample data with unique IDs
const cardData = [
  {
    id: 1,
    title1: 'Holders',
    title2: '26154',
    // percentage: '2.52%',
    amount: '2.52% (+$324.82)',
    icon: <HoldersIcon />,
  },
  {
    id: 2,
    title1: '$THOVT',
    title2: '$1.00',
    // percentage: '1.85%',
    amount: '2.52% (+$324.82)',
    icon: <MarketCapIcon />,
  },
  {
    id: 3,
    title1: 'Market Cap',
    title2: '$50.186.749',
    // percentage: '3.67%',
    amount: '2.52% (+$324.82)',
    icon: <ThovtIcon />,
  },
  {
    id: 4,
    title1: 'Supply',
    title2: '$1.00',
    // percentage: '4.23%',
    amount: '2.52% (+$324.82)',
    icon: <ThovtIcon />,
  },
];

const CardLayout = ({ title1, title2, amount, icon }) => {
  return (
    <div className="bg-gradient-to-b from-[#262626] to-[#25252500] shadow-md rounded-lg px-4 flex flex-col ">
      <div className="flex justify-between items-center  gap-12 pt-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-inter font-semibold text-[20px] text-white leading-5 ">
            {title1}
          </h2>
          <h3 className="font-inter font-normal text-[14px] text-white leading-[14px]">
            {title2}
          </h3>
        </div>
        <div className="">{icon}</div>
      </div>
      <div className="my-[30px]">
        <h4 className="font-poppins font-normal text-[14px] text-[#45E3B8] leading-[21px]">
          {amount}
        </h4>
      </div>
    </div>
  );
};

const ThovtCardGrid = () => {
  return (
    <main className=" w-full">
      <h1 className="font-inter font-semibold text-[20px] text-white leading-5">
        Summary
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-[22px] ">
        {cardData.map((card) => (
          <CardLayout
            key={card.id}
            title1={card.title1}
            title2={card.title2}
            amount={card.amount}
            icon={card.icon}
          />
        ))}
      </div>
    </main>
  );
};

export default ThovtCardGrid;
