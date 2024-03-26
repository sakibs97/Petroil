import logo from "../assets/Logo.png"
import cert1 from "../assets/Cert1.png"
import Cert2 from "../assets/Cert2.png"
import { MdMarkEmailUnread } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className=" bg-[#1F1F1F] font-poppin text-[#fff] text-[14px] font-normal">
                <div className="max-w-container px-[10px] lg:px-0 mx-auto flex flex-wrap justify-between py-[50px]">
                    <div className="">
                        <img src={logo} className="pb-[30px]" alt="logo" />
                        <a href="#" className="flex items-center"><MdMarkEmailUnread className="mr-3" />mail@yourcompany.com</a>
                        <a href="#" className="flex items-center my-3"><BiSolidPhoneCall className="mr-3" />+896 120 5889 (Toll free)</a>
                        <a href="#" className="flex items-center"><FaMapMarkerAlt className="mr-3" />101 Baker Street, New York, USA, 12345</a>
                    </div>
                    <div className="">
                        <h2 className="text-[16px] font-bold py-3">Company</h2>
                        <ul className="">
                            <li><a href="#">Home</a></li>
                            <li className="my-2"><a href="#" >About</a></li>
                            <li><a href="#">Services</a></li>
                            <li className="my-2"><a href="#">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-[16px] font-bold my-3">Others</h2>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li className="my-2"><a href="#">Contact</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li className="my-2"><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-[16px] font-bold my-3">Certificate</h3>
                        <div className="flex gap-x-2">
                            <img src={cert1} alt="" />
                            <img src={Cert2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#282828] py-[20px]">
                <div className="px-[10px] lg:px-0  max-w-container mx-auto">
                    <p className="font-poppin text-[16px] text-[#6C6C6C] font-normal">
                        © Copyright 2022 by AltDesain Studio – All right reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer