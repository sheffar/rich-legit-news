import {  useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
export const Gridsection = () => {
    const [apiData, setApiData] = useState([])

    const navigate = useNavigate()

    const Displanews = (id) => {
        navigate("/display/" + id)
    }


    const call = async () => {
        try {
            const request = await fetch("https://strender.vercel.app/api/posts")

            const response = await request.json()

            if (request.ok) {
                setApiData(response.data)

            } else {
                console.log(request)
            }

        } catch (e) {
            console.log(e.message)
        }
    }


    useEffect(() => {
        call()
    }, [])
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 md:px-20 gap-5 bg-black py-20 text-white">
                {apiData.slice(0, 9).map((el, i) => (
                    <div key={i} className="shadow shadow-white group cursor-pointer rounded-md">
                        <div className="w-full h-[200px] bg-red border-[3px]   border-blue-200 rounded-lg">
                            <img src={el.img_url} alt="" className="w-full h-full group-hover:scale-105 duration-500 rounded-md object-cover bg-white" />

                        </div>
                        <div className="flex flex-col gap-4 p-2 ">
                            <p className="text-[17px] font-semibold">{el.title}</p>
                            <p>{el.summary.substring(0, 80) + "..."}</p>
                            {/* <p>sub headline</p> */}

                            <p onClick={() => Displanews(el.id)} className="text-yellow-400 font-bold border p-2 w-fit rounded-md border-yellow-500">Read More</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
