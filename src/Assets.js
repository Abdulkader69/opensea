import NFTItem from "./components/NFTItem";
import { Transition } from '@headlessui/react';
import React, {useState} from 'react';
import FilterIcon from "./components/SVGIcon/FilterIcon";
import LeftArrowIcon from "./components/SVGIcon/LeftArrowIcon";
import Sidebar from "./components/SideBar";
import TopFilter from "./components/TopFilter";
import { NFTs } from "./components/api/dummy";
import Header from "./components/Header";

const Assets = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const [activeView, setActiveView] = useState('grid');
  const handleActiveView = (view) => {
    setActiveView(view);
  }

  // const handleMobileFilter = () => {
  //   setShowFilter(true);
  // }

  return (
    <div className="App">
      <Header />
      <div className="assets-page-wrapper flex pt-[72px]">
        <div className={`side-bar ${showFilter ? 'show-mobile-filter' : ''} w-full sm:w-auto fixed z-50 bg-white transform -translate-x-full lg:translate-x-0 lg:block lg:sticky top-[72px] self-start h-[calc(100vh-72px)] overflow-hidden border-r border-solid border-Grey/20`}>
          <button className={`hidden lg:flex items-center justify-between w-full p-4 border-b border-solid border-Grey/20 transition ease-in hover:shadow-md ${isShowing ? 'a' : 'b'}`} onClick={() => setIsShowing((isShowing) => !isShowing)}>
            <p className={`flex items-center text-base font-semibold text-Dark ${isShowing ? '' : 'hidden'}`}>
              <FilterIcon />
              Filter
            </p>
            <p className={`icon transition ease-in ${isShowing ? '' : 'rotate-180'}`}>
              <LeftArrowIcon />
            </p>
          </button>
          <div className="mobile-filter-head flex lg:hidden justify-between items-center p-4 border-b border-solid border-Grey/20">
            <button className="clear-filter text-base font-semibold text-Blue">Clear All</button>
            <button onClick={() => setShowFilter((showFilter) => !showFilter)} className="clear-filter text-base font-semibold text-Blue">Done</button>
          </div>
          <Transition
            className="transition-left-panel w-full sm:w-[340px]"
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 translate-x-0"
            enterTo="opacity-100"
            leave="transform transition duration-[400ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 -translate-x-full"
          >
            <Sidebar />
          </Transition>
        </div>
        <div className="main-area flex-1 px-4 lg:px-7 pb-16">
          <div className="top-filter flex items-center justify-between py-4 lg:py-8 xl:py-10">
            <div className="total-count text-base text-Dark hidden md:block">30,004,567 items</div>
            <TopFilter handleActiveView={handleActiveView} activeView={activeView} />
          </div>
          <div className={`grid gap-4 ${isShowing ? '' : 'sidebar-hidden'} ${activeView==='list' ? 'grid-cols-6 list-view' : 'grid-cols-5 grid-view'}`}>
            {NFTs.map((item) => (
              <NFTItem detail={item} key={item.id} />
            ))}
          </div>
          <div className="mobile-filter-btn fixed lg:hidden bottom-4 left-0 right-0 m-auto text-center">
              <button onClick={() => setShowFilter((showFilter) => !showFilter)} className="h-[45px] w-full max-w-xs m-auto flex items-center justify-center bg-Blue text-white font-semibold rounded-3xl shadow-lg">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
