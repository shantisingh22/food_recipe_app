// "use client"
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Foodlist from './foodList';
// import DummyData from './recipeData';
// import ImageCarousel from './header_slider';
// import MainContainer from './main_container';
// import Header from './header';
// const Page = () => {
//     return (
//         <div className='container'>
//             <Header />  
//             <Foodlist />
//             <ImageCarousel />
//             <MainContainer />
//         </div>
//     );
// }

// export default Page;


"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './singIn/page';
import Foodlist from './foodList';
import DummyData from './recipeData';
import ImageCarousel from './header_slider';
import MainContainer from './main_container';
import Header from './header';

const Page = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    return (
        <div className='container'>
            {isSignedIn ? (
                <>
                    <Header />  
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