import logo1 from "../assets/logo/Logo1.png"
import logo2 from "../assets/logo/Logo2.png"
import logo3 from "../assets/logo/Logo3.png"
import logo4 from "../assets/logo/Logo4.png"

const CompanyLogo = () => {
    return (
        <>
            <div className="my-[50px] max-w-container mx-auto flex flex-wrap justify-around">
                <div className="">
                    <img src={logo1} alt="logo1" />
                </div><div className="">
                    <img src={logo2} alt="logo2" />
                </div><div className="">
                    <img src={logo3} alt="logo3" />
                </div><div className="">
                    <img src={logo4} alt="logo4" />
                </div>
            </div>
        </>
    )
}

export default CompanyLogo