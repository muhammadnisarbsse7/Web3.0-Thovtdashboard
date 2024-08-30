import ThovtCardGrid from './ThovtCard';
import ThovtBalaceCard from './ThovtBalanceCard';
import ChartThree from '../components/Charts/ChartThree';
import ThovtTokenChart from '../components/Charts/ThovtTokenChart';
import CollectionFees from './FeesChart';
import ListedData from '../components/ThovtListed';

const Thovt = () => {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col border">
        <div className="flex mt-[22px] gap-[17.56px] border">
          <div>
            <ThovtCardGrid />
          </div>
          <div>
            <ThovtBalaceCard />
          </div>
        </div>
        <div className="flex gap-[17.56px] mt-11">
          {/* <ChartThree /> */}
          <ThovtTokenChart />
          <CollectionFees />
          {/* <ThovtListedCard /> */}
        </div>
        <div>
          <ListedData />
        </div>
      </div>
    </main>
  );
};

export default Thovt;
