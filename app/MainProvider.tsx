"use client";

import React, { FC, ReactNode, createContext, useState } from "react";

interface iContext {
  children: ReactNode;
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextProvider = createContext({});

export const MainProvider: FC<any> = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ContextProvider.Provider value={[show, setShow]}>
      <div className="flex justify-between">{children}</div>
    </ContextProvider.Provider>
  );
};
