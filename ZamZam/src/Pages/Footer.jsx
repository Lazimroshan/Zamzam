import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="h-32 bg-black flex flex-col items-center justify-center ">
        <h1 className="text-white  font-bold text-lg font-kanit tracking-wider ">CONNECT WITH US</h1>
        <div className="h-0.5 w-28 bg-zamzam mb-4 "></div>
        <div className=" flex ">
          <FaFacebookSquare className="w-8 h-8 text-white mx-4" />
          <FaInstagram className=" text-white w-8 h-8" />
          <FaXTwitter className="text-white w-8 h-8 mx-4" />
        </div>
      </div>
      <h1 className="text-white bg-black text-center py-5">
        Copyright © 2024 Zam Zam Mandi qatar - All Rights Reserved
      </h1>
    </div>
  );
}

export default Footer;
