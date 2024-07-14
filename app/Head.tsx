import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = async () => {
  const url = "https://cms-project-seven.vercel.app/api/header";
  const res = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await res.json();
  // console.log(data.data[0].navs);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center px-[30px] md:px-[150px] py-7">
          <div className="flex gap-10">
            <div>
              <h1 className="font-bold text-[15px]">{data.data[0].logo}</h1>
            </div>
            <div className=" hidden md:flex gap-8">
              {data.data[0].navs.map((el: any, i: any) => (
                <div key={i}>
                  <h2 className="text-gray-500 text-[15px]">{el}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <div
              style={{ backgroundColor: `${data.data[0].btnColor}` }}
              className="flex justify-center items-center gap-[0.9] text-white font-semibold px-4 py-2 rounded-md h-8 text-[12px]"
            >
              {data.data[0].btnText}
            </div>
          </div>

          <div className="md:hidden">
            <MdMenu />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="border-b w-[76%]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
