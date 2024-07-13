import React, { useState } from "react";

const DropDown = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <div className="flex justify-center px-[30px] flex-col gap-4 items-end"></div>
      </div>
    </div>
  );
};

export default DropDown;
