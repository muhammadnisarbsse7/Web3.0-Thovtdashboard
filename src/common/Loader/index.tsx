import { ThovtIconLoader } from '../../Svg/ThovtIconLoader';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-bounce rounded-full border-t-transparent flex items-center justify-center">
        <ThovtIconLoader />
      </div>
    </div>
  );
};

export default Loader;
