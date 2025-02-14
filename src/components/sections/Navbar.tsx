import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <a href="#"> Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Properties</a>
            </li>
            <li>
                <a href="#">Neighborhood</a>
            </li>
            <li>
                <a href="#">Blogs</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </>
    )

    return (
        <div className="w-3/4 mx-auto my-4 fixed">
            <div className="flex items-center justify-between">
                <div className="">
                    <Image
                        height={87}
                        width={85}
                        src={'/logo.png'}
                        alt={'Logo'}
                    ></Image>
                </div>
                <div className="flex items-center justify-between gap-14">
                    <div className="flex gap-12 text-[16px] font-semibold list-none text-white">
                        {navItems}
                    </div>
                    <div className={'text-[14px] font-semibold border-none '}>
                        <form>
                            <select
                                className={
                                    'bg-primary text-white py-2 px-4 rounded-[10px]'
                                }
                            >
                                <option>ES</option>
                                <option>ESP</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
