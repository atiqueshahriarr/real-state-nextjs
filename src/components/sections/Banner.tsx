import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div>
            <div className="bg-[url(/bannerImage.jpg)] bg-cover min-h-screen bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative flex flex-col min-h-screen justify-center items-center text-white text-center ">
                    <div className="flex items-center gap-2">
                        <Image
                            src={'/logo.png'}
                            alt={''}
                            height={0}
                            width={0}
                            className="h-[13.5px] w-[15px]"
                        ></Image>
                        <p className={'text-[14px] md:text-[16px] font-bold'}>
                            Real State Agency
                        </p>
                    </div>
                    <h1
                        className={
                            ' text-3xl leading-8 md:text-8xl font-bold md:leading-[95px] max-w-sm md:max-w-6xl'
                        }
                    >
                        Miami Real Estate Specialists
                    </h1>
                    <p
                        className={
                            'text-sm md:text-md max-w-sm md:max-w-2xl mt-4 md:mt-6'
                        }
                    >
                        your specialists in residential and commercial
                        properties. From dream homes to prime business spaces,
                        trust our unique expertise to guide you in Miami/South
                        Florida&apos;s dynamic market
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
