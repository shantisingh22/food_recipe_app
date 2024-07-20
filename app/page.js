"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import Login from './Components/Login';
import Foodlist from './Components/FoodList';
import ImageCarousel from './Components/Header_slider';
import MainContainer from './Components/Main_container';
import Header from './Components/Header';

const Page = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const signedIn = Cookies.get('isSignedIn');
        if (signedIn === 'true') {
            setIsSignedIn(true);
        }
    }, []);

    const handleSignIn = () => {
        setIsSignedIn(true);
        Cookies.set('isSignedIn', 'true', { expires: 7 });
    };

    const handleSignOut = () => {
        setIsSignedIn(false);
        Cookies.set('isSignedIn', 'false', { expires: 7 });
    };

    return (
        <div className='container'>
            {isSignedIn ? (
                <>
                    <Header  handleLogout={handleSignOut}/>
                    <Foodlist />
                    <ImageCarousel />
                    <MainContainer />
                </>
            ) : (
                <Login handleLogin={handleSignIn} />
            )}
        </div>
    );
}
export default Page;