'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import NavItems from '../../../public/NavItems'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="absolute w-full my-6">
            <div className="w-11/12 lg:w-3/4 mx-auto">
                <nav className=" flex items-center justify-between">
                    {/*Logo*/}
                    <Image
                        height={64}
                        width={64}
                        src={'/logo.png'}
                        alt={'Logo'}
                    />

                    {/*Menubar*/}
                    <div className="flex items-center justify-between gap-14">
                        <div className=" hidden md:block ">
                            <div className="flex gap-4 lg:gap-6 text-[16px] font-semibold list-none">
                                <NavItems />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center bg-secondary bg-opacity-10 text-white border border-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <RxHamburgerMenu className="text-2xl" />
                            </div>

                            <div className="md:hidden">
                                <select className="appearance-none outline-none text-2xl border bg-transparent border-primary text-white h-10 w-10 text-center">
                                    <option>ES</option>
                                    <option>ESP</option>
                                </select>
                            </div>

                            <div className="hidden md:block relative font-semibold ">
                                <select className=" appearance-none outline-none bg-primary text-white py-1 w-16 pl-2 text-lg rounded-lg ">
                                    <option className="text-black">ES</option>
                                    <option>ESP</option>
                                </select>
                                <span className="absolute right-0.5 top-1/2 transform -translate-y-1/2 text-2xl font-semibold pointer-events-none">
                                    <MdKeyboardArrowDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                {isOpen && (
                    <div className="absolute top-20 left-0 w-full">
                        <div className="font-semibold list-none mx-6 py-6 bg-primary bg-opacity-80 text-white rounded-[10px] flex flex-col justify-between items-center gap-4">
                            <NavItems />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
