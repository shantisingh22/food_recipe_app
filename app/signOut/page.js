// ExampleComponent.js
import React from 'react';
import { useNavigation } from 'next/navigation'; // Import useNavigation from next/navigation

const SignOut = () => {
    const navigation = useNavigation(); // Initialize useNavigation

    const handleSignOut = () => {
        // Simulate sign-out logic (e.g., clear session, update state)
        console.log("User signed out");
        // Navigate to sign-in page after sign-out
        navigation.navigate('/signIn');
    };

    return (
        <div className="signout-container">
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default SignOut;
