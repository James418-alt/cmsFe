"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const navs = [
    { id: 1, title: "Products" },
    { id: 2, title: "Customers" },
    { id: 3, title: "Company" },
    { id: 4, title: "Pricing" },
  ];
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center px-[30px] md:px-[150px] py-7">
          <div className="flex gap-10">
            <div>
              <Image src={"/blackLogo.svg"} alt="#" width={100} height={100} />
            </div>
            <div className=" hidden md:flex gap-8">
              {navs.map((el: any) => (
                <div key={el.id}>
                  <h2 className="text-gray-500 text-[15px]">{el.title}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="bg-gray-300 p-2 rounded-md">
              <Image src={"/phone.svg"} alt="#" width={15} height={15} />
            </div>
            <div className="bg-blue-800 flex justify-center items-center gap-[0.9] text-white font-semibold p-2 rounded-md h-8 text-[12px]">
              <h1>My</h1>
              <Image src={"/witheLogo.svg"} alt="#" width={50} height={50} />
              <h1>Cloud</h1>
            </div>
          </div>

          <div
            className="md:hidden"
            onClick={() => {
              setShow(!show);
            }}
          >
            <MdMenu />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="border-b w-[76%]" />
        </div>
      </div>
      {show ? (
        <div className=" md:hidden flex flex-col gap-2 items-end justify-center px-[30px]">
          {navs.map((el: any) => (
            <div
              onClick={() => {
                setShow(false);
              }}
              key={el.id}
            >
              <h2 className="text-gray-500 text-[15px] font-semibold">
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
