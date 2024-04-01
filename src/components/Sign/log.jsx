import React, { useState } from 'react';
import './log.css';

function LoginPage() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(prevState => !prevState);
    };

    return (
        <div className="login-page">
            <div className="form">
                <form className={showLoginForm ? "register-form" : "hidden"}>
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#" onClick={toggleForm}>Sign In</a></p>
                </form>
                <form className={showLoginForm ? "hidden" : "login-form"}>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p className="message">Not registered? <a href="#" onClick={toggleForm}>Create an account</a></p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
