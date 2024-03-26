import Buttonreusable from "./reusable/Buttonreusable"


const Company = () => {
    return (
        <div className="bg-[#F0F0F0]">
            <div className="max-w-container  mx-auto py-[50px] lg:py-[80px] lg:px-0 sm:px-5">
                <div className="lg:flex items-center font-poppin">
                    <div className="w-full lg:w-1/3">
                        <h3 className="font-bold text-[30px] lg:text-[36px] text-[#fff] py-[20px] lg:py-[77px] px-[20px] lg:px-[70px] bg-[#F40404]">
                            Learn more about our company</h3>
                    </div>
                    <div className="text-center py-[120px] w-full lg:w-3/4 bg-[url('../src/assets/about.png')] bg-no-repeat bg-center bg-cover">
                        <Buttonreusable btet="LEARN MORE" className="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company