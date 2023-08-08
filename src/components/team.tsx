type TeamProps = {
    name: string,
    src: string,
    position: string,
    description: string
}

export const Team = ({name, src, position, description}: TeamProps)=> {
    return(
        <div className="flex flex-col items-center justify-center mb-8 md:flex-row">
        <div className={`w-44 h-44 flex items-center justify-center rounded-full overflow-hidden box-border`}>
            <img className=" w-36 h-36 object-cover object-center rounded-full" src={src} alt="" />
        </div>
            <div className="ml-8">
                <h4 className="text-lg text-center md:text-start">NAME: {name}</h4>
                <h5 className="text-lg text-center md:text-start mb-4 md:mb-0">{position}</h5>
                <p className="text-sm w-full">{description}</p>
            </div>
        </div>
    )
}