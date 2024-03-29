import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handelSignOut = () => {
        signOut(auth)
        .then(()=>{
            // setUser('');
        })
        .catch(error => {

        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])
    
    // return [user, setUser];
    return {user,
         singInWithGoogle, 
         handelSignOut, 

        };
}

export default useFirebase;