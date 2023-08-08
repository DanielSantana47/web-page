import { useState } from "react"
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export const PcMenu = ()=> {
    const [opacity, setOpacity] = useState(false)


    window.addEventListener('scroll', ()=> {
           if (window.scrollY > 0) {
                setOpacity(true)
            }
            if (window.scrollY === 0) {
                setOpacity(false)
            }
        })

        const handleBackButton = ()=> {
            window.scrollTo(0,0)
        }
    
    
    return(
        <nav className={`top-0 right-0 left-0 z-50   transition-all duration-500 hidden lg:block`}>
            <ul className={`flex text-xl justify-center h-16`}>
                <a href="#Home" className="px-3 h-full flex items-center bg-transparent text-zinc-300 hover:bg-red-500 transition-all duration-150 cursor-pointer">HOME</a>
                <a href="#About" className="px-3 h-full flex items-center bg-transparent text-zinc-300 hover:bg-red-500 transition-all duration-150 cursor-pointer">ABOUT US</a>
                <a href="#Works" className="px-3 h-full flex items-center bg-transparent text-zinc-300 hover:bg-red-500 transition-all duration-150 cursor-pointer">SERVICES</a>
                <a href="#Contact" className="px-3 h-full flex items-center bg-transparent text-zinc-300 hover:bg-red-500 transition-all duration-150 cursor-pointer">CONTACT US</a>
            </ul>
            <div><BsFillArrowUpCircleFill onClick={handleBackButton} className={`fixed bottom-0 right-0 m-8 z-50 text-red-500 text-3xl rounded-full ${opacity === false ? 'opacity-0': ''} transition-all duration-500`}/></div>
        </nav>
    )
}