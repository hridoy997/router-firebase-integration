import React from 'react';
import './Home.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Home</h2>
            <p>Current User is : {user? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;