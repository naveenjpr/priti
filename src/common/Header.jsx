import React, { useState } from "react";
import logo from "../images/20b77de1d7f5186380308a30f379e996.png";
import { Link } from "react-router-dom";

export default function Header() {
  let [show, setshow] = useState(false);
  let modalshow = () => {
    setshow(!show);
  };
  return (
    <>
      <header className="w-[100%] bg-[#F5EFEB] 	">
        <nav className="max-w-[1000px] border border-[red] mx-auto md:flex md:items-center md:justify-between">
          <div className="">
            <img src={logo} alt="testion" className="w-[200px] h-[58]" />
          </div>
          <ul className="list-none sm:flex sm:flex-col md:flex md:flex-row md:items-center font-abc lg:text-[17px] md:text-[15px] font-normal md:leading-[21px] ">
            <li className="md:mr-[20px] lg:mr-[35px] md:mb-[0px] xs:mb-[10px] hover:text-orange-400  cursor-pointer">
              Collection
            </li>
            <li className="md:mr-[20px] lg:mr-[35px] md:mb-[0px] xs:mb-[10px] hover:text-orange-400  cursor-pointer">
              Help
            </li>
            <li className="md:mr-[20px] lg:mr-[35px] md:mb-[0px] xs:mb-[10px] hover:text-orange-400  cursor-pointer ">
              Tips & Tricks
            </li>
            <li className="md:mr-[20px] lg:mr-[35px] md:mb-[0px] xs:mb-[10px] hover:text-orange-400  cursor-pointer">
              Winners
            </li>
            <li className="md:my-[0px] sm:my[15px] md:mb-[0px] xs:mb-[10px]">
              <button className="lg:mr-[10px] md:ml-[10px] hover:text-orange-400 cursor-pointer md:p-[15px] sm:p-[15px] bg-[#212121] border-none text-white">
                Get Started
              </button>
            </li>
            <li className="md:my-[0px] sm:my[15px] md:mb-[0px] xs:mb-[10px]">
              <button className=" md:ml-[10px] md:p-[15px] hover:text-orange-400 cursor-pointer sm:p-[15px] bg-[#9C623E] border-none text-white">
                Log In
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
