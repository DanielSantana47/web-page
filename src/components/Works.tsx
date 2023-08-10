import { Reveal } from "./Reveal"

export const Works = ()=> {
    return(
        <section id="Works" className="relative bg-zinc-400 text-zinc-800">
            <div className=" container mx-auto w-full h-full">
                <div className="w-32 h-32 bg-zinc-400 top-0 right-1/2 -mr-14 -mt-16 rounded-full absolute "></div>
                <div className="flex flex-col items-center">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl text-center mt-16 font-semibold">WHAT WE DO</h2>
                    </Reveal>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 mt-12">
                    <Reveal>
                        <li className="w-36 text-center py-2 border border-zinc-800 rounded-md font-semibold">WEB DESIGN</li>
                    </Reveal>
                    <Reveal>
                        <li className="w-36 text-center py-2 border border-zinc-800 rounded-md font-semibold">LOGO DESIGN</li>
                    </Reveal>
                    <Reveal>
                        <li className="w-36 text-center py-2 border border-zinc-800 rounded-md font-semibold">BRADING</li>
                    </Reveal>
                    <Reveal>
                        <li className="w-36 text-center py-2 border border-zinc-800 rounded-md font-semibold">UI & UX</li>
                    </Reveal>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-16 px-3 md:px-24 mb-32">
                        <Reveal>
                            <div className="flex justify-center items-center"><img className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-md" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /></div>
                        </Reveal>
                        <Reveal>
                            <div className="flex justify-center items-center"><img className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-md" src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1103&q=80" alt="" /></div>
                        </Reveal>
                        <Reveal>
                            <div className="flex justify-center items-center"><img className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-md" src="https://images.unsplash.com/photo-1569323112699-e222ee4916e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /></div>
                        </Reveal>
                        <Reveal>
                            <div className="flex justify-center items-center"><img className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-md" src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /></div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}