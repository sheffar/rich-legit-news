import { Link, useNavigate } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { Ads } from "../Ads.jsx"
import { useEffect, useState } from "react"
import Spinner from "../Spinner.jsx"
export const News = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const links = [
        {
            name: "News",
            to: '/news'
        }
        ,
        {
            name: "Sport",
            to: '/sport'
        },
        {
            name: "war",
            to: '/war'
        }
    ]
    const call = async () => {
        try {
            setLoading(true)
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

    const Displanews = (id) => {
        navigate("/display/" + id)
    }

    useEffect(() => {
        call()
    }, [])




    return (
        <div className=" bg-black">
            {/*             
            <Ads />
            <div id="banner"></div> */}
            <p className="text-white w-full  flex items-center gap-5 px-4 md:px-10 py-2 text-[17px] font-semibold">News  <hr className="w-full h-[2px] bg-red-500 border-red-500" />  </p>
            {loading ? <Spinner loading={loading} /> :
                <div className="grid sm:grid-cols-2 md:grid-cols-3 px-4 md:px-20 gap-5 py-5 md:py-10   text-white">
                    {apiData?.map((el, i) => (
                        <div key={i} className="shadow shadow-white group cursor-pointer rounded-md">
                            <div className="w-full h-[200px] bg-red border-[3px]   border-blue-200 rounded-lg">
                                <img src={el.img_url} alt="" className="w-full h-full group-hover:scale-105 duration-500 rounded-md object-cover bg-white" />

                            </div>
                            <div className="flex flex-col gap-4 p-2 ">
                                <p className="text-[17px] font-semibold">{el.title}</p>
                                <p>{el.tags}</p>

                                <p onClick={() => Displanews(el.id)} className="text-yellow-400 font-bold border border-yellow-400 w-fit p-2 rounded-lg">Read More</p>

                            </div>
                        </div>
                    ))}

                </div>
            }
            <div className="w-full  bg-black p-1">
                <div className="flex flex-col  w-full justify-between gap-2 md:gap-4 px-4 md:px-16">
                    {links.map((el, index) => (
                        <Link key={index} to={el.to} className="text-black px-3 bg-white  group  flex items-center justify-between  text-[15px] font-semibold  py-2 md:py-4 w-full border">{el.name} <FaArrowRightLong className="group-hover:translate-x-1 duration-300 " /> </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}
