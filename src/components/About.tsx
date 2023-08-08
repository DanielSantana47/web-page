import { Button } from "./Button"
import { Team } from "./team"

export const About = ()=> {
    return(
        <section id="About" className="mb-28 bg-zinc-800 text-zinc-300">
            <div className="container mx-auto w-full h-full grid grid-cols-1 xl:grid-cols-2">
                <div className="text-left xl:text-right px-8 md:px-32 mb-16">
                    <h3 className="font-thin text-4xl md:text-5xl mb-12">CREATIVE AND PROFESSIONAL</h3>
                    <p className="mb-8 md:text-base text-sm">Et veniam dicta quo aspernatur sint At Quis sapiente ea provident libero et sunt sapiente et veniam perspiciatis ab corrupti quibusdam. Sed voluptas impedit cum quia velit ut porro molestias. Eum odio ducimus est dolorum corrupti vel magnam blanditiis. Ut assumenda quia cum asperiores optio eos esse eveniet ad temporibus quia qui consequuntur consequatur ad voluptates voluptatem et odit consequatur.</p>
                    <p className="mb-8 md:text-base text-sm">Ut culpa possimus in sunt rerum quo suscipit sequi et earum quis cum commodi impedit At architecto galisum quo culpa voluptatem. Qui ratione nulla eum reiciendis itaque et molestiae veniam ut nisi voluptas et nulla repellat. A incidunt nobis 33 doloremque earum non nemo voluptatem qui laborum animi et repellat laborum.</p>
                    <p className="mb-8 md:text-base text-sm">Et debitis numquam ut aliquid error est aliquid sapiente est omnis neque! Ut laudantium quas et aliquam error eum sunt natus rem exercitationem voluptatem et dolores atque aut omnis doloremque. Ut totam magnam eum possimus illum qui quibusdam delectus. Et reiciendis error est saepe consectetur sit atque voluptatibus sit aperiam laboriosam in enim rerum ea corrupti fugiat.</p>
            <Button text="READ MORE"/>
                </div>

                <div className="px-8 md:px-32 xl:px-0">
                <h3 className="font-thin text-4xl md:text-5xl mb-8 sm:mb-12 lg:mb-20">Our Team</h3>
                    <Team name="SURNAME" src="https://i.pinimg.com/736x/ee/ab/58/eeab58a82ccf41f5c12419ec08ada5eb.jpg" position="Manager" description="Lorem ipsum dolor sit amet. Est dolorem nisi et rerum minus vel blanditiis impedit qui numquam vero sit facilis quis."/>
                    <Team name="SURNAME" src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130271/fotografia-para-escritorios-de-advocacia_retrato-profissional-de-advogados-18.jpg" position="Graphics Designer" description="Lorem ipsum dolor sit amet. Est dolorem nisi et rerum minus vel blanditiis impedit qui numquam vero sit facilis quis."/>
                    <Team name="SURNAME" src="https://i.pinimg.com/550x/b1/9a/17/b19a17f28f4e0b7641ef62d8690f7dd5.jpg" position="Web Designer" description="Lorem ipsum dolor sit amet. Est dolorem nisi et rerum minus vel blanditiis impedit qui numquam vero sit facilis quis."/>
                </div>
            </div>
        </section>
    )
}