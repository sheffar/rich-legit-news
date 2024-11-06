import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

import { useState } from "react"

export const Nav = () => {
    // const location = useLocation.path()
    
    // if(location)



    const [openMenu, setOPenMenu] = useState(false)

    const toggleMenu = () => setOPenMenu(!openMenu)


    return (
        <>
            < div className=" w-full bg-white text-black sticky  mb-4 top-0 z-10 right-0 flex py-4  justify-between items-center p-2 px-5 md:px-10 shadow-sm  shadow-black">

                <Link to={"/"}>
                    <p className="font-bold text-[20px] text-black text-md items-center"> <span className="font-bold text-xl text-yellow-400 mr-1 style">R</span>ich Ligit </p>
                </Link>

                <div className={` ${openMenu ? "block" : 'hidden md:flex'} bg-white   shadow-md shadow-black md:shadow-none  z-10 py-4 md:py-2  flex flex-col md:flex-row gap-8 absolute md:static top-16 w-full md:w-fit   right-0  md:gap-16 items-center justify-center`}>

                    <Link to={"/business"} className="flex items-center font-semibold text-sm gap-1 hover:scale-105 duration-300 mx-auto w-fit"> Business  </Link>
                    <Link to={"/technology"} className="flex items-center gap-1 font-semibold text-sm hover:scale-105 duration-300 mx-auto w-fit"> Technology </Link>
                    <Link to={"/sport"} className="flex items-center gap-1 hover:scale-105  font-semibold text-sm duration-300 mx-auto w-fit"> Sport  </Link>
                </div>
                <div className="flex z-10 md:z-0 md:hidden hover:text-orange-500 duration-300 " onClick={() => toggleMenu()}>
                    {openMenu ? <FaTimes className="text-xl cursor-pointer" /> : <FaBars className="text-xl cursor-pointer" />}
                </div>
            </div >



        </>
    )
}




