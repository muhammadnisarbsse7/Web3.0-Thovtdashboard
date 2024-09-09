import { UniswapIcon } from '../Svg/UniSwapIcon';
import { BinanceIcon } from '../Svg/BinanceIcon';
import { OkxIcon } from '../Svg/OkxIcon';
import { PolygonIcon } from '../Svg/PolygonIcon';

const ThovtListedCard = ({ icon, title }) => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF1A] to-[#FFFFFF1A] border border-[#363636] rounded-[16px] space-y-5  py-8 flex flex-col items-center">
      <div className="text-4xl mb-2 ">{icon}</div>
      <h2 className="font-poppins font-normal text-[20px] text-[#FFE9A4] leading-5">
        {title}
      </h2>
    </div>
  );
};

const ListedData = () => {
  const cardData = [
    { id: 1, icon: <UniswapIcon />, title: 'Uniswap' },
    { id: 2, icon: <BinanceIcon />, title: 'Binance' },
    { id: 3, icon: <OkxIcon />, title: 'OKX' },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-inter font-semibold text-[20px] text-white leading-5 ">
          Listed
        </h1>
      </div>
      <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9">
        {cardData.map((card) => (
          <ThovtListedCard key={card.id} icon={card.icon} title={card.title} />
        ))}
      </div>
      <div className=" flex flex-col mt-10">
        <h1 className="font-inter font-semibold text-[20px] text-white leading-5 ">
          Chains
        </h1>
        <div className="w-full sm:max-w-[278.5px] mt-8 bg-gradient-to-t from-[#FFFFFF1A] to-[#FFFFFF1A] border border-[#363636] rounded-[16px] space-y-5 shadow-md py-8 flex flex-col items-center">
          <div className="text-4xl mb-2">
            <PolygonIcon />
          </div>
          <h2 className="font-poppins font-normal text-[20px] text-[#FFE9A4] leading-5">
            Polygon 5
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ListedData;
