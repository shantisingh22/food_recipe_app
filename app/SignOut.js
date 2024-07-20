
const SignOut = () => {

    const handleSignOut = () => {
        console.log("User signed out");
    };
    return (
        <div className="signout-container">
            <button onClick={handleSignOut}>sign-Out</button>
        </div>
    );
};

export default SignOut;