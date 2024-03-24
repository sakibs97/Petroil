import { useState } from "react";
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Menu = () => {
    let [show, setShow] = useState(false)

    return (
        <nav className=" bg-[#F40404] ">
            <div className="max-w-container mx-auto py-5">
                <div className="flex justify-between">
                    <div className="">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="">
                        <ul className={`lg:flex z-50 items-center gap-x-5 leading-0 text-white font-poppin font-semibold text-[18px]
                        absolute lg:static ${show == true ? `py-4 text-center top-[230px] left-0 bg-[rgb(255,184,0,60%)] w-full  duration-700 ease-in-out` : `top-[150px] left-[-200px] duration-700 ease-in-out w-full`}`}>
                            <li className="py-2 lg:py-0"><a href="#" >Home</a></li>
                            <li><a href="#">About</a></li>
                            <li className="py-2 lg:py-0"><a href="#">Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li className="py-2 lg:py-0"><a href="#">Blog</a></li>
                            <li><a href="#" className="border-2 p-3 rounded inline-block">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="lg:hidden relative z-50" onClick={() => setShow(!show)}>
                        {show == true ? <ImCross className="h-[30px] w-[30px] outline hover:outline-blue-400 cursor-pointer" /> : <FaBars className="h-[30px] w-[30px] cursor-pointer " />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu