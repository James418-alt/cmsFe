import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = async () => {
  const url = "https://cms-project-seven.vercel.app/api/hero";
  const res = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await res.json();

  return (
    <div>
      <div className="md:px-[150px] md:pt-[55px] mb-6 px-[20px] py-[20px]">
        <h1
          className={`font-bold text-[30px] text-[${data?.data[0]?.headercolor}] w-[250px] leading-10  md:text-[60px] font-sans md:leading-[70px] pb-6 md:w-[500px]`}
        >
          {data?.data[0]?.title}
        </h1>
        <p
          className={`font-medium text-[14px] text-[${data?.data[0]?.desccolor}] mb-8 w-[300px]`}
        >
          {data?.data[0]?.desc}
        </p>
        <div className="flex gap-6 items-center">
          <button className="p-2 rounded-md bg-blue-700 font-semibold text-[14px] text-white">
            {data?.data[0]?.btnText}
          </button>
          <div className="flex gap-2 items-center">
            <Link className="underline font-semibold text-[14px]" href={""}>
              {data?.data[0]?.linkText}
            </Link>
            <Image src={"/witheArrow.svg"} alt="#" width={10} height={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;