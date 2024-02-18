import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black w-100 h-16 relative drop-shadow-xl">
      <div className="container mx-auto flex items-center h-full ">
        <div className="h-8 w-8 bg-white rounded-md mr-4"></div>
        <div>
          <h1 className="text-white font-bold text-lg">Logo</h1>
        </div>

        <div className="text-white fron-semibold text-lg absolute left-[50%] -translate-x-1/2">
          <h2>Junior Test Case</h2>
        </div>
      </div>
    </div>
  );
}
