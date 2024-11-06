import { Link, useNavigate } from "react-router-dom"
import image from "../../assets/pad.jpeg"
import { useEffect, useState } from "react"
import Spinner from "../Spinner"
export const Sport = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)

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

                console.log(response.data);
            } else {
                console.log(request)
            }

        } catch (e) {
            console.log(e.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        call()
    }, [])
    return (
        <div className=" bg-black">

            <p className="text-white w-full  flex items-center gap-5 px-4 md:px-10 py-2 text-[17px] font-semibold">Sport  <hr className="w-full h-[2px] bg-red-500 border-red-500" />  </p>
            {loading ? <Spinner loading={loading} /> :
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
            }


        </div>
    )
}
