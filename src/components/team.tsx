type TeamProps = {
    name: string,
    src: string,
    position: string,
    description: string
}

export const Team = ({name, src, position, description}: TeamProps)=> {
    return(
        <div className="flex items-center justify-center">
            <div className={`w-20 h-20 bg-cover bg-center bg-[(${src})]`}></div>
            <div>
                <h4>NAME: {name}</h4>
                <h5>{position}</h5>
                <p>{position}</p>
            </div>
        </div>
    )
}