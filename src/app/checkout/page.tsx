import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function Checkout() {
  
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
            <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>Checkout</span>
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

      












     











      

    <div className="max-w-7xl text-black bg-[#ffffff] mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Billing Details Form */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-8">Billing details</h1>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Country / Region</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none"
                  defaultValue="Sri Lanka"
                >
                <option>Pakistan</option>
                  
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2">Street address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Town / City</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Province</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none"
                  defaultValue="Province"
                >
                  <option>Sindh</option>
                  <option>Punjab</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2">ZIP code</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Additional information</label>
              <textarea className="w-full px-4 py-2 border border-gray-200 rounded-lg h-32" />
            </div>
          </form>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Product</h2>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between mb-4">
                <span>Asgaard sofa × 1</span>
                <span>Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-amber-500">Rs. 250,000.00</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="w-4 h-4"
                />
                <span>Direct Bank Transfer</span>
              </label>

              <p className="text-gray-600 text-sm ml-7">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>

              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span>Cash On Delivery</span>
              </label>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a className="underline">privacy policy</a>.
            </p>

            <button className="w-full bg-transparent border border-black text-black py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  





























      <div className="bg-[#FAF4F4] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Free Delivery Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">Free Delivery</div>
            <p className="mt-2 text-gray-600">
            For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* 90 Days Return Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">90 Days Return</div>
            <p className="mt-2 text-gray-600">
            If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* Secure Payment Section */}
          <div className="flex flex-col items-left">
            <div className="text-2xl font-bold text-gray-800">Secure Payment</div>
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