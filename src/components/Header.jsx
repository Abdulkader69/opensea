import ProfileIcon from "./SVGIcon/ProfileIcon";
import SearchIcon from "./SVGIcon/SearchIcon";
import WalletIcon from "./SVGIcon/WalletIcon";
import { Popover, Transition } from '@headlessui/react';
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./SVGIcon/HamburgerIcon";
import CloseIcon from "./SVGIcon/CloseIcon";

const Header = () => {
    return (
        <>
            <header className="App-header fixed top-0 w-full h-[60px] md:h-[72px] px-4 md:px-7 flex items-center justify-between shadow-lg bg-white z-[9999]">
                <div className="logo pr-16 xl:pr-44 flex items-center justify-start text-2xl font-bold text-Dark">
                    <img src="https://opensea.io/static/images/logos/opensea.svg" alt="logo" className="mr-2 w-10" />
                    OpenSea
                </div>
                <div className="search-wrap hidden md:inline-block relative w-full xl:mr-10 h-[45px]">
                    <div className="icon absolute top-[13px] left-4 pointer-events-none"><SearchIcon /></div>
                    <input type="search" className='w-full h-full border border-solid border-Grey/40 outline-none pl-12 rounded-lg' name="search" id="search" placeholder='Search items, collections, and accounts' />
                </div>
                <div className="menu-wrap hidden md:inline-block">
                    <ul className="flex items-center justify-end">
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">Explore</span>
                                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> All NFTs</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Arts</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Collectibles</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Domain Names</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Music</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Photography</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Sports</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Trading Cards</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Utility</a></li>
                                    <li><a href="/" className="w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg flex items-center"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="mr-2 w-8 h-8" /> Virtual Worlds</a></li>
                                </ul>
                            </a>
                        </li>
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">Stats</span>
                                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Rankings</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Activity</a></li>
                                </ul>
                            </a>
                        </li>
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">Resources</span>
                                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Help Center</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Platform Status</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Partners</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Gas-free Marketplace</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Taxes</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Blog</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Docs</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">Newsletter</a></li>
                                </ul>
                            </a>
                        </li>
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">Create</span>
                            </a>
                        </li>
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center"><ProfileIcon /></span>
                                <ul className="absolute top-[35px] -right-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">All NFTs</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">All NFTs</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">All NFTs</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">All NFTs</a></li>
                                    <li><a href="/" className="inline-block w-full p-3 border-b border-solid border-Grey/30 transition ease-in hover:shadow-lg">All NFTs</a></li>
                                </ul>
                            </a>
                        </li>
                        <li className="ml-5 xl:ml-10">
                            <a href="/" className="relative group text-sm xl:text-base font-semibold">
                                <span className="h-[72px] inline-flex items-center"><WalletIcon /></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hamburger-nav relative md:hidden">
                    <Popover>
                        {({ open }) => (
                            <>
                                <Popover.Button className="outline-none">
                                    {open ? <CloseIcon /> : <HamburgerIcon />}
                                </Popover.Button>
                                <Transition
                                    show={open}
                                    className="fixed border-t border-solid border-Grey/40 top-[60px] w-full bg-white left-0"
                                    enter="transition duration-300 ease-out"
                                    enterFrom="transform translate-x-full opacity-0"
                                    enterTo="transform translate-x-0 opacity-100"
                                    leave="transition duration-300 ease-in"
                                    leaveFrom="transform translate-x-0 opacity-100"
                                    leaveTo="transform -translate-x-full opacity-0"
                                >
                                    <Popover.Panel>
                                        <MobileMenu />
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </header>
        </>
    );
}

export default Header;
