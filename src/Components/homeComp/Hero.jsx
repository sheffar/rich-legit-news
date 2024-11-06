import { useEffect, useState } from "react"
import heroimage from "../../assets/mac book.jpeg"
import Spinner from "../Spinner.jsx"

export const Hero = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)

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
        <div>
            {loading ? <Spinner loading={loading} /> : (
                <div className="w-full ">

                    {apiData?.slice(0, 1).map((item, index) => (
                        <div key={index} onClick={() => Displanews(item.id)} className="md:relative w-full cursor-pointer   h-[70vh]">
                            <img src={item.img_url} alt="Hero_img" className="object-cover w-full h-full" />

                            <div className=" w-fit p-5 gap-3 border flex flex-col absolute md:bottom-1/2 bottom-0 left-0 md:left-2">
                                <p className="p-1 px-4 bg-yellow-400 w-fit rounded-md text-[15px] font-semibold">Business</p>
                                <p className="text-[20px] text-white font-semibold">{item.title}</p>
                            </div>
                        </div>

                    ))}



                </div>
            )}

        </div>
    )
}