import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Shop Heading */}
            <h1 className="text-4xl font-bold text-gray-900">Contact</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>Contact</span>
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroShop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>

      <section className="max-w-7xl text-black mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Abc"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Abc@def.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="This is an optional"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I'd like to ask about"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-1/2  px-6 py-3 border border-black rounded-md hover:bg-gray-50 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <div className="bg-[#FAF4F4] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Free Delivery Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Free Delivery
              </div>
              <p className="mt-2 text-gray-600">
                For all oders over $50, consectetur adipim scing elit.
              </p>
            </div>

            {/* 90 Days Return Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                90 Days Return
              </div>
              <p className="mt-2 text-gray-600">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>

            {/* Secure Payment Section */}
            <div className="flex flex-col items-left">
              <div className="text-2xl font-bold text-gray-800">
                Secure Payment
              </div>
              <p className="mt-2 text-gray-600">
                100% secure payment, consectetur adipim scing elit..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
