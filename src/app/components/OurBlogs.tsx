import React from "react";
import Image from "next/image";

function OurBlogs() {
  return (
    <>
      <div className="my-[20px] px-4">
        {/* Title */}
        <p className="text-center text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] mt-[20px] font-semibold">
          Our Blogs
        </p>
        <p className="text-center text-[#9F9F9F] text-[14px] sm:text-[16px] lg:text-[18px] my-[10px] sm:my-[20px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] justify-items-center">
          {/* Blog 1 */}
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/rectangle1.png"
              alt="Blog Image 1"
              className="w-full h-auto rounded-md"
              width={300}
              height={300}
            />
            <div className="py-[20px]">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
                Going all-in with millennial design
              </p>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
              <div className="flex items-center gap-[5px]">
                <span>🕒</span>
                <p>5 min</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <span>📅</span>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/rectangle2.png"
              alt="Blog Image 2"
              className="w-full h-auto rounded-md"
              width={300}
              height={300}
            />
            <div className="py-[20px]">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
                Going all-in with millennial design
              </p>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
              <div className="flex items-center gap-[5px]">
                <span>🕒</span>
                <p>5 min</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <span>📅</span>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/rectangle3.png"
              alt="Blog Image 3"
              className="w-full h-auto rounded-md"
              width={300}
              height={300}
            />
            <div className="py-[20px]">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] py-[10px] text-center font-medium">
                Going all-in with millennial design
              </p>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] underline text-center py-[10px] text-black cursor-pointer">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center text-[14px] sm:text-[16px] text-gray-600">
              <div className="flex items-center gap-[5px]">
                <span>🕒</span>
                <p>5 min</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <span>📅</span>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* View More */}
        <p className="text-center py-[30px] sm:py-[40px] lg:py-[60px] underline text-[16px] sm:text-[18px] lg:text-[20px] text-black cursor-pointer">
          View More
        </p>
      </div>
    </>
  );
}

export default OurBlogs;
