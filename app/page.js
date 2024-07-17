"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodlist from './foodList';
import ImageCarousel from './header_slider';
import MainContainer from './main_container';

const Page = () => {
    return (
        <div className='container'>
            <Foodlist />
            <ImageCarousel />
            <MainContainer />
        </div>
    );
};

export default Page;
