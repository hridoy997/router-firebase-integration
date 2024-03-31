import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth)
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user && 
                    <Link to='/vip'>VIP</Link>
                }
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ? 
                    
                    // <button onClick={() => signOut(auth)}>Sing Out</button>
                    
                    // <button onClick={async () => {
                    //     const success = await signOut();
                    //     if (success) {
                    //       alert('You are sign out');
                    //     }
                    //   }}>Sing Out</button>

                    <button onClick={() => signOut()}>Sing Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;