import React from 'react';
import './Login.css';
import { getAuth } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

    const [singInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    // let from = location.state?.from?.pathname || "/";
    const from = location?.state?.from?.pathname || '/';

    const handelGoogleSingIn = () => {
        singInWithGoogle()
        .then(() => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin: '20px'}}>
                {/* <button onClick={() => singInWithGoogle()}>Google Sing In</button> */}
                <button onClick={handelGoogleSingIn}>Google Sing In</button>
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