import { Button } from "./Button"
import { MobileMenu } from "./MobileMenu"
import { PcMenu } from "./PcMenu"
import { Reveal } from "./Reveal"

export const Home = ()=> {
    return(
        <header id="Home" className=" text-white bg-no-repeat bg-center bg-cover bg-[url(https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg)]">    
            <PcMenu/>
            <MobileMenu/>
            <div className="w-full h-full flex flex-col justify-center bg-gradient-to-b from-transparent from-30% to-zinc-800 ">
            <Reveal>
                <div className="py-48 w-full xl:max-w-4xl px-8  md:px-32 xl:24 flex flex-col items-center">
                        <>
                            <h1 className="text-center text-6xl md:text-9xl font-bold mb-6">I AM DESIGNER</h1>
                            <h2 className="text-2xl md:text-3xl font-serif text-center font-semibold mb-8 md:mb-12"> <i>I Make Wonderful Things</i></h2>
                            <p className="md:text-lg text-justify text-md">Lorem ipsum dolor sit amet. Sit saepe reiciendis et enim architecto sed vero reiciendis ea nostrum culpa qui sint alias. Aut dolores soluta ad harum quis ex dolor repellat hic possimus iste sed tempore tempore cum fugit natus. Ut internos error sit quisquam doloribus aut ducimus tenetur. Sit ipsum minus rem dolores omnis est dolorem sunt est quod perspiciatis.</p>
                        </>
                    <Button text="READ MORE"/>
                </div>
                    </Reveal>
            </div>
        </header>
    )
}