import { useEffect, useState } from "react"
import image from "../../assets/pad.jpeg"
import Spinner from "../Spinner.jsx"
import { useNavigate } from "react-router-dom"
export const Catgory = () => {
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
            console.log(e)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        call()
    }, [])
    return (

        <div className="" >
            {loading ? <Spinner loading={loading} /> : (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-3 w-full my-16 md:px-10">
                    {/* First Bot  */}
                    <div className="flex flex-col ">
                        {apiData?.slice(0, 2).map((el, i) => (
                            <div key={i} onClick={() => Displanews(el.id)} className="w-full group">
                                <img src={el.img_url} alt="" className="w-full group-hover:scale-95 cursor-pointer duration-500 h-[150px] object-cover rounded-t-lg rounded-tr-lg" />
                                <div className="bg-white p-2">
                                    <p className="text-[12px] bg-black w-fit hover:scale-95 cursor-pointer duration-500 text-white px-3 rounded-lg font-semibold p-1">category</p>
                                    <p>{el.title} </p>
                                </div>
                            </div>
                        ))}


                    </div>

                    {/* second section  */}
                    {apiData.slice(12, 13).map((item) => (
                        <div className="group cursor-pointer" onClick={() => Displanews(item.id)}>
                            <img src={item.img_url} alt="img" className="h-[500px] group-hover:scale-95 cursor-pointer duration-500 border border-black w-full rounded-xl object-cover" />
                        </div>
                    ))}

                    {/* third section */}
                    <div className="flex flex-col gap-2">
                        {apiData?.slice(9, 11).map((el, i) => (
                            <div key={i} onClick={() => Displanews(el.id)} className="w-full group">
                                <img src={el.img_url} alt="" className="w-full h-[150px] group-hover:scale-95 cursor-pointer duration-500  object-cover rounded-t-lg rounded-tr-lg" />
                                <div className="bg-white  p-2">
                                    <p className="text-[12px] bg-black w-fit text-white px-3 rounded-lg font-semibold p-1">category</p>
                                    <p>{el.title}</p>
                                </div>
                            </div>
                        ))}


                    </div>


                </div>
            )}

        </div>
    )
}
