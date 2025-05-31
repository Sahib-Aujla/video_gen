import { SignUp } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
const Signin = () => {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-1/2 h-full relative"><Image src='/signin.jpg' alt='signin' fill={true} /></div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
};

export default Signin;
