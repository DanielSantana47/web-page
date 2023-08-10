import { Button } from "./Button"
import { Reveal } from "./Reveal"

export const Contact = ()=> {
    return(
        <footer id="Contact" className="relative bg-zinc-800 text-zinc-300">
            <div className="container mx-auto w-full h-full">
                <div className="w-32 h-32 bg-zinc-800 top-0 right-1/2 -mr-14 -mt-16 rounded-full absolute "></div>
                <div className="flex flex-col items-center">
                    <Reveal>
                        <h2 className="text-3xl mt-16 font-semibold mb-12 md:mb-24">GET IN TOUCH</h2>
                    </Reveal>
                    <Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 px-4">
                            
                                <input type="text" className=" py-2 px-4 flex-1 text-zinc-200 bg-zinc-500 rounded-md outline-none placeholder:text-zinc-200/50" placeholder="NAME"/>
                            
                                <input type="text"  className=" py-2 px-4 flex-1 text-zinc-200 bg-zinc-500 rounded-md outline-none placeholder:text-zinc-200/50" placeholder="EMAIL"/>
                                <textarea name="" id="" className="resize-none py-2 px-4 text-zinc-200 bg-zinc-500 rounded-md outline-none placeholder:text-zinc-200/50 md:col-span-2" placeholder="MESSAGE"></textarea>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="mb-24">
                            <Button text="SUBMIT"/>
                        </div>
                    </Reveal>

                </div>
            </div>
        </footer>
    )
}