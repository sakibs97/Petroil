import { IoMailUnread, IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <header className="py-3 bg-headbg border-b-hdbtmom border-b-[5px]">
            <div className="max-w-container mx-auto font-poppin text-white leading-[50px]">
                <div className="lg:flex ">
                    <div className="w-full sm:w-full lg:w-1/4">
                        <div className="flex items-center lg:justify-start justify-center relative after:absolute after:top-3 
                        after:right-[50px] after:content-[''] after:h-[20px] after:w-[4px] lg:after:bg-hdafter after:bg-none">
                            <IoMailUnread className='mr-3' />
                            <p>mail@yourcompany.com</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-full lg:w-1/4">
                        <div className="flex items-center lg:justify-start justify-center">
                            <IoCallSharp className='mr-3' />
                            <p>+896 120 5889 (Toll free)</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-full lg:w-1/2">
                        <div className="flex lg:justify-end justify-center items-center h-full gap-x-6">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagramSquare /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header