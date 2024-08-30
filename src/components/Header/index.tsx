import { Link } from 'react-router-dom';
// import DropdownMessage from './DropdownMessage';
// import DropdownNotification from './DropdownNotification';
// import DropdownUser from './DropdownUser';
import LogoIcon from '../../images/logo/logo-icon.svg';
import { SearchBar } from '../../Svg/SearchBar';
import { FilterIcon } from '../../Svg/FilterIcon';
import { MetaMaskIcon } from '../../Svg/MetaMaskIcon';
import { NotificationIcon } from '../../Svg/NotificationIcon';
import { SettingIcon } from '../../Svg/SettingIcon';
// import DarkModeSwitcher from './DarkModeSwitcher';
// import { MetaMaskIcon } from '../../Svg/MetaMaskIcon';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-[#090909] drop-shadow-1 ">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 ">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            {/* <img src={LogoIcon} alt="Logo" /> */}
          </Link>
        </div>

        <div className="hidden lg:block">
          <h1 className="font-inter font-semibold text-[20px] text-[#FFE9A4] leading-5 ">
            Welcome Back
          </h1>
        </div>

        <div className="hidden sm:block  sm:p-3 sm:bg-zinc-700  rounded-[16px] w-[488px] focus:outline-none">
          <form>
            <div className="flex items-center">
              {/* Search Icon */}
              <div className="mr-2">
                <SearchBar />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for something..."
                className="w-full pl-2 pr-4 text-white font-inter font-normal text-[14px] leading-[14px] bg-zinc-700  focus:outline-none"
              />

              {/* Vertical Line */}
              <div className="h-[30px] w-[1px] rounded-[2px] bg-white opacity-60 mx-4"></div>

              {/* Filter Icon and Text */}
              <div className="flex items-center gap-2 mr-3">
                <FilterIcon />

                <h1 className="text-white font-inter font-normal text-[14px] leading-[14px] tracking-normal opacity-70">
                  Filter
                </h1>
              </div>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <NotificationIcon />
            <SettingIcon />
            <MetaMaskIcon />
            {/* <MetaMaskIcon /> */}

            {/* <DropdownMessage /> */}

            <h1 className="font-inter font-semibold text-[14px] text-white leading-[14px] ">
              Connect Wallet
            </h1>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
