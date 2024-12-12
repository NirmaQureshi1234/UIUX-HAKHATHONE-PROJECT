"use client";
import React from "react";
import Image from "next/image";

function TopPicks() {
  return (
    <div className="bg-[#ffffff] text-black">
      {/* Header Section */}
      <div className="text-center px-4 py-6">
        <p className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold">
          Top Picks For You
        </p>
        <p className="text-[14px] md:text-[16px] text-[#9F9F9F] mt-2">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Product 1 */}
        <div className="w-full sm:w-[47%] lg:w-[23%] bg-[#FAF4F4] rounded-md p-4">
          <Image
            src="/tp1.png"
            alt="Trenton modular sofa_3"
            className="w-full rounded-lg"
            width={287}
            height={287}
          />
          <p className="text-[14px] md:text-[16px] mt-2">
            Trenton modular sofa_3
          </p>
          <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
            Rs. 25,000.00
          </p>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-[47%] lg:w-[23%] bg-[#FAF4F4] rounded-md p-4">
          <Image
            src="/mask-group4.png"
            alt="Granite dining table with dining chair"
            className="w-full rounded-lg"
            width={287}
            height={287}
          />
          <p className="text-[14px] md:text-[16px] mt-2">
            Granite dining table with dining chair
          </p>
          <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
            Rs. 25,000.00
          </p>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-[47%] lg:w-[23%] bg-[#FAF4F4] rounded-md p-4">
          <Image
            src="/mask-group5.png"
            alt="Outdoor bar table and stool"
            className="w-full rounded-lg"
            width={287}
            height={287}
          />
          <p className="text-[14px] md:text-[16px] mt-2">
            Outdoor bar table and stool
          </p>
          <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
            Rs. 25,000.00
          </p>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-[47%] lg:w-[23%] bg-[#FAF4F4] rounded-md p-4">
          <Image
            src="/mask-group6.png"
            alt="Plain console with teak mirror"
            className="w-full rounded-lg"
            width={287}
            height={287}
          />
          <p className="text-[14px] md:text-[16px] mt-2">
            Plain console with teak mirror
          </p>
          <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">
            Rs. 25,000.00
          </p>
        </div>
      </div>

      {/* View More Section */}
      <div className="text-center py-8">
        <p className="text-[18px] md:text-[20px] underline cursor-pointer">
          View More
        </p>
      </div>
    </div>
  );
}

export default TopPicks;
