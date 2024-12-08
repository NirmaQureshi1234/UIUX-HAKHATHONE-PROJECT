 "use client";
import React from "react";
import Image from "next/image"; 

function Side() {
  return (
    <>
      <div className="container flex flex-wrap justify-center py-[50px] bg-[#FAF4F4] h-[672px]">
        <div className="w-[605px] h-[562px]">
          <Image
            src="/images/side-table.png"
            alt="Side Table"
            className="h-[500px]"
            width={500} // Set width for the image
            height={500} // Set height for the image
          />
          <p className="text-[36px] text-black">Side Table</p>
          <p className="underline text-black text-[24px] w-[121px] border-b-[2px]">
            View More
          </p>
        </div>
        <div className="w-[605px] h-[562px]">
          <Image
            src="/images/sofa-seater.png"
            alt="Sofa Seater"
            className="h-[500px]"
            width={500} // Set width for the image
            height={500} // Set height for the image
          />
          <p className="text-[36px] text-black">Side Table</p>
          <p className="underline text-[24px] text-black">View More</p>
        </div>
      </div>

      {/* Media Queries for Responsiveness */}
      <style jsx global>{`
        /* Mobile screens (max-width: 768px) */
        @media screen and (max-width: 768px) {
          .container {
            flex-direction: column !important;
            height: auto !important;
          }
          .w-[605px] {
            width: 90% !important;
          }
          .h-[500px] {
            height: auto !important;
          }
          .text-[36px] {
            font-size: 24px !important;
          }
          .text-[24px] {
            font-size: 18px !important;
          }
        }

        /* Tablets (600px to 1024px) */
        @media screen and (min-width: 600px) and (max-width: 1024px) {
          .w-[605px] {
            width: 80% !important;
          }
          .h-[500px] {
            height: auto !important;
          }
          .text-[36px] {
            font-size: 28px !important;
          }
          .text-[24px] {
            font-size: 20px !important;
          }
        }

        /* Desktop screens (larger than 1024px) */
        @media screen and (min-width: 1024px) {
          .container {
            flex-direction: row !important;
          }
          .w-[605px] {
            width: 605px !important;
          }
          .h-[500px] {
            height: 500px !important;
          }
          .text-[36px] {
            font-size: 36px !important;
          }
          .text-[24px] {
            font-size: 24px !important;
          }
        }
      `}</style>
    </>
  );
}

export default Side;
