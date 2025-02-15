import React from 'react'
import MiamiDadeCounty from '@/components/sections/MiamiDadeCounty'
import County from '@/components/sections/County'

const Body = () => {
    return (
        <div className="space-y-10">
            <County sectionTitle="Broward County" />
            <MiamiDadeCounty />
            <County sectionTitle="Broward County" />
            <County sectionTitle="Monroe County" />
        </div>
    )
}

export default Body
