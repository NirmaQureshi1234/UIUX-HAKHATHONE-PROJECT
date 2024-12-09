import React from "react";

function OurInstagram() {
  return (
    <>
      <div className="container h-[450px] bg-[url('/images/rectangle.png')] bg-cover bg-center">
        <div className="flex justify-center items-center h-full">
          <div className="w-[454px] m-auto">
            <p className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold my-[10px] sm:my-[15px] md:my-[20px] text-center">
              Our Instagram
            </p>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center mt-[10px] sm:mt-[15px] lg:mt-[20px] font-medium">
              Follow our store on Instagram
            </p>

            <div className="flex justify-center my-[10px]">
              <button className="w-[255px] h-[65px] text-[20px] bg-[#ffff] rounded-[50px] text-black">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurInstagram;
