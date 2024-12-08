import React from "react";

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
            <img src="/images/rectangle1.png" alt="" />
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
                <img src="/images/vector.png" alt="" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <img src="/images/vector2.png" alt="" />
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/rectangle2.png" alt="" />
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
                <img src="/images/vector.png" alt="" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <img src="/images/vector2.png" alt="" />
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/rectangle3.png" alt="" />
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
                <img src="/images/vector.png" alt="" className=""/>
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <img src="/images/vector2.png" alt="" />
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