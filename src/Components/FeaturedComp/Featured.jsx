import { FaArrowRightLong, FaFacebook, FaLinkedin, FaWhatsapp, FaX, FaYoutube } from "react-icons/fa6"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Ads } from "../Ads.jsx"
export const Featured = () => {
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

    const social = [
        {
            icon: <FaFacebook size={20} />,
            count: "1500 Like"
        },
        {
            icon: <FaX size={20} />,
            count: "1600 Like"

        },
        {
            icon: <FaYoutube size={20} />,
            count: "1500 subscride"

        },
        {
            icon: <FaLinkedin size={20} />,
            count: "5k connect"

        }
    ]

    return (
        <div className="bg-gray-300/30  py-5 ">
        
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr_1fr] gap-4 px-2 md:px-10 my-10">
                {/* The first section*/}
                {apiData?.slice(7, 8).map((item, index) => (
                    <div key={index} className="cursor-pointer w-full">
                        <div className=" flex  gap-2 items-center ">
                            <p className="text-[15px] font-semibold">Featured</p>
                            <p className="h-[3px] bg-red-600 w-full"></p>
                        </div>
                        <img src={item.img_url} onClick={() => Displanews(item.id)} alt="" className="w-full h-[250px] object-cover rounded-t-lg rounded-tr-lg" />
                        <div className="bg-white  p-2">
                            <p className="text-[12px] bg-black w-fit text-white px-3 rounded-lg font-semibold p-1">category</p>
                            <p>{item.title} </p>
                        </div>
                    </div>

                ))}


                {/* second place  */}
                <div className="flex flex-col w-full  gap-2  ">
                    {apiData?.slice(1, 3).map((item, index) => (
                        <div key={index} className="h-full md:relative rounded-2xl cursor-pointer ">
                            <img src={item.img_url} alt="Img" onClick={() => Displanews(item.id)} className="object-cover   w-full max-h-[150px] " />

                            <div className="text-black bg-gray-400/50 rounded-xl p-2 gap-3 flex flex-col md:absolute md:top-1/2 md:left-0 w-full ">
                                <p className="p-1 px-4 bg-yellow-400 w-fit rounded-md text-[12px] font-semibold">News</p>
                                <p className="text-[16px] font-semibold">{item.title}</p>
                            </div>

                        </div>
                    ))}

                </div>

                {/* The third section  */}
                <div className="w-full   p-1">
                    <div className="flex flex-col  w-full justify-between gap-2 md:gap-4 ">
                        {social.map((el, index) => (
                            <Link key={index} className="text-black px-3 bg-white  group  flex items-center justify-between  text-[15px] font-semibold  py-2 md:py-4 w-full " to={""}>{el.icon} {el.count} </Link>
                        ))}
                    </div>
                </div>

            </div>

            
        </div>
    )
}
