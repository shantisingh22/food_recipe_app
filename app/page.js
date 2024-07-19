"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import SignInForm from './singIn/page';
import Foodlist from './foodList';
import DummyData from './recipeData';
import ImageCarousel from './header_slider';
import MainContainer from './main_container';
import Header from './header';
import SignOutForm from './signOut/page'; 

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
                    <Header  onSignOut={handleSignOut}/>
                    <Foodlist />
                    <ImageCarousel />
                    <MainContainer />
                </>
            ) : (
                <SignInForm onSignIn={handleSignIn} />
            )}
        </div>
    );
}

export default Page;
