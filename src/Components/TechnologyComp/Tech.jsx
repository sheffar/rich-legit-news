import { Link } from "react-router-dom"
import image from "../../assets/pad.jpeg"
export const Tech = () => {
    const array = [1, 2, 3, 4, 5, 6]
    return (

        
        <div className=" bg-black">
            <p className="text-white w-full  flex items-center gap-5 px-4 md:px-10 py-2 text-[17px] font-semibold">Technology  <hr className="w-full h-[2px] bg-red-500 border-red-500"/>  </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 md:px-20 gap-5 py-5 md:py-10   text-white">
                {array.map((el, i) => (
                    <div key={i} className="shadow shadow-white group cursor-pointer rounded-md">
                        <div className="w-full h-[200px] bg-red border-[3px]   border-blue-200 rounded-lg">
                            <img src={image} alt="" className="w-full h-full group-hover:scale-105 duration-500 rounded-md object-cover bg-white" />

                        </div>
                        <div className="flex flex-col gap-4 p-2 ">
                            <p className="text-[17px] font-semibold">Real madrid hero to produce familiar champions league story</p>
                            <p>sub headline</p>

                            <Link className="text-yellow-400 font-bold">Read More</Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
