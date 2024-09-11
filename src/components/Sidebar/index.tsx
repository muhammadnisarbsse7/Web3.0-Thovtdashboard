import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.svg';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import { LogoutIcon } from '../../Svg/Sidebar/LogoutIcon';
import { LinksIcon } from '../../Svg/Sidebar/LinksIcon';
import { DaoIcon } from '../../Svg/Sidebar/DaoIcon';
import { CalculatorIcon } from '../../Svg/Sidebar/CalculatorIcon';
import { ThovtSidebarIcon } from '../../Svg/Sidebar/ThovtsIcon';
import { TreasuryIcon } from '../../Svg/Sidebar/TreasuryIcon';
import { PortfolioIcon } from '../../Svg/Sidebar/PortfolioIcon';
import { Selecticon } from '../../Svg/Sidebar/SelectIcon';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[274px] flex-col overflow-y-hidden rounded-l-2xl bg-[#090909] duration-300 ease-linear dark:bg-[#090909] lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-2 px-14 py-5.5 lg:py-10  ">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        ></button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt- lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-[12px] leading-3 font-semibold text-white font-dmSans opacity-20">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-6">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          'group relative flex items-center gap-2.5 rounded-md px-4 font-normal text-white duration-300 ease-in-out hover:text-white ' +
                          (isActive && '!text-white')
                        }
                      >
                        <PortfolioIcon />
                        My Portfolio
                        {/* <Selecticon /> */}
                      </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Treasury --> */}
              <li>
                <NavLink
                  to="/treasury"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-inter font-normal text-[14px] text-white leading-[14px] duration-300 ease-in-out ${
                    pathname.includes('calendar') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <TreasuryIcon />
                  Treasury
                  {/* <Selecticon /> */}
                </NavLink>
              </li>

              {/* <!-- Menu Item Thovt --> */}
              <li>
                <NavLink
                  to="/thovt"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-inter font-normal text-white text-[14px] leading-[14px] duration-300 ease-in-out hover: dark:hover: ${
                    pathname.includes('profile') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <ThovtSidebarIcon />
                  $THOVT
                  {/* <Selecticon /> */}
                </NavLink>
              </li>

              {/* <!-- Menu Item Forms --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/forms' || pathname.includes('forms')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal font-inter text-[14px] leading-[14px] text-white duration-300 ease-in-out hover: dark:hover: ${
                          (pathname === '/forms' ||
                            pathname.includes('forms')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <CalculatorIcon />
                        Calculator
                        {/* <Selecticon /> */}
                      </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Dao --> */}
              <li>
                <NavLink
                  to="/Dao"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal font-inter text-white text-[14px] leading-[14px]  duration-300 ease-in-out hover: dark:hover: ${
                    pathname.includes('Dao') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <DaoIcon />
                  DAO
                  {/* <Selecticon /> */}
                </NavLink>
              </li>
              {/* <!-- Menu Links --> */}
              <li>
                <NavLink
                  to="/links"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal font-inter text-[14px] text-white leading-[14px]  duration-300 ease-in-out hover: dark:hover: ${
                    pathname.includes('links') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <LinksIcon />
                  Links
                  {/* <Selecticon /> */}
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-96 flex flex-col gap-1.5">
              {/* <!-- Menu Logout --> */}
              <li>
                <NavLink
                  to=""
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-normal font-inter text-hotpink text-[14px] leading-[14px] duration-300 ease-in-out hover: dark:hover: ${
                    pathname.includes('chart') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <LogoutIcon />
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
