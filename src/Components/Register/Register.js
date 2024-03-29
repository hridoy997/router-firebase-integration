import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h3>please Register</h3>
            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;