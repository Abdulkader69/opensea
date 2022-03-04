import React from 'react';
import { Disclosure } from '@headlessui/react';
import AngleDownIcon from './SVGIcon/AngleDownIcon';

const Sidebar = () => {
    return (
        <div className='side-bar-content overflow-auto h-[calc(100vh-97px)]'>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>Status</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>Price</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>Collections</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>Chains</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>Categories</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                            <span>On Sale In</span>
                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                            <div className="grid gap-2 grid-cols-2">
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Buy Now</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>On Auction</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>New</button>
                                <button className='w-full border border-solid border-Grey/20 rounded-lg text-base font-semibold text-Dark text-left px-2 py-1 transition ease-in hover:shadow-lg' type='button'>Has Offers</button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

export default Sidebar;
