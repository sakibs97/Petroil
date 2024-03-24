

const Banner = () => {
    return (
        <div className='bg-banbg bg-no-repeat bg-center bg-cover sm:py-[50px] lg:py-[200px] 
        relative after:absolute after:top-0 after:left-0 after:z-200 after:content-[""] after:w-full after:h-full hover:after:bg-[rgb(0,0,0,10%)]'>
            <div className="max-w-container mx-auto">
                <h2 className="w-full sm:w-full lg:w-1/2 text-[#FFFFFF] font-poppin text-[64px] font-bold leading-[80px]">We exist since 1975 on the oil and gas industry.</h2>
                <button className="text-white font-poppin text-[16px] font-semibold py-[14px] px-[40px] bg-[#F40404] mt-6">LEARN MORE</button>
            </div>
        </div>
    )
}

export default Banner