import Navbar from '@/components/sections/Navbar'
import Banner from '@/components/sections/Banner'

import Body from '@/components/sections/Body'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="w-11/12  lg:w-3/4 mx-auto my-10 mb-60">
                <Body />
            </div>
        </div>
    )
}
