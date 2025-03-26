import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    const loginHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const credit = { email, password }
        console.log(credit)
    }

    return (
        <div className="flex justify-center mt-28">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Please Login</h2>
                <div className="card-body">
                    <form onSubmit={loginHandler} className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin/>
                    <p>Dont have an account? <span onClick={() => navigate("/register")} className="text-red-400 cursor-pointer">Register</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;