import Buttonreusable from "./reusable/Buttonreusable"


const Banner = () => {
    return (
        <div className='px-5 bg-[url("../src/assets/banner.png")] bg-no-repeat bg-center bg-cover py-[20px] sm:py-[50px] lg:py-[200px] 
        relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[""] after:w-full after:h-full after:bg-[rgb(0,0,0,50%)]'>
            <div className="max-w-container mx-auto">
                <h2 className="w-full sm:w-full lg:w-1/2 text-[#FFFFFF] font-poppin text-[30px] sm:text-[40px] lg:text-[64px] font-bold leading-[40px] sm:leading-[50px] lg:leading-[80px]">We exist since 1975 on the oil and gas industry.</h2>
                <Buttonreusable btet="LEARN MORE" />
            </div>
        </div>
    )
}

export default Banner