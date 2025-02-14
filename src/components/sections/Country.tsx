'use client'
import React, { useState } from 'react'
import Card from '@/components/card/Card'
import { GoArrowDownRight } from 'react-icons/go'
import { MdArrowOutward } from 'react-icons/md'
import { FaArrowDownWideShort } from 'react-icons/fa6'
import { LuArrowDownUp } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'

const Country = () => {
    const countries = [
        {
            id: 1,
            image: '/country/Miami-DadeCounty.jpg',
            title: 'Miami-Dade County',
        },
        {
            id: 2,
            image: '/country/Brickell.jpg',
            title: 'Brickell',
        },
        {
            id: 3,
            image: '/country/DowntownMiami.jpg',
            title: 'Downtown Miami',
        },
        {
            id: 4,
            image: '/country/Wynwood.jpg',
            title: 'Wynwood',
        },
        {
            id: 5,
            image: '/country/Edgewater.jpg',
            title: 'Edgewater',
        },
        {
            id: 6,
            image: '/country/DoralCentral.jpg',
            title: 'Doral Central',
        },
        {
            id: 7,
            image: '/country/MidBeach.jpg',
            title: 'Mid Beach',
        },
        {
            id: 8,
            image: '/country/SouthBeach.jpg',
            title: 'South Beach',
        },
        {
            id: 9,
            image: '/country/Miami.jpg',
            title: 'Miami',
        },
        {
            id: 10,
            image: '/country/FoundersPark.jpg',
            title: 'Founders Park',
        },
        {
            id: 11,
            image: '/country/DoraiCentralPark.jpg',
            title: 'Dorai Central Park',
        },
    ]

    let [minimized, setMinimized] = useState(false)
    console.log(minimized)

    const handleExpand = () => {
        setMinimized(true)
    }

    const handleCollapse = () => {
        setMinimized(false)
    }

    return (
        <div>
            <div className="flex items-center justify-between py-2 border-b">
                <h5 className={'text-[22px] font-bold'}>Miami Dade Country</h5>
                <div>
                    {minimized ? (
                        <div className="flex items-center gap-6">
                            <FiSearch />
                            <LuArrowDownUp />
                            <FaArrowDownWideShort />
                            <div
                                className={'p-2 bg-secondary rounded-lg w-fit'}
                            >
                                <MdArrowOutward onClick={handleCollapse} />
                            </div>
                        </div>
                    ) : (
                        <div
                            className={
                                'p-2 bg-primary rounded-lg w-fit text-white'
                            }
                        >
                            <GoArrowDownRight onClick={handleExpand} />
                        </div>
                    )}
                </div>
            </div>
            <div>
                {minimized ? (
                    <>
                        <div
                            className={
                                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                            }
                        >
                            {countries.map((country) => {
                                return (
                                    <Card
                                        key={country.id}
                                        cardImage={country.image}
                                        cardTitle={country.title}
                                    />
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Country
