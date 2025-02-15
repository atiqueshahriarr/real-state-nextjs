import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div>
            {/*Banner Image*/}
            <div className="bg-[url(/bannerImage.jpg)] bg-cover min-h-screen bg-center bg-no-repeat text-white text-center font-bold font-poppins">
                {/*Banner Overlay*/}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/*Banner Content*/}
                <div className="relative flex flex-col min-h-screen justify-center items-center space-y-2 md:space-y-4 ">
                    <div className="flex items-center gap-2 ">
                        <Image
                            src={'/logo.png'}
                            alt={''}
                            height={24}
                            width={24}
                            className="h-3 w-4"
                        ></Image>
                        <p
                            className={
                                'text-sm md:text-md font-bold font-nunito'
                            }
                        >
                            Real State Agency
                        </p>
                    </div>
                    <h1
                        className={
                            'text-3xl md:text-6xl lg:text-8xl font-bold leading-8 lg:leading-[95px] max-w-sm md:max-w-xl lg:max-w-4xl'
                        }
                    >
                        Miami Real Estate Specialists
                    </h1>
                    <p
                        className={
                            'text-sm md:text-md max-w-sm md:max-w-xl lg:max-w-4xl mt-4 md:mt-6 font-normal leading-5 md:leading-7'
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
