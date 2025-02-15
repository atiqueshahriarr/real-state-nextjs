'use client'
import React, { useState } from 'react'
import Card from '@/components/card/Card'
import { GoArrowDownRight } from 'react-icons/go'
import { MdArrowOutward } from 'react-icons/md'
import { FaArrowDownWideShort } from 'react-icons/fa6'
import { LuArrowDownUp } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'
import { miamiDadeCountyPlaces } from '../../../public/MiamiDadeCountyPlaces'

const MiamiDadeCounty = () => {
    const [isMinimized, setIsMinimized] = useState(false)

    return (
        <div>
            <div
                className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-2
            font-bold relative md:static"
            >
                <h5 className="text-[22px]">Miami Dade County</h5>
                {isMinimized ? (
                    <div className="flex items-center gap-6">
                        <FiSearch className="cursor-pointer" />
                        <LuArrowDownUp className="cursor-pointer" />
                        <FaArrowDownWideShort className="cursor-pointer" />
                        <div
                            className={
                                'bg-secondary rounded-lg absolute top-0 right-0 md:static '
                            }
                        >
                            <MdArrowOutward
                                className="p-[10px] text-[40px] cursor-pointer"
                                onClick={() => setIsMinimized(false)}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            'bg-primary rounded-lg text-white absolute top-0 right-0 md:static'
                        }
                    >
                        <GoArrowDownRight
                            className="p-[10px] text-[40px] cursor-pointer"
                            onClick={() => setIsMinimized(true)}
                        />
                    </div>
                )}
            </div>
            <div>
                {isMinimized && (
                    <>
                        <div
                            className={
                                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'
                            }
                        >
                            {miamiDadeCountyPlaces.map((place) => {
                                return (
                                    <Card
                                        key={place.id}
                                        cardImage={place.image}
                                        cardTitle={place.title}
                                    />
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MiamiDadeCounty
