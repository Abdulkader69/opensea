import React from 'react';
import Assets from './Assets';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import SinglePage from './singlePage';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Assets/> } />
                <Route path="single" element={ <SinglePage/> } />
            </Routes>
        </>
    );
}

export default App;
