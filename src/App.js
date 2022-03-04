import NFTItem from "./components/NFTItem";
import { Transition } from '@headlessui/react';
import React, {useState} from 'react';
import FilterIcon from "./components/SVGIcon/FilterIcon";
import LeftArrowIcon from "./components/SVGIcon/LeftArrowIcon";
import Sidebar from "./components/SideBar";

const App = () => {
  const [isShowing, setIsShowing] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl">
          Header
        </p>
      </header>
      <div className="assets-page-wrapper flex">
        <div className="side-bar sticky top-[36px] self-start h-[calc(100vh-36px)] overflow-hidden border-r border-solid border-Grey/20">
          <button className={`flex items-center justify-between w-full p-4 border-b border-solid border-Grey/20 transition ease-in hover:shadow-md ${isShowing ? 'a' : 'b'}`} onClick={() => setIsShowing((isShowing) => !isShowing)}>
            <p className={`flex items-center text-base font-semibold text-Dark ${isShowing ? '' : 'hidden'}`}>
              <FilterIcon />
              Filter
            </p>
            <p className={`icon transition ease-in ${isShowing ? '' : 'rotate-180'}`}>
              <LeftArrowIcon />
            </p>
          </button>
          <Transition
            className="transition-left-panel w-[340px]"
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
        <div className="main-area flex-1 px-7">
          <div className="grid gap-4 grid-cols-6">
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
            <NFTItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
