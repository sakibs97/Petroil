import { IoIosArrowForward } from "react-icons/io";

const Read = () => {
    return (
        <>
            <div className="font-poppin max-w-container mx-auto">
                <div className="lg:flex gap-x-6">
                    <div className="bg-[url('../src/assets/read/read.png')] bg-no-repeat bg-center w-full py-[75px] px-[50px] bg-cover 
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                        <h5 className="font-bold text-[24px] text-[#fff]">
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                        <button className="font-semibold text-[12px] text-[#fff] mt-[50px] py-[10px] px-[20px] bg-[#F0F0F0]">Read more</button>
                    </div>
                    <div className="bg-[url('../src/assets/read/read3.png')] bg-no-repeat bg-center w-full py-[75px] px-[50px] bg-cover 
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                        <h5 className="font-bold text-[24px] text-[#fff]">
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                        <button className="font-semibold text-[12px] text-[#fff] mt-[50px] py-[10px] px-[20px] bg-[#F0F0F0]">Read more</button>
                    </div>
                    <div className="bg-[url('../src/assets/read/read2.png')] bg-no-repeat bg-center w-full py-[75px] px-[50px] bg-cover 
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                        <h5 className="font-bold text-[24px] text-[#fff]">
                            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h5>
                        <button className="font-semibold text-[12px] text-[#fff] mt-[50px] py-[10px] px-[20px] bg-[#F0F0F0]">Read more</button>
                    </div>
                </div>
                <div className="flex justify-end my-4">
                    <h6 className=" pr-3 ">MORE FROM THE BLLOG </h6>
                    <IoIosArrowForward className="" />
                </div>
            </div >
            <div className="">
            </div>

        </>
    )
}

export default Read