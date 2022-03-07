import { Transition, Listbox } from '@headlessui/react';
import React, {useState, Fragment} from 'react';
import { AllItems, ShortBy } from '../components/api/dummy';
import AngleDownIcon from "./SVGIcon/AngleDownIcon";
import AppViewIcon from './SVGIcon/AppViewIcon';
import GridViewIcon from './SVGIcon/GridViewIcon';

const TopFilter = ({handleActiveView, activeView}) => {
    const [selectedAllItem, setSelectedAllItem] = useState(AllItems[0]);
    const [selectedShortBy, setSelectedShortBy] = useState(ShortBy[0]);
    return (
        <div className="filter flex items-center justify-end">
            <div className="all-item relative z-20 mr-2">
                <Listbox value={selectedAllItem} onChange={setSelectedAllItem}>
                    <Listbox.Button className='relative h-[50px] w-[227px] text-left pl-2 bg-white rounded-lg border border-solid border-Grey/40'>
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
            <div className="shortby relative z-20 mr-2">
                <Listbox value={selectedShortBy} onChange={setSelectedShortBy}>
                    <Listbox.Button className='relative h-[50px] w-[227px] text-left pl-2 bg-white rounded-lg border border-solid border-Grey/40'>
                        {selectedShortBy.name}
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
                            {ShortBy.map((item) => (
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
            <div className={`view relative z-20 flex `}>
                <button onClick={() => {handleActiveView('grid')}} disabled={activeView==='grid' ? true : false} className={`grid-view w-[50px] h-[50px] cursor-pointer flex items-center justify-center border border-solid border-Grey/40 rounded-l-lg ${activeView==='grid' ? 'bg-[rgb(243,251,254)] cursor-auto' : ''}`}><GridViewIcon /></button>
                <button onClick={() => {handleActiveView('list')}} disabled={activeView==='list' ? true : false} className={`app-view w-[50px] h-[50px] cursor-pointer flex items-center justify-center border border-l-0 border-solid border-Grey/40 rounded-r-lg ${activeView==='list' ? 'bg-[rgb(243,251,254)] cursor-auto' : ''}`}><AppViewIcon /></button>
            </div>
        </div>
    );
}

export default TopFilter;
