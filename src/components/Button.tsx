type Props = {
    text: string
}

export const Button = ({text}: Props)=> {
    return(
        <button className="bg-red-500 py-3 px-6 mt-8 rounded hover:bg-emerald-600 transition-all duration-150">{text}</button>
    )
}