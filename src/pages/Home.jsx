import React from "react";
import Header from "../common/Header";
import vector from "../images/Vector.jpg";
import Rectangle from "../images/Rectangle 9.png";
export default function Home() {
  return (
    <>
      <div className="w-[100%] bg-[#9C623E] h-[27px]  "></div>
      <Header />
      <div className="h-[500px] w-[100%] bg-[#683D22] relative ">
        <div className="sm:max-w-[80%] w-[100%] xs:flex xs:justify-between justify-center mx-auto xs:pt-[10px] md:pt-[40px] ">
          <figure className="h-[149px] justify-center items-center flex flex-col w-[149px] border rounded-[15px] border-black bg-[#F3E3D9]  ">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center mt-[25px]">
              <img src={vector} alt="" className="" />
            </div>
            <div className="">
              <h1 className="font-abc text-lg font-semibold leading-7 tracking-normal text-left">
                120Year
              </h1>
            </div>
          </figure>
          <article className="flex flex-col	items-center justify-center relative top-[60px]">
            <div className="w-[72px] bg-[#9C623E] h-[2px] border-[7px]"></div>
            <h1 className="font-abc md:text-[45px] text-[13px] font-bold leading-56 tracking-normal text-center text-[#FFFFFF]">
              World’s Biggest
              <br />
              <span className="text-[#D49D7B]">Auction Platform</span>
              <br />
              <span className="md:text-[15px] text-[10px] md:relative md:top-[-25px]  ">
                We Bring the showroom to you.
              </span>
            </h1>
            <button className="bg-[#FFFFFF] border-none text-[#492712] md:py-[8px] md:px-[15px] md:relative md:top-[-35px]  rounded-[5px]">
              Disover Now
            </button>
            <figure>
              <img
                src={Rectangle}
                alt=""
                className=" h-[72px] w-[72px] absolute right-[-32px] top-[70%] "
              />
            </figure>
          </article>

          <figure className="h-[149px] justify-center items-center flex flex-col w-[149px] border rounded-[15px] border-black bg-[#F3E3D9] ">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center mt-[25px]">
              <img src={vector} alt="" className="" />
            </div>
            <div className="">
              <h1 className="font-abc text-lg font-semibold leading-7 tracking-normal text-left">
                12Bid So Far
              </h1>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
