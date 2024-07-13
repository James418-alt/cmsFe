"use client";
import React, { useState } from "react";
import Toggle from "./toggled";

const Togs = () => {
  const [show, setShow] = useState(false);
  return <div>{show ? <Toggle /> : ""}</div>;
};

export default Togs;
