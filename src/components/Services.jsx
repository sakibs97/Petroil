import Buttonreusable from "./reusable/Buttonreusable"


const Services = () => {
    return (
        <>
            <div className="font-poppin flex flex-wrap items-center">
                <div className="px-[10px] lg:px-0 lg:w-1/2 text-center pb-[50px] lg:pb-0">
                    <h2 className="font-bold text-[40px] lg:text-[64px] text-[#000]">Our Services</h2>
                    <p className="font-normal text-[16px] text-[#6C6C6C] lg:px-[200px]">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className="p-[20px] lg:p-[100px] bg-[url('../src/assets/service/unsplash2.png')] bg-no-repeat bg-center bg-cover w-full lg:w-1/2
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                    <h3 className="font-bold text-[25px] lg:text-[36px] text-[#fff]">Modern natural oil and gas refineries.</h3>
                    <Buttonreusable btet="LEARN MORE" />
                </div>
                <div className="p-[20px] lg:p-[100px] bg-[url('../src/assets/service/unsplash3.png')] bg-no-repeat bg-center bg-cover w-full lg:w-1/2
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                    <h3 className="font-bold text-[25px] lg:text-[36px] text-[#fff]">Supply of national industries.</h3>
                    <Buttonreusable btet="LEARN MORE" />
                </div>
                <div className="p-[20px] lg:p-[100px] bg-[url('../src/assets/service/unsplash.png')] bg-no-repeat bg-center bg-cover w-full lg:w-1/2
                relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[''] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]">
                    <h3 className="font-bold text-[25px] lg:text-[36px] text-[#fff]">National fuel distribution and supply.</h3>
                    <Buttonreusable btet="LEARN MORE" />
                </div>
            </div>
        </>
    )
}

export default Services