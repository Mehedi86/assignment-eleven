import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();
    const registerHandler = e =>{
        e.preventDefault();
    }
    const handleGoogleSignIn = () =>{

    }
    return (
        <div className="flex justify-center mt-28">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Please Register</h2>
                <div className="card-body">
                    <form onSubmit={registerHandler} className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className="divider">OR</div>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn'><FaGoogle /> Continue with Google</button>
                    <p>Already have an account? <span onClick={() => navigate("/login")} className="text-red-400 cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;