import React, {Fragment, useState} from 'react';
import { Disclosure, Listbox, Transition } from '@headlessui/react';
import AngleDownIcon from './SVGIcon/AngleDownIcon';
export const AllItems = [
    {
      id: 1,
      symbol: 'https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA=s32',
      name: 'United States Dollar (USD)',
    },
    {
      id: 2,
      symbol: 'https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA=s32',
      name: 'Ether (ETH)',
    },
];

const Sidebar = () => {
    const [selectedAllItem, setSelectedAllItem] = useState(AllItems[0]);
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
                        <Disclosure.Panel className="relative p-5 border-b border-solid border-Grey/20">
                            <div className="relative z-20">
                                <Listbox value={selectedAllItem} onChange={setSelectedAllItem}>
                                    <Listbox.Button className='relative h-[45px] 2xl:h-[50px] w-full text-sm xl:text-base text-left pl-2 bg-white rounded-lg border border-solid border-Grey/40'>
                                        {selectedAllItem.name}
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <AngleDownIcon classes={'w-4 h-4'} />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className='absolute w-full mt-1 overflow-hidden text-base bg-white rounded-md shadow-2xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                            {AllItems.map((item) => (
                                                <Listbox.Option
                                                    key={item.id}
                                                    value={item}
                                                    className='h-[50px] text-base font-semibold text-Dark flex items-center pl-2 border-b border-solid border-Grey/40 cursor-pointer transition ease-in hover:shadow-lg'
                                                >
                                                    {item.name}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </Listbox>
                            </div>
                            <div className="flex items-center mt-3">
                                <div className="from w-1/2"><input type="text" className='w-full h-[40px] xl:h-[50px] px-3 rounded-lg border border-solid border-Grey/40' placeholder='From' /></div>
                                <span className='px-2'>To</span>
                                <div className="from w-1/2"><input type="text" className='w-full h-[40px] xl:h-[50px] px-3 rounded-lg border border-solid border-Grey/40' placeholder='From' /></div>
                            </div>
                            <button type='button' className='w-[130px] mt-3 h-[40px] xl:h-[50px] px-3 rounded-lg border border-solid border-Grey/40'>Apply</button>
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
