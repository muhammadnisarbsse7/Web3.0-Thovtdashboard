// import React from 'react';
import { BathIcon } from '../Svg/TreasuryAssetSvg/BathIcon';
import { BedIcon } from '../Svg/TreasuryAssetSvg/BedIcon';
import { ExclamatoryIcon } from '../Svg/TreasuryAssetSvg/ExclamatoryIcon';
import { OccupiedIcon } from '../Svg/TreasuryAssetSvg/OccupiedIcon';
import { ResidentialIcon } from '../Svg/TreasuryAssetSvg/ResidentialIcon';
import { ShowerIcon } from '../Svg/TreasuryAssetSvg/ShowerIcon';

const Card = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#151517] shadow-md p-5 rounded-[10px] w-full max-w-xs">
      <div className="mb-2">{icon}</div>
      <h2 className="font-inter font-normal text-[#FFF9F9] text-[14px] leading-[14px]">
        {title}
      </h2>
    </div>
  );
};

const TreasuryAssetDetails = () => {
  return (
    <main>
      <div className="container mx-auto mt-10 ">
        <div className="font-inter font-extrabold text-[20px] text-[#FFF9F9] leading-5 mb-[14px]">
          Details
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <Card icon={<BedIcon />} title="1 Bed" />
          <Card icon={<BathIcon />} title="1 Bath" />
          <Card icon={<ShowerIcon />} title="68m" />
          <Card icon={<ResidentialIcon />} title="Residential" />
          <Card icon={<OccupiedIcon />} title="Occupied" />
        </div>
        {/* Paragraphs Section */}
        <div className="space-y-4">
          <h1 className="font-inter font-normal text-white text-[14px] leading-5 mt-8">
            About the property
          </h1>

          <p className="font-inter font-normal text-white text-[14px] leading-[16.94px] line-clamp-[2.5]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          <p className="font-inter font-normal text-white text-[14px] leading-[16.94px] line-clamp-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered
            the undoubtable source.
          </p>

          <p className="font-inter font-normal text-white text-[14px] leading-[16.94px] line-clamp-[1.5]">
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance.
          </p>

          <h1 className="font-inter font-extrabold text-[20px] text-[#FFF9F9] leading-5">
            Property Roadmap
          </h1>
          <div className="flex items-center h-10 w-full bg-[#151517] pl-5 gap-2 rounded-[10px]">
            {' '}
            <ExclamatoryIcon />
            <h1 className="font-inter font-normal text-[14px] text-[#808A9D] leading-[14px]">
              Each step could happen before the listed dates.
            </h1>
          </div>

          <div className="flex flex-row gap-[10px] ml-[18px]">
            <div className="flex flex-col justify-center items-center">
              <div className="h-[15px] w-[15px] bg-[#808A9D] rounded-full flex justify-center items-center">
                <div className="h-[11px] w-[11px] bg-[#EDD777] rounded-full "></div>
              </div>
              <div className="h-[44px] w-[1px]  border border-dashed  border-[#7D8090]  mt-1 "></div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-inter font-normal text-white text-[14px] leading-[14px]">
                August 15th, 2023{' '}
              </h1>
              <h1 className="font-inter font-semibold text-white text-[14px] leading-[14px] ">
                The property sale started
              </h1>
            </div>
          </div>

          <div className="flex flex-row gap-[10px] ml-[18px]">
            <div className="flex flex-col  justify-center items-center">
              <div className="h-[15px] w-[15px] bg-[#808A9D] rounded-full flex justify-center items-center">
                <div className="h-[11px] w-[11px] bg-[#EDD777] rounded-full "></div>
              </div>
              <div className="h-[44px] w-[1px]  border border-dashed  border-[#7D8090]  mt-1 "></div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-inter font-normal text-white text-[14px] leading-[14px]">
                August 15th, 2023{' '}
              </h1>
              <h1 className="font-inter font-semibold text-white text-[14px] leading-[14px] ">
                The property sale started
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TreasuryAssetDetails;
