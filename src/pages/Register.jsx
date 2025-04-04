import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin';
import useAuthInfo from '../hooks/useAuthInfo';
import useDynamicTitle from '../hooks/useDynamicTitle';
import Swal from 'sweetalert2';



const Register = () => {
    useDynamicTitle('Register');
    const navigate = useNavigate();
    const location = useLocation()
    const { createUser, updateUserProfile } = useAuthInfo();
    const [passwordError, setPasswordError] = useState('');

    const registerHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordValidationRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordValidationRegex.test(password)) {
            setPasswordError("Your password not fullful the criteria!! You need atleast 6 characters, minimum an uppercase and a lowercase");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result);
                const from = location?.state;
                navigate(from || '/');
                setTimeout(() => Swal.fire({
                    title: "Successfully Registered!",
                    icon: "success",
                    draggable: true
                }), 500)
                updateUserProfile({ displayName: name, photoURL: url })
                    .then(() => {
                        console.log('update successfull')
                    })
                    .catch(error => {
                        console.log("Error", error.message)
                    })
            })
            .catch(error => {
                console.log("Error", error.message)
            })

    }

    return (
        <div className="flex justify-center my-28 px-2">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center mt-6'>Please Register</h2>
                <div className="card-body">
                    <form onSubmit={registerHandler} className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" className="input" placeholder="Name" name="name" />
                        <label className="fieldset-label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" name="url" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        {passwordError && <p className="text-red-600">{passwordError}</p>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                        <div className="divider">OR</div>
                    </form>
                    <SocialLogin />
                    <p>Already have an account? <span onClick={() => navigate("/login")} className="text-red-400 cursor-pointer">Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;