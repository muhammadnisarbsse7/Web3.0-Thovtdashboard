import React from 'react';
import houseOne from './../images/cards/house-one.png';
import houseTwo from './../images/cards/house-two.png';
import houseThree from './../images/cards/house-three.png';
import houseFour from './../images/cards/house-four.png';
import { SignalIcon } from '../Svg/SignalIcon';

const cardData = [
  {
    id: 1,
    imageUrl: houseOne,
    topHeading: 'Real Estate',
    heading1: 'Real Estate',
    percentage: '$6,000,000',
  },
  {
    id: 2,
    imageUrl: houseTwo,
    topHeading: 'Real Estate',
    heading1: 'Startups',
    percentage: '$2,800,000',
  },
  {
    id: 3,
    imageUrl: houseThree,
    topHeading: 'Real Estate',
    heading1: 'Businesses',
    percentage: '$1,200,000',
  },
  {
    id: 4,
    imageUrl: houseFour,
    topHeading: 'Real Estate',
    heading1: 'Crypto',
    percentage: '$1,000,000',
  },
];

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="relative bg-none shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={card.imageUrl}
            alt="Card"
            className="w-full h-[234px] object-cover rounded-t-[20px]"
          />
          <div className="absolute top-[21.48px] right-[15.47px] bg-[#090909]  text-[#FFE9A4] font-poppins font-normal text-[12px] leading-[20px] px-[14px] py-[5px] rounded-[20px]">
            {card.topHeading}
          </div>
          <div className="p-5 bg-gradient-to-t from-[#3636361F] to-[#D9D9D91F] rounded-t-[9px] rounded-b-[18px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h3 className="font-poppins font-medium text-[14px] leading-5 text-white">
                  {card.heading1}
                </h3>
                <span className="font-poppins font-bold text-[12px] leading-[18px] text-[#A1A1A1]">
                  {card.percentage}
                </span>
              </div>

              <div className="flex flex-col px-[10px] bg-[#FFE9A4] rounded-[10px] justify-center items-center ">
                <p className="font-inter font-normal text-[10px] text-[#1E1E1E] leading-[10px]">
                  Ann. Return
                </p>
                <div className="flex mt-[3px] gap-1 ">
                  <SignalIcon />
                  <p className="font-inter font-semibold text-[10px] text-[#000000] leading-[10px]">
                    13.1%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
