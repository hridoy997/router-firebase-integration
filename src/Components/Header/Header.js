import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Header = () => {
    const {user, handelSignOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ? 
                    <button onClick={handelSignOut}>Sing Out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;