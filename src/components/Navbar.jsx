import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuthInfo from '../hooks/useAuthInfo';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logoutUser } = useAuthInfo();
    console.log(user)

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log('user logged out successfully')
            })
            .catch(error => {
                console.log("Error", error.message)
            })
    }
    const navItems =
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/allBooks'>All Books</NavLink>
            <NavLink to='/addBook'>Add Books</NavLink>
            <NavLink to='/borrowBook'>Borrowed Books</NavLink>
        </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                {/* website logo */}
                <div className='flex justify-center ml-2 md:ml-0'>
                    <img className='w-10' src="/li-logo.png" alt="" />
                    <h2 className='text-4xl pb-1'>Edulab</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* login Info conditional rendering */}

                {user ? <>
                    <div className='flex flex-col items-center'>
                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={user?.displayName}>
                            <img className='w-6 rounded-full' src={user?.photoURL} alt="user" />
                        </a>
                        <button onClick={handleLogout} className='cursor-pointer font-semibold'>Logout</button>
                    </div>
                    <Tooltip id='my-tooltip' />
                </>
                    :
                    <>
                        <div className='space-x-2'>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/register'>Register</NavLink>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;