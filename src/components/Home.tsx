export const Home = ()=> {
    return(
        <header className="h-screen w-screen text-white bg-no-repeat bg-center bg-cover bg-[url(https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg)]">
            <div className="w-full h-full flex flex-col justify-center bg-gradient-to-b from-transparent from-30% to-zinc-800 ">
                <div className="max-w-4xl px-24 flex flex-col items-center">
                    <h1 className="text-center text-9xl font-bold mb-6">I AM DESIGNER</h1>
                    <h2 className="text-3xl font-serif font-semibold mb-12"> <i>I Make Wonderful Things</i></h2>
                    <p className="text-lg text-justify">Lorem ipsum dolor sit amet. Sit saepe reiciendis et enim architecto sed vero reiciendis ea nostrum culpa qui sint alias. Aut dolores soluta ad harum quis ex dolor repellat hic possimus iste sed tempore tempore cum fugit natus. Ut internos error sit quisquam doloribus aut ducimus tenetur. Sit ipsum minus rem dolores omnis est dolorem sunt est quod perspiciatis.</p>
                    <button className="bg-red-500 py-3 px-6 mt-8 rounded hover:bg-emerald-600 transition-all duration-300">READ MORE</button>
                </div>
            </div>
        </header>
    )
}