import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { MdArrowOutward } from 'react-icons/md'

const Card = ({ cardImage, cardTitle }) => {
    return (
        <div>
            <div
                className={
                    'border border-secondary rounded-lg p-6 flex flex-col gap-4 bg-secondary bg-opacity-30'
                }
            >
                <Image
                    src={cardImage}
                    alt={''}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={'rounded-3xl w-auto h-64'}
                ></Image>

                <div className={'flex   items-center justify-between'}>
                    <h5 className={'text-[22px] font-bold'}>{cardTitle}</h5>
                    <div className={'p-2 bg-secondary rounded-lg'}>
                        <MdArrowOutward></MdArrowOutward>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    cardImage: PropTypes.string,
    cardTitle: PropTypes.string,
}

export default Card
