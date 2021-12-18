// import Image from 'next/image'

const NavItems = [
    {
        text: "Maintainers Program"
    },
    {
        text: "Team"
    },
    {
        text: "Showcase"
    },
]

const Navbar = (props: any) => {
    return <>
        <div className="text-3xl  p-4 bg-stone-900	 flex">
            <div className="grow">
                <p className="font-bold text-white">
                    Tech Phantoms
                </p>
            </div>
            {
                NavItems && NavItems.map((item) => {
                    return <>
                        <div>
                            <p className="ml-4 p-2 mr-4 text-sm text-white 
                            hover:bg-orange-300
                            hover:rounded 
                            hover:text-black
                            hover:cursor-pointer">
                                {item.text}
                            </p>
                        </div>
                    </>
                })
            }
            <div>
                <p className=" bg-indigo-500 rounded ml-4 p-2 mr-4 text-sm text-white
                hover:bg-indigo-600
                hover:cursor-pointer
                ">
                    Join Discord
                </p>
            </div>
            <div>
                <p className="bg-lime-600 rounded ml-4 p-2 mr-4 text-sm text-white
                hover:bg-lime-700	
                hover:cursor-pointer
                ">
                    Join Github
                </p>
            </div>

        </div>
    </>
}
export default Navbar;