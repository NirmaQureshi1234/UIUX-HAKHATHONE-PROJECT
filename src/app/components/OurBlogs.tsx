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
              width={300} // Adjust width as needed
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
                <span>🕒</span>
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <span>📅</span>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/rectangle2.png"
              alt="Blog Image 2"
              width={300} // Adjust width as needed
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
                <span>🕒</span>
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <span>📅</span>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/rectangle3.png"
              alt="Blog Image 3"
              width={300} // Adjust width as needed
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
                <span>🕒</span>

                <p>5 min </p>
              </div>
              <div className="flex gap-[7px]">
                <span>📅</span>
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

// export default function BlogSection() {
//   const blogs = [
//     {
//       image: '/images/rectangle1.png',
//       title: 'Going all-in with millennial design',
//       time: '5 min',
//       date: '12th Oct 2022',
//     },
//     {
//       image: '/images/rectangle2.png',
//       title: 'Going all-in with millennial design',
//       time: '5 min',
//       date: '12th Oct 2022',
//     },
//     {
//       image: '/images/rectangle3.png',
//       title: 'Going all-in with millennial design',
//       time: '5 min',
//       date: '12th Oct 2022',
//     },
//   ];

//   return (
//     <section className="py-12 px-6 max-w-full overflow-hidden bg-white">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-black">Our Blogs</h2>
//         <p className="text-gray-600 mt-2">
//           Find a bright idea to suit your taste with our great selection
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto max-w-screen-xl">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white overflow-hidden hover:shadow-2xl transition rounded-lg"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-72 object-cover"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold">{blog.title}</h3>
//               <p className="text-gray-600 mt-2">Going all-in with millennial design</p>
//               <a
//           href="/Blog"
//           className="text-lg text-black font-medium inline-block relative"
//         >
//           Read More
//           <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
//         </a>

//               <div className="flex items-center justify-center text-gray-500 text-sm mt-4 space-x-4">
//                 <div className="flex items-center space-x-1">
//                   <span>🕒</span>
//                   <span>{blog.time}</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <span>📅</span>
//                   <span>{blog.date}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-10">
//       <a
//           href="/Blog"
//           className="text-lg text-black inline-block relative"
//         >
//           View All Post
//           <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
//         </a>
//       </div>
//     </section>
//   );
// }
