import React, { useState } from "react";
import '../../Assets/CSS/style.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // const [Number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function registration() {
        if ((username.trim().length === 0) || (password.trim().length === 0) || (email.trim().length === 0)) {
            setNameErr(true);
        } else if (!email.includes('@') || !email.includes('.') || !email.includes('com')) {
            alert('Please enter a valid email address');
        } else if (password.length < 5) {
            alert('Please enter a password with more than five characters');
        } else {
            setNameErr(false);
            const user = { username: username, email: email, password: password };
            console.log(user);
            localStorage.setItem('user', JSON.stringify({ name: username, email: email, password: password }));
            window.location.href = '/login';
        }
    }

    return (
        <div className="register-body">
            <div className="register-main">
                <h1>Register</h1>
                {nameErr && <p className="error-message">Please fill every input field</p>}
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type='text' 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            className={nameErr ? 'input-error' : ''}
                        />
                    </div>
                    {/* Uncomment if phone number is needed */}
                    {/* <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type='number' 
                            id="phone" 
                            value={Number} 
                            onChange={(e) => setNumber(e.target.value)}
                            className={nameErr ? 'input-error' : ''}
                        />
                    </div> */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type='text' 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className={nameErr ? 'input-error' : ''}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className={nameErr ? 'input-error' : ''}
                        />
                    </div>
                    <label className="checkbox-container">
                        <input 
                            type="checkbox" 
                            checked={showPassword} 
                            onChange={() => setShowPassword(!showPassword)} 
                        />
                        <span className="checkmark"></span>
                        Show Password
                    </label>
                    <button type="button" onClick={registration}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
 