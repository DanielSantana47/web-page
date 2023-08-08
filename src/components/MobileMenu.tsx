import { useState } from "react"
import { FiMenu } from "react-icons/fi"

export const MobileMenu = ()=> {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuButton = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectButton = ()=> {
        setIsOpen(false)
    }
    
    return(
        <nav className={`fixed right-0 top-0 w-2/3 bottom-0 bg-zinc-800/80 z-50 ${isOpen === false ? '-mr-[100vw]' : ''} transition-all duration-200 lg:hidden`}>
            <FiMenu onClick={handleMenuButton} className="fixed right-0 top-0 m-4 text-3xl"/>
            <ul className="w-full h-full flex flex-col items-end py-12 px-10 sm:px-16 gap-16 sm:text-xl text-lg text-center">
                <a onClick={handleSelectButton} className="hover:text-red-500 " href="#Home">HOME</a>
                <a onClick={handleSelectButton} className="hover:text-red-500 " href="#About">ABOUT US</a>
                <a onClick={handleSelectButton} className="hover:text-red-500 " href="#Works">SERVICES</a>
                <a onClick={handleSelectButton} className="hover:text-red-500 " href="#Contact">CONTACT US</a>
            </ul>
        </nav>
    )
}