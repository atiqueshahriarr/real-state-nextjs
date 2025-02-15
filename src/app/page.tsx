import Navbar from '@/components/sections/Navbar'
import Banner from '@/components/sections/Banner'
import Country from '@/components/sections/Country'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="w-3/4 mx-auto">
                <Country />
            </div>
        </div>
    )
}
