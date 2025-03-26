import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems =
        <>
            <NavLink>Home</NavLink>
            <NavLink>All Books</NavLink>
            <NavLink>Add Books</NavLink>
            <NavLink>Borrowed Books</NavLink>
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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;