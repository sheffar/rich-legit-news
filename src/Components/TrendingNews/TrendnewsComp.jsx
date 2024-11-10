import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { Ads } from "../Ads.jsx"

export const TrendnewsComp = () => {
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

                console.log(response.data);
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
    const links = [
        {
            name: "Business",
            to: '/business'
        }
        ,
        {
            name: "Sport",
            to: '/sport'
        },
        {
            name: "Technology",
            to: '/technology'
        }
    ]
    return (
        <div className="w-full  md:px-14">
          
            <Ads />
            <div id="banner"></div>

            <div className="grid md:grid-cols-[1.5fr_1.5fr_1fr] my-10   gap-2 ">
                {/* first grid here */}

                {apiData?.slice(0, 1).map((el, i) => (
                    <div key={i} onClick={() => Displanews(el.id)} className="w-full cursor-pointer bg-pink-500 relative  rounded-xl h-[400px]">
                        <img src={el.img_url} className="w-full h-full  rounded-md  object-cover" alt="" />

                        <div className="   w-full p-2 gap-4 flex flex-col absolute bg-black/50   bottom-1 ">
                            <p className="p-1 px-4 bg-yellow-400 w-fit rounded-md text-[15px] font-semibold">Sport</p>

                            <p className="text-[20px] text-white font-semibold">{el.title}</p>
                        </div>
                    </div>
                ))}



                {/* Second grid here */}
                <div className="flex flex-col w-full gap-3  h-fit border-black">
                    {apiData?.slice(4, 7).map((el, i) => (
                        <div key={i} onClick={() => Displanews(el.id)} className="flex cursor-pointer  text-center gap-2 w-full p-1">
                            <div className="max:w-[100px] h-[100px]  rounded-md ">
                                {/* img here */}
                                <img src={el.img_url} className="w-full h-full  rounded-md  object-cover" alt="" />
                            </div>
                            <div className="  w-full text-left">
                                <p className="text-[14px] font-semibold">{el.title}  </p>
                            </div>
                        </div>

                    ))}



                </div>

                {/* third section */}

                <div className="w-full  bg-black p-1">
                    <div className="flex flex-col  w-full justify-between gap-2 md:gap-4 ">
                        {links.map((el, index) => (
                            <Link key={index} to={el.to} className="text-black px-3 bg-white  group  flex items-center justify-between  text-[15px] font-semibold  py-2 md:py-4 w-full border">{el.name} <FaArrowRightLong className="group-hover:translate-x-1 duration-300 " /> </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
