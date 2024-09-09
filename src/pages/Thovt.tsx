import ThovtCardGrid from './ThovtCard';
import ThovtBalaceCard from './ThovtBalanceCard';
import ChartThree from '../components/Charts/ChartThree';
import ThovtTokenChart from '../components/Charts/ThovtTokenChart';
// import PortfolioChart from '../components/Charts/PortfolioChart';
import ThovtTokenPriceChart from '../components/Charts/ThovtTokenPriceChart';
import CollectionFees from './FeesChart';
import ListedData from '../components/ThovtListed';

const Thovt = () => {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row mt-[22px] gap-[17.56px]  ">
          <ThovtCardGrid />
          <ThovtBalaceCard />
        </div>
        <div className="grid sm:grid-cols-12  gap-[17.56px] mt-11">
          {/* <ChartThree /> */}
          {/* <ThovtTokenChart /> */}
          <div className="grid sm:col-span-7">
            <h1 className="font-inter font-bold text-[18px] text-white leading-[21.78px] mb-4">
              $THOVT Token Price
            </h1>
            <ThovtTokenPriceChart />
          </div>
          <div className="grid sm:col-span-5">
            <CollectionFees />
          </div>
          {/* <ThovtListedCard /> */}
        </div>
        <div>{/* <ChartThree /> */}</div>
        <div>
          <ListedData />
        </div>
      </div>
    </main>
  );
};

export default Thovt;
