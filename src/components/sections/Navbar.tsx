

import React from "react";
import Image from "next/image";


const Navbar = () => {


    const navItems = (
        <>
            <li>
                <a
                    href="#"
                    >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#"
                    >
                    About
                </a>
            </li>
            <li>
                <a
                    href="#"
                    >
                    Skills
                </a>
            </li>
            <li>
                <a
                    href="#"
                    >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#"
                    >
                    Education
                </a>
            </li>
        </>
    );

    return (
        <div >
            <div className="bg-white">
                <div className="navbar navbarAnimation top-0 md:top-0">
                    <div className="w-4/5 mx-auto flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {navItems}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">
                                <Image
                                    height={32}
                                    width={32}
                                    src={"/myPhoto.jpg"}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">{navItems}</ul>
                        </div>
                        <div className="">
                            <a className="btn">Theme</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
