import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';
import useAuthInfo from '../hooks/useAuthInfo';
import Swal from 'sweetalert2';
import useDynamicTitle from '../hooks/useDynamicTitle';

const Login = () => {
    useDynamicTitle('Login')
    const navigate = useNavigate();
    const { loginUser } = useAuthInfo();
    const location = useLocation();
    console.log(location)

    const loginHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result);
                const from = location?.state;
                setTimeout(() => navigate(from || '/'), 2000);
                
                setTimeout(() => Swal.fire({
                    title: "Successfully logged in!",
                    icon: "success",
                    draggable: true
                }), 500)
    })
            .catch (error => {
    console.log('Error', error.message)
})
    }

return (
    <div className="flex justify-center my-28 px-2">
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
                <SocialLogin />
                <p>Dont have an account? <span onClick={() => navigate("/register")} className="text-red-400 cursor-pointer">Register</span></p>
            </div>
        </div>
    </div>
);
};

export default Login;