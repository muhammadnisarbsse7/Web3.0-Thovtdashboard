import React from 'react';

const LinksCard = ({ icon, title }) => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF1A] to-[#FFFFFF1A] border border-[#363636] rounded-[16px] space-y-5 shadow-md py-14 flex flex-col items-center">
      <div className="text-4xl mb-2">{icon}</div>
      <h2 className="font-poppins font-normal text-[20px] text-white leading-5">
        {title}
      </h2>
    </div>
  );
};

export default LinksCard;
