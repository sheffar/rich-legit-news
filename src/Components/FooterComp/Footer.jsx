import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div>
            <div className="w-full   bg-black text-white p-2 md:px-10 md:py-5 items-center text-center ">
                <div className="grid grid-cols-1 border-b-[1px] border-gray-500/50 sm:grid-cols-2 gap-6 md:grid-cols-4 md:gap-10 w-full ">
                    <div className="flex flex-col gap-4 max-w-[300px]  ">

                        <p className="text-[20px] font-semibold ">Rich legit News</p>

                        <p>Your anchor point platform for all kinds of news, post and updates</p>

                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[20px] font-semibold">Links </p>
                        <div className="flex flex-col gap-3 ">
                            <Link>News</Link>
                            <Link>Sport</Link>
                            <Link>War</Link>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 max-w-[300px]  ">

                        <p className="text-[20px] font-semibold">Legal</p>

                        <Link>Terms & condition</Link>
                        <Link>Privacy</Link>

                    </div>

                    <div className="flex flex-col gap-4 max-w-[300px]  ">

                        <p className="text-[20px] font-semibold">Extra</p>

                        <Link>Credits</Link>
                    </div>

                </div>
                <p className="text-semibold text-[14px] md:text-lg mt-4 ">Rich legit news-2024 Built by <span className="text-green-500">Rich Dot Com</span>   <span className="border-r-2 mx-2 "></span> Rich legit news claims no right  to any content here</p>
            </div>
        </div>
    )
}
