"use client"
import React from 'react';
import { useNavigation } from 'next/navigation'; 

const SignOut = () => {
    const navigation = useNavigation(); 
    const handleSignOut = () => {
       
        console.log("User signed out");
  
        navigation.navigate('/signIn');
    };

    return (
        <div className="signout-container">
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default SignOut;
