'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { navItem } from '../../../public/NavItem'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="absolute w-full my-6">
            <div className="w-11/12  lg:w-3/4 mx-auto relative z-50 font-poppins font-semibold text-white">
                <nav className="flex items-center justify-between">
                    {/*Logo*/}
                    <Image
                        height={64}
                        width={80}
                        src={'/logo.png'}
                        alt={'Logo'}
                        className="h-10 w-12 md:h-12 md:w-14 lg:h-16 lg:w-[72px]"
                    />

                    {/*Menubar*/}
                    <div className="flex items-center justify-between md:gap-8 lg:gap-12">
                        <div className="hidden md:block">
                            <div className="flex gap-5 lg:gap-7 xl:gap-8 list-none">
                                {navItem.map((item, index) => (
                                    <>
                                        <li
                                            key={index}
                                            className="hover:bg-white hover:w-full text-center rounded  hover:text-primary py-1 hover:px-2"
                                        >
                                            <a href="#">{item.title}</a>
                                        </li>
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/*Hamburger Menu*/}
                            <div
                                className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center bg-secondary bg-opacity-5 border border-gray-400"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <RxHamburgerMenu className="text-2xl" />
                            </div>

                            {/*Right Button - Mobile Device*/}
                            <div className="md:hidden ">
                                <select className="appearance-none outline-none cursor-pointer text-xl font-normal border bg-transparent border-primary  h-10 w-10 text-center font-nunito">
                                    <option className="bg-primary">ES</option>
                                    <option className="bg-primary">ESP</option>
                                </select>
                            </div>

                            {/*Right Button*/}
                            <div className="hidden md:block relative ">
                                <select className="appearance-none outline-none bg-primary w-14 h-10 pl-2 text-sm rounded-[10px] ">
                                    <option>ES</option>
                                    <option>ESP</option>
                                </select>
                                <span className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-xl text-black pointer-events-none">
                                    <MdKeyboardArrowDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                {isOpen && (
                    <div className="absolute top-14 left-0 w-full md:hidden">
                        <div className="font-semibold list-none  py-3 bg-primary bg-opacity-60 rounded-lg flex flex-col justify-between items-center gap-2">
                            {navItem.map((item, index) => (
                                <>
                                    <li
                                        key={index}
                                        className="w-full text-center"
                                    >
                                        <a
                                            href="#"
                                            className="block hover:bg-white  hover:text-black py-2 cursor-pointer"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                </>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
