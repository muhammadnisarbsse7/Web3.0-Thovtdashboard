import React from 'react';

import RentHouseOne from './../images/cards/rent-house-one.png';
import RentHouseTwo from './../images/cards/rent-house-two.png';
import RentHouseThree from './../images/cards/rent-house-three.png';

const CardComponent = () => {
  const cards = [
    {
      id: 1,
      image: RentHouseOne,
      heading1: 'Rent $172 from #127 Asset',
      heading2: '1 October, 2023',
    },
    {
      id: 2,
      image: RentHouseTwo,
      heading1: 'Rent $172 from #127 Asset',
      heading2: '1 October, 2023',
    },
    {
      id: 3,
      image: RentHouseThree,
      heading1: 'Rent $172 from #127 Asset',
      heading2: '1 October, 2023',
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[27px]">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-row items-center bg-gradient-to-t from-[#3636361F] to-[#D9D9D91F]  shadow-md rounded-lg h-20 p-2"
          style={{ height: '82px' }}
        >
          <img
            src={card.image}
            alt={`Card ${card.id}`}
            className="h-full w-[112px] object-cover rounded-[12px]"
          />
          <div className="flex flex-col ml-[24.35px] px-[10px] ">
            <h1 className="font-inter font-bold text-[14px] text-white leading-[15.19px] ">
              {card.heading1}
            </h1>
            <h2 className="text-sm text-gray-500">{card.heading2}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
