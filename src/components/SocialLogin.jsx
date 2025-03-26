import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn } = useAuthInfo();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result);
            })
            .catch(error => {
                console.log("Error", error.message)
            })
    }
    return (
        <button onClick={handleGoogleSignIn} className='btn'><FaGoogle /> Continue with Google</button>
    );
};

export default SocialLogin;