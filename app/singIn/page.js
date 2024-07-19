import React from 'react';
import './style.css';

function SignInForm({ onSignIn }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSignIn();
    };

    return (
        <div className="signin-container d-flex justify-content-center align-items-center">
            <div className="signin-card card p-4">
                <div className="text-center">SIGN IN</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" required /><br/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" required /><br/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required /><br/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required /><br/>
                    </div>
                    <button type="submit" className="submit-btn">CONTINUE</button>
                </form>
                <div className="signup-option text-center mt-3">
                    <p className="text-muted">Sign up with</p>
                </div>
            </div>
        </div>
    );
}
export default SignInForm;  

