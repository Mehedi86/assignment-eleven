import React from 'react';
import useAuthInfo from '../hooks/useAuthInfo';
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuthInfo();
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result);
                const from = location?.state;
                navigate(from)
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