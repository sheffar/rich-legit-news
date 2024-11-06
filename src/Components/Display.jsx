import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "./Spinner.jsx"

export const Display = () => {
    const { id } = useParams()
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)



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
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    const render = apiData.filter((el) => el.id === id)

    useEffect(() => {
        call()
    }, [])
    return (
        <div>
            {loading ? <Spinner loading={loading} /> : (
                <div className="w-full md:px-10 px-2">
                    {render?.map((el) => (
                        <>
                            <div className="w-full h-[300px] md:h-[500px] rounded-md border ">
                            <img src={el.img_url} alt="img" className="w-full h-full rounded-md object-cover" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold">{el.title}</p>

                                <p className="py-9 text-[17px] font-medium">{el.content}</p>

                            </div>


                        </>

                    ))}


                </div>

            )}

        </div>
    )
}
