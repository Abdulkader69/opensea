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
        <div className='single-page pt-[72px] px-4'>
            <div className="w-full max-w-7xl m-auto flex flex-wrap-reverse lg:flex-wrap pt-5 md:pt-10 lg:pt-16">
                <div className="w-full lg:w-2/5">
                    <div className="image-wrapper hidden lg:block border border-solid border-Grey/20 rounded-xl mb-5">
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
                            <div className="title border-b border-solid border-Grey/20 p-3 lg:p-4 flex items-center">
                                <svg className='w-4 lg:w-6 h-4 lg:h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base'>Description</span>
                            </div>
                            <div className="content px-4 py-6 border-b border-solid border-Grey/20">
                            Created by <a href="/">CyberCatCaesar</a>
                            </div>
                        </div>
                        <div className="properties">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center">
                                            <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 285.39 285.39">
                                                <g>
                                                    <path d="M251.695,21.39h-73.25V5c0-2.761-2.238-5-5-5h-61.5c-2.762,0-5,2.239-5,5v16.39h-73.25c-8.272,0-15,6.729-15,15v234
                                                        c0,8.271,6.729,15,15,15h218c8.272,0,15-6.729,15-15v-234C266.695,28.119,259.966,21.39,251.695,21.39z M116.945,10h51.5
                                                        c0,11.862,0,20.918,0,32.78h-51.5C116.945,30.9,116.945,21.859,116.945,10z M256.695,270.39c0,2.757-2.243,5-5,5h-218
                                                        c-2.757,0-5-2.243-5-5v-234c0-2.757,2.243-5,5-5h73.25v16.39c0,2.761,2.238,5,5,5h61.5c2.762,0,5-2.239,5-5V31.39h73.25
                                                        c2.757,0,5,2.243,5,5V270.39z"/>
                                                    <path d="M105.695,81.39h-43c-2.762,0-5,2.239-5,5v43c0,2.761,2.238,5,5,5h43c2.762,0,5-2.239,5-5v-43
                                                        C110.695,83.628,108.456,81.39,105.695,81.39z M100.695,124.39h-33v-33h33V124.39z"/>
                                                    <path d="M226.695,124.39h-92c-2.762,0-5,2.239-5,5c0,2.761,2.238,5,5,5h92c2.762,0,5-2.239,5-5
                                                        C231.695,126.628,229.456,124.39,226.695,124.39z"/>
                                                    <path d="M105.695,172.39h-43c-2.762,0-5,2.239-5,5v43c0,2.761,2.238,5,5,5h43c2.762,0,5-2.239,5-5v-43
                                                        C110.695,174.628,108.456,172.39,105.695,172.39z M100.695,215.39h-33v-33h33V215.39z"/>
                                                    <path d="M226.695,215.39h-92c-2.762,0-5,2.239-5,5c0,2.761,2.238,5,5,5h92c2.762,0,5-2.239,5-5
                                                        C231.695,217.628,229.456,215.39,226.695,215.39z"/>
                                                </g>
                                            </svg>
                                            <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base text-left'>Properties</span></div>
                                            <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="p-5 border-b border-solid border-Grey/20">
                                            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
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
                                        <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center">
                                                <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 364.376 364.376">
                                                    <path d="M358.633,199.802c-1.618-10.077-5.551-20.594-12.381-33.104c-2.583-4.723-10.955-8.359-14.653-8.765
                                                    c-2.154-0.236-4.217,0.309-5.901,1.409c-1.222-5.169-3.699-11.464-8.065-21.5c-5.59-12.849-12.988-20.915-21.987-23.975
                                                    c-4.14-1.407-8.433-1.722-12.842-0.95c-0.273-2.896-0.494-5.607-0.625-8.048c-0.017-0.66-0.107-1.311-0.265-1.943
                                                    c-0.248-1.004-0.664-1.939-1.214-2.774c-0.795-1.211-1.886-2.239-3.222-2.963c-0.389-0.211-0.794-0.396-1.213-0.549
                                                    c-15.513-6.006-29.282-2.83-40.926,9.443c-11.02,11.612-11.773,30.813-12.573,51.151c-0.62,15.875-7.013,41.113-12.788,59.439
                                                    c-2.042,6.481-6.224,9.822-8.407,10.039c-0.859,0.081-1.757-0.73-2.688-2.42c-0.679-1.233-1.39-2.742-2.114-4.481
                                                    c-0.744-1.791-1.459-4.181-2.217-6.712c-1.293-4.323-2.76-9.222-5.117-13.764c-5.754-11.079-11.971-18.814-19.008-23.65
                                                    c-5.029-3.455-12.438-5.451-19.347-5.214c-6.055,0.212-11.431,2.688-15.545,7.159c-5.663,6.153-8.736,16.24-8.221,26.977
                                                    c0.289,6.09,3.652,17.561,5.75,22.477c4.224,9.89,7.166,17.835,10.011,25.521c6.751,18.223,12.582,33.961,25.301,52.587
                                                    c2.029,2.972,4.232,5.426,6.576,8.038c5.394,6.004,11.502,12.807,12.236,29.167c-0.003,0.154-0.006,0.31-0.006,0.463
                                                    c0,11.866,9.063,21.519,20.203,21.519h93.847c0.464,0,0.92-0.036,1.365-0.104c7.813-0.55,14.558-5.781,17.414-13.628
                                                    c3.774-10.321,7.599-21.06,11.371-31.921c3.415-9.839,7.205-20.969,11.264-33.081C355.412,247.542,362.45,224.774,358.633,199.802z
                                                    M325.579,279.922c-4.039,12.051-7.808,23.12-11.201,32.897c-3.739,10.768-7.531,21.414-11.276,31.656
                                                    c-0.461,1.268-1.295,1.846-1.874,1.846c-0.338,0-0.672,0.019-1.001,0.056h-92.842c-0.898,0-2.203-1.371-2.203-3.519l0.007-0.263
                                                    c0.006-0.213,0.005-0.426-0.003-0.639c-0.937-23.05-10.509-33.706-16.851-40.766c-2.005-2.234-3.737-4.164-5.094-6.15
                                                    c-11.473-16.801-16.687-30.874-23.287-48.688c-2.784-7.52-5.94-16.042-10.336-26.337c-1.719-4.027-4.185-13.297-4.325-16.267
                                                    c-0.277-5.765,1.124-11.363,3.486-13.93c0.849-0.922,1.697-1.315,2.926-1.358c0.171-0.006,0.342-0.009,0.514-0.009
                                                    c3.253,0,6.512,1.038,8.015,2.07c4.541,3.121,8.868,8.717,13.226,17.108c1.575,3.034,2.73,6.896,3.848,10.63
                                                    c0.855,2.857,1.739,5.812,2.841,8.462c0.974,2.342,1.971,4.444,2.966,6.251c4.534,8.233,11.913,12.478,20.237,11.651
                                                    c10.306-1.024,19.869-10.083,23.795-22.54c2.972-9.432,12.738-41.933,13.607-64.153c0.632-16.105,1.287-32.759,7.643-39.457
                                                    c5.186-5.466,10.146-7.529,16.249-6.505c0.362,4.209,0.852,8.771,1.36,13.503c1.757,16.376,3.945,36.757,1.167,49.251
                                                    c-4.797,21.566-9.056,40.371-12.6,52.075c-1.44,4.757,1.249,9.781,6.006,11.222c4.757,1.44,9.781-1.248,11.222-6.006
                                                    c3.731-12.324,7.892-30.674,12.942-53.383c2.975-13.375,1.651-31.066-0.058-47.689c2.877-0.808,4.507-0.256,5.168-0.031
                                                    c3.886,1.321,7.89,6.333,11.276,14.114c8.359,19.211,8.24,20.055,6.781,30.396c-0.237,1.693-0.567,3.605-1.009,5.838
                                                    c-1.215,6.117-2.301,12.061-3.352,17.809c-2.43,13.293-4.725,25.85-7.943,36.575c-1.429,4.761,1.272,9.778,6.033,11.207
                                                    c4.759,1.427,9.778-1.272,11.207-6.033c3.505-11.68,5.888-24.714,8.41-38.512c1.039-5.681,2.112-11.556,3.302-17.545
                                                    c0.509-2.574,0.895-4.813,1.177-6.833c0.16-1.135,0.305-2.205,0.431-3.222c0.893,0.509,1.887,0.871,2.952,1.05
                                                    c0.519,0.187,1.438,0.65,2.143,1.064c5.319,9.978,8.379,18.219,9.591,25.771C344.028,223.386,337.461,244.462,325.579,279.922z
                                                    M160.301,330.763c0.952,4.878-2.231,9.605-7.11,10.557c-7.847,1.531-15.919,2.308-23.993,2.308
                                                    c-68.645,0-124.491-55.847-124.491-124.491c0-66.071,63.041-146.363,104.756-199.494c4.489-5.717,8.729-11.117,12.612-16.145
                                                    C123.781,1.292,126.411,0,129.199,0c0.003,0,0.005,0,0.008,0c2.791,0.002,5.422,1.299,7.124,3.511
                                                    c3.982,5.174,8.375,10.78,13.026,16.715c18.482,23.585,41.484,52.937,61.064,83.797c2.663,4.197,1.419,9.758-2.778,12.421
                                                    c-4.197,2.663-9.759,1.419-12.421-2.778C176.121,83.562,153.426,54.6,135.189,31.33c-2.054-2.622-4.058-5.179-6.001-7.667
                                                    c-1.807,2.308-3.665,4.673-5.566,7.096C83.436,81.941,22.707,159.288,22.707,219.137c0,58.719,47.771,106.491,106.491,106.491
                                                    c6.918,0,13.831-0.665,20.545-1.975C154.619,322.701,159.349,325.884,160.301,330.763z M123.016,278.793
                                                    c4.947,0.484,8.565,4.886,8.081,9.833c-0.455,4.649-4.371,8.125-8.946,8.125c-0.293,0-0.589-0.014-0.887-0.043
                                                    c-19.829-1.939-38.171-11.146-51.649-25.923c-13.569-14.877-21.042-34.168-21.042-54.317c0-4.971,4.029-9,9-9s9,4.029,9,9
                                                    C66.574,248.851,90.839,275.646,123.016,278.793z"/>
                                                </svg>
                                                <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base  text-left'>About Cyber Cats Alliance (NFT)</span></div>
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
                                        <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 border-b border-solid border-Grey/20 text-base text-Dark font-semibold">
                                            <div className="left flex items-center">
                                                <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 366.521 366.521">
                                                    <rect x="69.746" y="212.654" width="30.855" height="30.858"/>
                                                    <path d="M85.172,123.011c8.521,0,15.429,6.905,15.429,15.426c0,8.521-6.909,15.43-15.429,15.43
                                                        c-8.518,0-15.426-6.909-15.426-15.43C69.746,129.917,76.654,123.011,85.172,123.011z"/>
                                                    <path d="M353.299,40.4H13.226C5.921,40.4,0,46.327,0,53.62v259.278c0,7.308,5.927,13.223,13.226,13.223h340.073
                                                        c7.301,0,13.222-5.915,13.222-13.223V53.625C366.521,46.327,360.6,40.4,353.299,40.4z M127.053,256.741
                                                        c0,7.302-5.915,13.223-13.226,13.223H56.521c-7.305,0-13.22-5.927-13.22-13.223v-57.31c0-7.302,5.921-13.223,13.22-13.223h57.307
                                                        c7.311,0,13.226,5.921,13.226,13.223V256.741z M85.172,180.324c-23.095,0-41.883-18.789-41.883-41.887
                                                        c0-23.082,18.789-41.877,41.883-41.877c23.097,0,41.88,18.789,41.88,41.877C127.053,161.535,108.27,180.324,85.172,180.324z
                                                            M310.004,261.88H184.047c-7.299,0-13.219-5.932-13.219-13.222c0-7.302,5.927-13.223,13.219-13.223h125.957
                                                        c7.313,0,13.223,5.921,13.223,13.223C323.227,255.949,317.317,261.88,310.004,261.88z M310.004,217.793H184.047
                                                        c-7.299,0-13.219-5.921-13.219-13.223s5.927-13.229,13.219-13.229h125.957c7.313,0,13.223,5.927,13.223,13.229
                                                        S317.317,217.793,310.004,217.793z M310.004,173.709H184.047c-7.299,0-13.219-5.915-13.219-13.223
                                                        c0-7.302,5.927-13.226,13.219-13.226h125.957c7.313,0,13.223,5.93,13.223,13.226C323.227,167.789,317.317,173.709,310.004,173.709
                                                        z M310.004,129.623H184.047c-7.299,0-13.219-5.93-13.219-13.223c0-7.305,5.927-13.226,13.219-13.226h125.957
                                                        c7.313,0,13.223,5.921,13.223,13.226C323.227,123.693,317.317,129.623,310.004,129.623z"/>
                                                </svg>
                                                <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base text-left'>Details</span></div>
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

                <div className="w-full lg:w-3/5 lg:pl-8">
                    <div className="title">
                        <div className="top flex items-start justify-between">
                            <a href="https://opensea.io/collection/cybercatsalliancenft" className='text-sm md:text-base'>Cyber Cats Alliance (NFT)</a>
                            <div className="menu border border-solid border-Grey/20 rounded-lg">
                                <a className='inline-flex items-center justify-center w-8 md:w-10 h-8 lg:h-10 border-r border-solid border-Grey/20' href="/">
                                    <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489.533 489.533">
                                        <path fill='rgb(112, 122, 131)' d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
                                            l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
                                            c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
                                            C49.575,418.961,150.875,501.261,268.175,488.161z"/>
                                    </svg>
                                </a>
                                <a className='inline-flex items-center justify-center w-8 md:w-10 h-8 lg:h-10 border-r border-solid border-Grey/20' href="/">
                                    <svg className='w-5 h-5' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                                            fill="rgb(112, 122, 131)"
                                        />
                                    </svg>
                                </a>
                                <a className='inline-flex items-center justify-center w-8 md:w-10 h-8 lg:h-10' href="/">
                                    <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 362.621 362.621">
                                        <path fill='rgb(112, 122, 131)' d="M288.753,121.491c33.495,0,60.746-27.251,60.746-60.746S322.248,0,288.753,0
                                            s-60.745,27.25-60.745,60.746c0,6.307,0.968,12.393,2.76,18.117l-126.099,76.937c-9.707-8.322-22.301-13.366-36.059-13.366
                                            c-30.596,0-55.487,24.891-55.487,55.487s24.892,55.487,55.487,55.487c10.889,0,21.047-3.165,29.626-8.606l101.722,58.194
                                            c-0.584,3.058-0.902,6.209-0.902,9.435c0,27.676,22.516,50.192,50.191,50.192s50.191-22.516,50.191-50.192
                                            s-22.516-50.191-50.191-50.191c-13.637,0-26.014,5.474-35.069,14.331l-95.542-54.658c3.498-7.265,5.46-15.403,5.46-23.991
                                            c0-5.99-0.966-11.757-2.73-17.166l125.184-76.379C257.488,114.959,272.368,121.491,288.753,121.491z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h1 className='md:pt-2 pb-5 text-2xl md:text-3xl font-semibold text-Dark'>Cyber Cat #5116</h1>
                        <div className="image-wrapper block lg:hidden border border-solid border-Grey/20 rounded-xl mb-5">
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
                        <div className="flex items-center mb-9">
                            <p className='pr-5 text-sm md:text-base'>Owned by <a href='/'>CyberCatCaesar</a></p>
                            <p className='flex text-sm md:text-base items-center'><LoveIcon /><span className='pl-2'>1 favorite</span></p>
                        </div>
                    </div>
                    <div className="info-wrapper border border-solid border-Grey/20 rounded-xl mb-5">
                        <div className="description">
                            <div className="title border-b border-solid border-Grey/20 p-4 flex items-center">
                                <span className='inline-block font-semibold text-Dark text-sm md:text-base text-left'>Sale ends March 30, 2022 at 12:06am +06 </span>
                            </div>
                            <div className="content px-4 py-6 border-b border-solid border-Grey/20">
                                <p className='pb-2 text-sm md:text-base'>Current price</p>
                                <div className="price flex items-end">
                                    <div className="symbol cursor-pointer">
                                        <div className="img w-3 md:w-5"><img src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" alt="symbol" /></div>
                                    </div>
                                    <div className="eth font-semibold text-xl md:text-2xl lg:text-3xl pl-2 -mb-1">0.05</div>
                                    <div className="dollar pl-2 text-sm md:text-base">($156.37)</div>
                                </div>
                                <div className="btn flex mt-4">
                                    <a href="/" className='bg-Blue rounded-lg inline-flex items-center h-9 md:h-[45px] px-3 md:px-10 mr-2 md:mr-5'>
                                        <svg className='w-4 md:w-6 h-4 md:h-6' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
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
                                        <span className='text-sm md:text-lg text-white font-semibold pl-2 md:pl-4'>Buy now</span>
                                    </a>
                                    <a href="/" className='bg-white border border-solid border-Blue rounded-lg inline-flex items-center h-9 md:h-[45px] px-3 md:px-10'>
                                        <svg className='w-4 md:w-6 h-4 md:h-6' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
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
                                        <span className='text-sm md:text-lg text-Blue font-semibold pl-2 md:pl-4'>Make offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center">
                                        <svg className='w-5 h-5' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><title>activity</title><path d="M12,29a1,1,0,0,1-.92-.62L6.33,17H2V15H7a1,1,0,0,1,.92.62L12,25.28,20.06,3.65A1,1,0,0,1,21,3a1,1,0,0,1,.93.68L25.72,15H30v2H25a1,1,0,0,1-.95-.68L21,7,12.94,28.35A1,1,0,0,1,12,29Z"/><rect fill='none' id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
                                        <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base text-left'>Price History</span></div>
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
                                    <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center">
                                            <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 285.39 285.39">
                                                <g>
                                                    <path d="M251.695,21.39h-73.25V5c0-2.761-2.238-5-5-5h-61.5c-2.762,0-5,2.239-5,5v16.39h-73.25c-8.272,0-15,6.729-15,15v234
                                                        c0,8.271,6.729,15,15,15h218c8.272,0,15-6.729,15-15v-234C266.695,28.119,259.966,21.39,251.695,21.39z M116.945,10h51.5
                                                        c0,11.862,0,20.918,0,32.78h-51.5C116.945,30.9,116.945,21.859,116.945,10z M256.695,270.39c0,2.757-2.243,5-5,5h-218
                                                        c-2.757,0-5-2.243-5-5v-234c0-2.757,2.243-5,5-5h73.25v16.39c0,2.761,2.238,5,5,5h61.5c2.762,0,5-2.239,5-5V31.39h73.25
                                                        c2.757,0,5,2.243,5,5V270.39z"/>
                                                    <path d="M105.695,81.39h-43c-2.762,0-5,2.239-5,5v43c0,2.761,2.238,5,5,5h43c2.762,0,5-2.239,5-5v-43
                                                        C110.695,83.628,108.456,81.39,105.695,81.39z M100.695,124.39h-33v-33h33V124.39z"/>
                                                    <path d="M226.695,124.39h-92c-2.762,0-5,2.239-5,5c0,2.761,2.238,5,5,5h92c2.762,0,5-2.239,5-5
                                                        C231.695,126.628,229.456,124.39,226.695,124.39z"/>
                                                    <path d="M105.695,172.39h-43c-2.762,0-5,2.239-5,5v43c0,2.761,2.238,5,5,5h43c2.762,0,5-2.239,5-5v-43
                                                        C110.695,174.628,108.456,172.39,105.695,172.39z M100.695,215.39h-33v-33h33V215.39z"/>
                                                    <path d="M226.695,215.39h-92c-2.762,0-5,2.239-5,5c0,2.761,2.238,5,5,5h92c2.762,0,5-2.239,5-5
                                                        C231.695,217.628,229.456,215.39,226.695,215.39z"/>
                                                </g>
                                            </svg>
                                            <span className='inline-block pl-3 font-semibold text-Darktext-sm lg:text-base text-left'>Listings</span>
                                        </div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="border-t border-solid border-Grey/20">
                                        <div className="listing-table overflow-auto">
                                            <div className="table-inner w-[600px] sm:w-full">
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
                                    <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center">
                                            <svg className='w-5 h-5' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><title>activity</title><path d="M12,29a1,1,0,0,1-.92-.62L6.33,17H2V15H7a1,1,0,0,1,.92.62L12,25.28,20.06,3.65A1,1,0,0,1,21,3a1,1,0,0,1,.93.68L25.72,15H30v2H25a1,1,0,0,1-.95-.68L21,7,12.94,28.35A1,1,0,0,1,12,29Z"/><rect fill='none' id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/></svg>
                                            <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base text-left'>Offers</span></div>
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
            </div>
            <div className="w-full max-w-7xl m-auto pb-16">
                <div className="w-full mt-5">
                    <div className='border border-solid border-Grey/20 rounded-xl mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center">
                                            <svg className="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 427.484 427.484">
                                                <path d="M405.943,290.254L302.096,425.338c-1.04,1.354-2.66,2.146-4.374,2.146c-1.702,0-3.321-0.798-4.368-2.146L189.511,290.254
                                                    c-0.769-0.993-1.144-2.176-1.144-3.357c0-1.152,0.364-2.329,1.108-3.322c1.499-1.975,4.125-2.707,6.434-1.809l68.76,27.166V21.01
                                                    c0-3.047,2.477-5.503,5.515-5.503h55.106c3.038,0,5.509,2.456,5.509,5.503v287.922l68.76-27.166
                                                    c2.305-0.898,4.93-0.166,6.419,1.809C407.473,285.561,407.461,288.28,405.943,290.254z M238.012,143.913
                                                    c0.744-0.993,1.105-2.167,1.105-3.322c0-1.176-0.379-2.367-1.142-3.36L134.125,2.148C133.081,0.792,131.458,0,129.759,0
                                                    c-1.714,0-3.328,0.798-4.377,2.148L21.539,137.23c-1.519,1.969-1.525,4.69-0.03,6.683c1.487,1.968,4.114,2.707,6.419,1.803
                                                    l68.766-27.163v287.919c0,3.05,2.462,5.509,5.506,5.509h55.109c3.041,0,5.515-2.459,5.515-5.509V118.552l68.763,27.163
                                                    C233.886,146.62,236.51,145.88,238.012,143.913z"/>
                                            </svg>
                                            <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base  text-left'>Item Activity</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="border-t border-solid border-Grey/20">
                                        <div className="listing-table overflow-auto">
                                            <div className="table-inner w-[600px] sm:w-full">
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
                                    <Disclosure.Button className="flex justify-between w-full p-3 lg:p-5 text-base text-Dark font-semibold">
                                        <div className="left flex items-center">
                                            <svg className='w-5 h-5' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 278 278">
                                                <rect x="0" y="0" width="119.054" height="119.054"/>
                                                <rect x="158.946" y="0" width="119.054" height="119.054"/>
                                                <rect x="158.946" y="158.946" width="119.054" height="119.054"/>
                                                <rect x="0" y="158.946" width="119.054" height="119.054"/>
                                            </svg>
                                            <span className='inline-block pl-3 font-semibold text-Dark text-sm lg:text-base text-left'>More From This Collection</span></div>
                                        <AngleDownIcon classes={`w-5 h-5 transition ease-in ${open ? 'transform rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="p-2 md:p-5 border-t border-solid border-Grey/20">
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
