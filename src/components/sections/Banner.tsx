import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div>
            <div className="bg-[url(/bannerImage.jpg)] bg-cover min-h-screen bg-center bg-no-repeat">
                <div className="flex flex-col min-h-screen justify-center items-center text-white text-center ">
                    <div className="flex gap-2">
                        <Image
                            src={'/logo.png'}
                            alt={''}
                            height={24}
                            width={24}
                        ></Image>
                        <p className={'text-[16px] font-bold'}>
                            Real State Agency
                        </p>
                    </div>
                    <h1
                        className={
                            'text-8xl font-bold leading-[95px] max-w-6xl'
                        }
                    >
                        Miami Real Estate Specialists
                    </h1>
                    <p className={'text-[16px] max-w-2xl mt-6'}>
                        your specialists in residential and commercial
                        properties. From dream homes to prime business spaces,
                        trust our unique expertise to guide you in Miami/South
                        Florida's dynamic market
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
