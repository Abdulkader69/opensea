import React from 'react';
import ExploreIcon from './components/SVGIcon/ExploreIcon';
import LoveIcon from './components/SVGIcon/LoveIcon';
import { Disclosure } from '@headlessui/react';
import AngleDownIcon from './components/SVGIcon/AngleDownIcon';
import WalletIcon from './components/SVGIcon/WalletIcon';
import NFTItem from './components/NFTItem';
import { NFTs } from "./components/api/dummy";

const SinglePage = () => {
    return (
        <div className='single-page pt-[72px]'>
            <div className="w-full max-w-7xl m-auto flex flex-wrap py-16">
                <div className="w-2/5">
                    <div className="image-wrapper border border-solid border-Grey/20 rounded-xl mb-5">
                        <div className="top flex items-center justify-between py-2 px-4">
                            <div className="symbol cursor-pointer">
                                <div className="img w-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>
                            </div>
                            <div className="love flex items-center justify-end">
                                <LoveIcon /> <span className='inline-block pl-2'>2</span>
                            </div>
                        </div>
                        <div className="image overflow-hidden rounded-xl">
                            <img className='w-full h-full' src="https://lh3.googleusercontent.com/Ukw6I8GtokjXQSgjDxDDlFCbJbmRdgqGVT0d7XW6gI97CDXhQMNtrZo4UiaZeklvAMBSZ7hTl3PM3196Kgyz1EZuCATHh-JB7kR9=w600" alt="" />
                        </div>
                    </div>
                    <div className="info-wrapper border border-solid border-Grey/20 rounded-xl">
                        <div className="description">
                            <div className="title border-b border-solid border-Grey/20 p-4 flex items-center">
                                <ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Description</span>
                            </div>
                            <div className="content px-4 py-6 border-b border-solid border-Grey/20">
                            Created by <a href="/">CyberCatCaesar</a>
                            </div>
                        </div>
                        <div className="properties">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Properties</span></div>
                                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                                            <div className="grid gap-2 grid-cols-3">
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                                <a className='bg-Blue/10 rounded-md text-center border border-solid border-Blue/50 text-Dark' href='/'>
                                                    <spa className="text-Blue/50 text-xs">AMULET</spa>
                                                    <p>Shawl</p>
                                                    <span className="text-xs">0.91% have this trait</span>
                                                </a>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>About Cyber Cats Alliance (NFT)</span></div>
                                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                                            <div className="flex items-start">
                                                <img className='rounded-lg mr-4' src="https://lh3.googleusercontent.com/QYnai308bhJCf8eCcm1ckaowMHcS77sJQS1gS7efc6dGx_YE3GR4M3aX2JVKU2Wkcdf2suQFEqLnTWOXWNXFHBSOhhNgcTzV5qP8zQ=w128" alt="ll" />
                                                <p>Cyber Cats Alliance (CCA) is a collection of 25,000 Cyber Cats NFTs—unique digital collectables living on the Ethereum blockchain. Your Cyber Cat is not only a beautiful art, but a membership that grants you exclusive access to members-only benefits, the first of which is access to the "message to the future" activity, a collaborative story that will be forever in the Blockchain. The value of the membership card increases by the community through roadmap activation</p>
                                            </div>
                                            <div className="social flex items-center w-full">
                                                <ul className="social-icon w-full flex items-center justify-start py-4 border-t border-solid border-Grey/40 mt-5">
                                                    <li className='px-4 twitter'><a href="/"><svg height="20" width="30" fill="#8A939B" viewBox="0 0 18 16"><path d="M.09 13.791c1.992.14 3.728-.344 5.327-1.571-.816-.098-1.527-.311-2.127-.786-.584-.466-1.032-1.047-1.272-1.841h1.48c.008-.033.016-.066.024-.107-.816-.237-1.512-.663-2.032-1.342-.52-.67-.775-1.448-.8-2.3.52.148 1.016.295 1.52.434.016-.033.04-.065.056-.098-.72-.606-1.24-1.334-1.431-2.275a3.92 3.92 0 01.391-2.7c2 2.389 4.511 3.715 7.598 3.936-.096-.778-.104-1.498.16-2.202.912-2.463 3.983-3.249 5.894-1.481.216.196.4.229.632.147.632-.229 1.255-.474 1.903-.72-.248.81-.784 1.408-1.415 1.989.615-.164 1.231-.336 1.839-.5.024.025.048.041.072.066-.464.491-.912 1.007-1.415 1.449-.272.237-.36.458-.376.818-.144 4.01-1.752 7.25-5.175 9.289-3.487 2.07-7.077 1.947-10.612-.025-.064-.04-.12-.09-.24-.18z"></path></svg></a></li>
                                                    <li className='px-4 instagram'><a href="/"><svg height="20" width="30" fill="#8A939B" viewBox="0 0 24 24"><path d="M15.75 2H8.25C4.79875 2 2 4.79875 2 8.25V15.75C2 19.2012 4.79875 22 8.25 22H15.75C19.2012 22 22 19.2012 22 15.75V8.25C22 4.79875 19.2012 2 15.75 2ZM20.125 15.75C20.125 18.1625 18.1625 20.125 15.75 20.125H8.25C5.8375 20.125 3.875 18.1625 3.875 15.75V8.25C3.875 5.8375 5.8375 3.875 8.25 3.875H15.75C18.1625 3.875 20.125 5.8375 20.125 8.25V15.75Z"></path><path d="M12 7C9.23875 7 7 9.23875 7 12C7 14.7613 9.23875 17 12 17C14.7613 17 17 14.7613 17 12C17 9.23875 14.7613 7 12 7ZM12 15.125C10.2775 15.125 8.875 13.7225 8.875 12C8.875 10.2763 10.2775 8.875 12 8.875C13.7225 8.875 15.125 10.2763 15.125 12C15.125 13.7225 13.7225 15.125 12 15.125Z"></path><path d="M17.375 7.29124C17.743 7.29124 18.0413 6.99295 18.0413 6.62499C18.0413 6.25703 17.743 5.95874 17.375 5.95874C17.0071 5.95874 16.7088 6.25703 16.7088 6.62499C16.7088 6.99295 17.0071 7.29124 17.375 7.29124Z"></path></svg></a></li>
                                                    <li className='px-4 discord'><a href="/"><svg height="20" width="30" fill="#8A939B" viewBox="0 0 24 24"><path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path></svg></a></li>
                                                    <li className='px-4 reddit'><a href="/"><svg height="20" width="30" fill="#8A939B" viewBox="0 0 24 24"><path d="m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z"></path></svg></a></li>
                                                    <li className='px-4 youtube'><a href="/"><svg height="20" width="30" fill="#8A939B" viewBox="0 0 20 18"><path d="M9.99433 3.33325C9.99433 3.33325 4.26441 3.33326 2.82628 3.70695C2.05625 3.9221 1.4222 4.55617 1.20704 5.33752C0.833352 6.77565 0.833344 9.75391 0.833344 9.75391C0.833344 9.75391 0.833352 12.7435 1.20704 14.159C1.4222 14.9403 2.04493 15.563 2.82628 15.7782C4.27574 16.1632 9.99433 16.1632 9.99433 16.1632C9.99433 16.1632 15.7356 16.1632 17.1737 15.7895C17.9551 15.5744 18.5778 14.963 18.7816 14.1703C19.1666 12.7435 19.1666 9.76524 19.1666 9.76524C19.1666 9.76524 19.178 6.77565 18.7816 5.33752C18.5778 4.55617 17.9551 3.93344 17.1737 3.72961C15.7356 3.33327 9.99433 3.33325 9.99433 3.33325ZM8.17116 7.00225L12.9386 9.75391L8.17116 12.4942V7.00225Z"></path></svg></a></li>
                                                </ul>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Details</span></div>
                                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                                            <div className='item flex items-center justify-between text-sm text-Dark py-1'>
                                                <p>Contract Address</p>
                                                <p><a href="/">0x495f...7b5e</a></p>
                                            </div> 
                                            <div className='item flex items-center justify-between text-sm text-Dark py-1'>
                                                <p>Token ID</p>
                                                <p>89357024335517..</p>
                                            </div> 
                                            <div className='item flex items-center justify-between text-sm text-Dark py-1'>
                                                <p>Token Standard</p>
                                                <p>ERC-1155</p>
                                            </div> 
                                            <div className='item flex items-center justify-between text-sm text-Dark py-1'>
                                                <p>Blockchain</p>
                                                <p>Ethereum</p>
                                            </div> 
                                            <div className='item flex items-center justify-between text-sm text-Dark py-1'>
                                                <p>Metadata</p>
                                                <p>Centralized</p>
                                            </div> 
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>
                </div>

                <div className="w-3/5 pl-8">
                    <div className="title">
                        <div className="top flex items-start justify-between">
                            <a href="https://opensea.io/collection/cybercatsalliancenft">Cyber Cats Alliance (NFT)</a>
                            <div className="menu border border-solid border-Grey/20 rounded-lg">
                                <a className='inline-flex items-center justify-center w-10 h-10 border-r border-solid border-Grey/20' href="/"><WalletIcon /></a>
                                <a className='inline-flex items-center justify-center w-10 h-10 border-r border-solid border-Grey/20' href="/"><WalletIcon /></a>
                                <a className='inline-flex items-center justify-center w-10 h-10' href="/"><WalletIcon /></a>
                            </div>
                        </div>
                        <h1 className='pt-2 pb-5 text-3xl font-semibold text-Dark'>Cyber Cat #5116</h1>
                        <div className="flex items-center mb-9">
                            <p className='pr-5'>Owned by <a href='/'>CyberCatCaesar</a></p>
                            <p className='flex items-center'><LoveIcon /><span className='pl-2'>1 favorite</span></p>
                        </div>
                    </div>
                    <div className="info-wrapper border border-solid border-Grey/20 rounded-xl mb-5">
                        <div className="description">
                            <div className="title border-b border-solid border-Grey/20 p-4 flex items-center">
                                <ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Sale ends March 30, 2022 at 12:06am +06 </span>
                            </div>
                            <div className="content px-4 py-6 border-b border-solid border-Grey/20">
                                <p className='pb-2'>Current price</p>
                                <div className="price flex items-end">
                                    <div className="symbol cursor-pointer">
                                        <div className="img w-5"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>
                                    </div>
                                    <div className="eth font-semibold text-3xl pl-2 -mb-1">0.05</div>
                                    <div className="dollar pl-2">($156.37)</div>
                                </div>
                                <div className="btn flex mt-4">
                                    <a href="/" className='bg-Blue rounded-lg inline-flex items-center h-[45px] px-10 mr-5'>
                                        <svg width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                            <g id="Wallet">
                                                <path fill='white' d="M57.7901001,7H6.2100005c-3.4238999,0-6.2099996,2.7901001-6.2099996,6.2196999v3.9922009v29.5683994v4.0078011
                                                    C0.0000008,54.2128983,2.7871008,57,6.2119007,57h47.5762024c2.6661987,0,4.9391975-1.6922989,5.8182983-4.0564995
                                                    C62.3984985,52.6615982,64,50.4676018,64,46.7803001V13.2196999C64,9.7901001,61.2138977,7,57.7901001,7z M53.7881012,55H6.2119007
                                                    c-2.3222001,0-4.2118998-1.8895988-4.2118998-4.2118988v-4.0078011V17.2119007C2.0000007,14.8896999,3.8897007,13,6.2119007,13
                                                    h47.5762024C56.1104012,13,58,14.8896999,58,17.2119007V24H45.9482994C41.0136986,24,37,28.1231003,37,33.1913986v1.6182022
                                                    C37,39.8769989,41.0136986,44,45.9482994,44H58v6.7881012C58,53.1104012,56.1104012,55,53.7881012,55z M58,42H45.9482994
                                                    C42.1171989,42,39,38.7743988,39,34.8096008v-1.6182022C39,29.2255993,42.1171989,26,45.9482994,26H58V42z M62,46.7803001
                                                    c0,2.9328995-1.0900993,3.8256989-2.0046005,4.0984993C59.9958992,50.8483009,60,50.8186989,60,50.7881012V17.2119007
                                                    C60,13.7870998,57.2128983,11,53.7881012,11H6.2119007c-1.5956998,0-3.048295,0.6101999-4.1497002,1.6029997
                                                    C2.3630006,10.5697002,4.0994005,9,6.2100005,9h51.580101C60.1112976,9,62,10.8926001,62,13.2196999V46.7803001z"/>
                                                <path fill='white' d="M42,34c0,2.2061005,1.7939987,4,4,4c2.2061005,0,4-1.7938995,4-4c0-2.2059994-1.7938995-4-4-4
                                                    C43.7939987,30,42,31.7940006,42,34z M46,32c1.1026039,0,2,0.8974991,2,2c0,1.1026001-0.8973961,2-2,2
                                                    c-1.1025009,0-2-0.8973999-2-2C44,32.8974991,44.8974991,32,46,32z"/>
                                            </g>
                                        </svg> 
                                        <span className='text-lg text-white font-semibold pl-4'>Buy now</span>
                                    </a>
                                    <a href="/" className='bg-white border border-solid border-Blue rounded-lg inline-flex items-center h-[45px] px-10'>
                                        <svg width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                            <g id="Wallet">
                                                <path fill='rgb(32, 129, 226)' d="M57.7901001,7H6.2100005c-3.4238999,0-6.2099996,2.7901001-6.2099996,6.2196999v3.9922009v29.5683994v4.0078011
                                                    C0.0000008,54.2128983,2.7871008,57,6.2119007,57h47.5762024c2.6661987,0,4.9391975-1.6922989,5.8182983-4.0564995
                                                    C62.3984985,52.6615982,64,50.4676018,64,46.7803001V13.2196999C64,9.7901001,61.2138977,7,57.7901001,7z M53.7881012,55H6.2119007
                                                    c-2.3222001,0-4.2118998-1.8895988-4.2118998-4.2118988v-4.0078011V17.2119007C2.0000007,14.8896999,3.8897007,13,6.2119007,13
                                                    h47.5762024C56.1104012,13,58,14.8896999,58,17.2119007V24H45.9482994C41.0136986,24,37,28.1231003,37,33.1913986v1.6182022
                                                    C37,39.8769989,41.0136986,44,45.9482994,44H58v6.7881012C58,53.1104012,56.1104012,55,53.7881012,55z M58,42H45.9482994
                                                    C42.1171989,42,39,38.7743988,39,34.8096008v-1.6182022C39,29.2255993,42.1171989,26,45.9482994,26H58V42z M62,46.7803001
                                                    c0,2.9328995-1.0900993,3.8256989-2.0046005,4.0984993C59.9958992,50.8483009,60,50.8186989,60,50.7881012V17.2119007
                                                    C60,13.7870998,57.2128983,11,53.7881012,11H6.2119007c-1.5956998,0-3.048295,0.6101999-4.1497002,1.6029997
                                                    C2.3630006,10.5697002,4.0994005,9,6.2100005,9h51.580101C60.1112976,9,62,10.8926001,62,13.2196999V46.7803001z"/>
                                                <path fill='rgb(32, 129, 226)' d="M42,34c0,2.2061005,1.7939987,4,4,4c2.2061005,0,4-1.7938995,4-4c0-2.2059994-1.7938995-4-4-4
                                                    C43.7939987,30,42,31.7940006,42,34z M46,32c1.1026039,0,2,0.8974991,2,2c0,1.1026001-0.8973961,2-2,2
                                                    c-1.1025009,0-2-0.8973999-2-2C44,32.8974991,44.8974991,32,46,32z"/>
                                            </g>
                                        </svg> 
                                        <span className='text-lg text-Blue font-semibold pl-4'>Make offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Price History</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="p-5 border-t border-solid border-Grey/20">
                                        <div className="no-item text-center py-8">
                                            <img className='m-auto' src="https://opensea.io/static/images/no-chart-data.svg" alt="" />
                                            <p className='pt-2'>No item activity yet</p>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Listings</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className=" border-t border-solid border-Grey/20">
                                        <div className="listing-table">
                                            <div className="table-inner">
                                                <div className="head flex items-center px-5 py-2">
                                                    <div className="price w-[20%] text-sm">Price</div>
                                                    <div className="usd-price w-[20%] text-sm">USD Price</div>
                                                    <div className="expiration w-[20%] text-sm">Expiration</div>
                                                    <div className="from w-[40%] text-sm">From</div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[20%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div><span className='font-semibold'>0.05</span> ETH</div>
                                                    <div className="usd-price w-[20%] text-sm">$156.37</div>
                                                    <div className="expiration w-[20%] text-sm">3 days</div>
                                                    <div className="from w-[40%] text-sm flex items-center justify-between">
                                                        <a href="/">CyberCatCaesar</a>
                                                        <a className='inline-block bg-white px-6 py-2 border border-solid border-Blue text-Blue rounded-lg' href="/">buy</a>
                                                    </div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[20%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div><span className='font-semibold'>0.05</span> ETH</div>
                                                    <div className="usd-price w-[20%] text-sm">$156.37</div>
                                                    <div className="expiration w-[20%] text-sm">3 days</div>
                                                    <div className="from w-[40%] text-sm flex items-center justify-between">
                                                        <a href="/">CyberCatCaesar</a>
                                                        <a className='inline-block bg-white px-6 py-2 border border-solid border-Blue text-Blue rounded-lg' href="/">buy</a>
                                                    </div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[20%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div><span className='font-semibold'>0.05</span> ETH</div>
                                                    <div className="usd-price w-[20%] text-sm">$156.37</div>
                                                    <div className="expiration w-[20%] text-sm">3 days</div>
                                                    <div className="from w-[40%] text-sm flex items-center justify-between">
                                                        <a href="/">CyberCatCaesar</a>
                                                        <a className='inline-block bg-white px-6 py-2 border border-solid border-Blue text-Blue rounded-lg' href="/">buy</a>
                                                    </div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[20%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div><span className='font-semibold'>0.05</span> ETH</div>
                                                    <div className="usd-price w-[20%] text-sm">$156.37</div>
                                                    <div className="expiration w-[20%] text-sm">3 days</div>
                                                    <div className="from w-[40%] text-sm flex items-center justify-between">
                                                        <a href="/">CyberCatCaesar</a>
                                                        <a className='inline-block bg-white px-6 py-2 border border-solid border-Blue text-Blue rounded-lg' href="/">buy</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Properties</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="p-5 border-t border-solid border-Grey/20">
                                        <div className="no-item text-center py-8">
                                            <img className='m-auto' src="https://opensea.io/static/images/no-chart-data.svg" alt="" />
                                            <p className='pt-2'>No item activity yet</p>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="w-full mt-5">
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>Item Activity</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="border-t border-solid border-Grey/20">
                                    <div className="listing-table">
                                            <div className="table-inner">
                                                <div className="head flex items-center px-5 py-2">
                                                    <div className="price w-[25%] text-sm">Event</div>
                                                    <div className="usd-price w-[25%] text-sm">Price</div>
                                                    <div className="expiration w-[25%] text-sm">From</div>
                                                    <div className="from w-[25%] text-sm">To</div>
                                                    <div className="from w-[25%] text-sm">Date</div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>List</div>
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>0.05</div>
                                                    <div className="from w-[25%] text-sm">
                                                        <a href="/">CyberCatCaesar</a>
                                                    </div>
                                                    <div className="expiration w-[25%] text-sm"></div>
                                                    <div className="expiration w-[25%] text-sm">3 days ago</div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>List</div>
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>0.05</div>
                                                    <div className="from w-[25%] text-sm">
                                                        <a href="/">CyberCatCaesar</a>
                                                    </div>
                                                    <div className="expiration w-[25%] text-sm"></div>
                                                    <div className="expiration w-[25%] text-sm">3 days ago</div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>List</div>
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>0.05</div>
                                                    <div className="from w-[25%] text-sm">
                                                        <a href="/">CyberCatCaesar</a>
                                                    </div>
                                                    <div className="expiration w-[25%] text-sm"></div>
                                                    <div className="expiration w-[25%] text-sm">3 days ago</div>
                                                </div>
                                                <div className="item flex items-center border-t border-solid border-Grey/20 px-5 py-3">
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>List</div>
                                                    <div className="price w-[25%] text-sm flex items-center"><div className="img w-3 mr-2"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>0.05</div>
                                                    <div className="from w-[25%] text-sm">
                                                        <a href="/">CyberCatCaesar</a>
                                                    </div>
                                                    <div className="expiration w-[25%] text-sm"></div>
                                                    <div className="expiration w-[25%] text-sm">3 days ago</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
                <div className="w-full">
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center"><ExploreIcon /><span className='inline-block pl-3 font-semibold text-Dark'>More From This Collection</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="p-5 border-t border-solid border-Grey/20">
                                        <div className="similar-items flex overflow-x-auto">
                                            {NFTs.map((item) => (
                                                <div className="item px-2" key={item.id}><NFTItem detail={item} /></div>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
