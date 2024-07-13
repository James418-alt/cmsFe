import React from "react";

const Toggle = async () => {
  const url = "https://cms-project-seven.vercel.app/api/header";
  const res = await fetch(url, { method: "GET", cache: "no-cache" });
  const data = await res.json();
  return (
    <div className="hidden md:flex flex-col gap-8 items-center cursor-default">
      {data.data[0].navs.map((el: any, id: any) => (
        <div key={id}>
          <h2 className="text-gray-500 font-semibold text-[12px]">
            {el.toUpperCase()}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Toggle;
