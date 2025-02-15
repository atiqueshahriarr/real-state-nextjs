import Navbar from '@/components/sections/Navbar'
import Banner from '@/components/sections/Banner'
import MiamiDadeCounty from '@/components/sections/MiamiDadeCounty'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="w-11/12  lg:w-3/4 mx-auto my-10 mb-60">
                <MiamiDadeCounty />
            </div>
        </div>
    )
}
