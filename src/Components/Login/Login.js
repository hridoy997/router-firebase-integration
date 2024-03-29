import React from 'react';
import './Login.css';
import useFirebase from '../../Hooks/UseFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
                <button onClick={singInWithGoogle}>Google Sing In</button>
            </div>
            <form >
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Log-In" />
            </form>
        </div>
    );
};

export default Login;