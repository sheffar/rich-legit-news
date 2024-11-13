import { Link } from "react-router-dom"
import { Ads } from "../Ads"
import { useEffect, useState } from "react"
export const Tech = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)


    const call = async () => {
        try {
            const request = await fetch("https://strender.vercel.app/api/categories/post?category_id=27e3d94c-2462-4e7e-9840-efe7604ffcab")

            const response = await request.json()

            if (request.ok) {
                setApiData(response.data.posts)

                console.log(response.data.posts);
            } else {
                console.log(request)
            }

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        call()
    }, [])
    return (


        <div className=" bg-black">
            {/* <Ads /> 
             <div id="banner"></div> */}
            <p className="text-white w-full  flex items-center gap-5 px-4 md:px-10 py-2 text-[17px] font-semibold">Technology  <hr className="w-full h-[2px] bg-red-500 border-red-500" />  </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 md:px-20 gap-5 py-5 md:py-10   text-white">
                {apiData?.map((el, i) => (
                    <div key={i} className="shadow shadow-white group cursor-pointer rounded-md">
                        <div className="w-full h-[200px] bg-red border-[3px]   border-blue-200 rounded-lg">
                            <img src={el.img_url} alt="" className="w-full h-full group-hover:scale-105 duration-500 rounded-md object-cover bg-white" />

                        </div>
                        <div className="flex flex-col gap-4 p-2 ">
                            <p className="text-[17px] font-semibold">{el.title}</p>
                            <p>{el.summary.substring(0, 90) + "..."}</p>

                            <p onClick={() => Displanews(el.id)} className="text-yellow-400 font-bold border border-yellow-400 w-fit p-2 rounded-lg">Read More</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
