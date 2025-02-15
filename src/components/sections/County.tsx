import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'
import PropTypes from 'prop-types'

const County = ({ sectionTitle }: { sectionTitle: string }) => {
    return (
        <div
            className="flex flex-row md:items-center justify-between border-b pb-4 gap-2
            font-bold "
        >
            <h5 className="text-[22px]">{sectionTitle}</h5>
            <div className={'bg-primary rounded-lg text-white'}>
                <GoArrowDownRight className="p-[10px] text-[40px]" />
            </div>
        </div>
    )
}
County.propTypes = {
    sectionTitle: PropTypes.string,
}

export default County
