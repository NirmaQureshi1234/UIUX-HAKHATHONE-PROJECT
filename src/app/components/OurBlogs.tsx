import React from "react";
import Image from "next/image"; 

function OurBlogs() {
  return (
    <>
      <div className="my-[20px]">
        <p className="text-center text-[36px] mt-[20px]">Our Blogs</p>
        <p className="text-center text-[#9F9F9F] text-[16px] my-[20px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        <div className="flex justify-center gap-[20px]">
          <div className="">
            <Image
              src="/images/rectangle1.png"
              alt="Blog Image 1"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline text-center py-[10px]">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center">
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector.png"
                  alt="Time icon"
                  width={16}
                  height={16}
                />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector2.png"
                  alt="Date icon"
                  width={16}
                  height={16}
                />
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/rectangle2.png"
              alt="Blog Image 2"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline text-center py-[10px]">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center">
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector.png"
                  alt="Time icon"
                  width={16}
                  height={16}
                />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector2.png"
                  alt="Date icon"
                  width={16}
                  height={16}
                />
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/rectangle3.png"
              alt="Blog Image 3"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline text-center py-[10px]">
                Read More
              </p>
            </div>
            <div className="flex gap-[10px] justify-center">
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector.png"
                  alt="Time icon"
                  width={16}
                  height={16}
                />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <Image
                  src="/images/vector2.png"
                  alt="Date icon"
                  width={16}
                  height={16}
                />
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-[60px] underline text-[20px]">View More</p>
      </div>
    </>
  );
}

export default OurBlogs;
