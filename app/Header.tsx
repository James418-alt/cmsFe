import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";

const Header = async () => {
  const url = "http://localhost:3001/api/header";
  const res = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await res.json();

  return (
    <div>
      <div className="w-[100%]">
        <div className="flex md:justify-between items-center px-[30px] md:px-[150px] py-7">
          <div className="flex justify-between w-[100vw] items-center gap-10">
            <div>
              <h1 className="font-bold text-[20px]">{data?.data[0]?.logo}</h1>
            </div>
            <div className="font-bold md:hidden">
              <MdMenu className="text-[20px]" />
            </div>
            <div className="hidden md:flex gap-8 items-center cursor-default">
              {data.data[0].navs.map((el: any, id: any) => (
                <div key={id}>
                  <h2 className="text-gray-500 text-[12px]">
                    {el.toUpperCase()}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="bg-gray-300 p-2 rounded-md">
              <Image src={"/phone.svg"} alt="#" width={15} height={15} />
            </div>
            <div className="bg-blue-800 flex justify-center items-center gap-[0.9] text-white font-semibold p-2 rounded-md h-8 text-[12px]">
              {data.data[0].btnText.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="border-b w-[90%] md:w-[76%]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
