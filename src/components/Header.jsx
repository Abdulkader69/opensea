import React from 'react';

const Header = () => {
    return (
        <header className="App-header fixed top-0 w-full h-[72px] px-7 flex items-center justify-between shadow-lg bg-white z-[9999]">
            <div className="logo flex items-center justify-start text-2xl font-bold text-Dark">
                <img src="https://opensea.io/static/images/logos/opensea.svg" alt="logo" className="mr-2 w-10" />
                OpenSea
            </div>
        </header>
    );
}

export default Header;
