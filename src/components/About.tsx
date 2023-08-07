import { Team } from "./team"

export const About = ()=> {
    return(
        <section className="h-screen w-screen bg-zinc-800 text-white">
            <div className="w-full h-full grid grid-cols-2 gap-48">
                <div className="text-right">
                    <h3 className="font-thin text-4xl">CREATIVE AND PROFESSIONAL</h3>
                    <p>Et veniam dicta quo aspernatur sint At Quis sapiente ea provident libero et sunt sapiente et veniam perspiciatis ab corrupti quibusdam. Sed voluptas impedit cum quia velit ut porro molestias. Eum odio ducimus est dolorum corrupti vel magnam blanditiis. Ut assumenda quia cum asperiores optio eos esse eveniet ad temporibus quia qui consequuntur consequatur ad voluptates voluptatem et odit consequatur.</p>
                    <p>Lorem ipsum dolor sit amet. Est dolorem nisi et rerum minus vel blanditiis impedit qui numquam vero sit facilis quis. At esse fuga id perspiciatis quia ut laboriosam dolorem aut Quis nostrum et laborum ducimus.</p>
                </div>

                <div className="font-thin text-4xl">
                    <h3>Our Team</h3>
                    <Team name="SURNAME" src=""/>
                </div>
            </div>
        </section>
    )
}