
import Footer from "@/components/footer";
import React from "react";
import Header from "@/components/header";
import Link from "next/link";



function JoinUs() {
  return (
    <div
      className="flex flex-col items-center bg-white"
      style={{
        width: "1440px", // Full container width
        height: "966px", // Full container height
        position: "relative",
      }}
    >
           {/* Header */}
           <div
        style={{
          width: "1440px", // Header width
          height: "96px", // Header height
        }}
      >
        <Header />
      </div>
      {/* Main Content */}
      <div
        className="bg-white shadow-lg rounded-lg"
        style={{
          width: "380px", // Form width
          height: "720px", // Form height (adjusted for all inputs)
          position: "absolute",
          top: "96px",
          left: "530px",
        }}
      >
        <div className="flex justify-center mt-6">
          <img
            src="/nike-logo.png" // Add the Nike logo in your public folder
            alt="Nike Logo"
            className="w-24 h-24"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-black mt-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <form className="mt-6 px-8">
          {/* Email Address */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
            <p className="text-xs text-gray-500 mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>

          {/* Country */}
          <div className="mb-4">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            >
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Gender */}
          <div className="flex items-center justify-center mb-4 border border-gray-300 rounded-md">
            <button
              type="button"
              className="flex-1 py-2 text-center focus:outline-none hover:bg-yellow-100 border-r border-gray-300"
            >
              Male
            </button>
            <button
              type="button"
              className="flex-1 py-2 text-center focus:outline-none hover:bg-yellow-100"
            >
              Female
            </button>
          </div>

          {/* Updates Checkbox */}
          <div className="mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </label>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-500 mb-4">
            By creating an account, you agree to Nike's{" "}
            <Link href="/privacy-policy">
              <span className="text-black border-b-2 border-black hover:border-black cursor-pointer">
                Privacy Policy
              </span>
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-use">
              <span className="text-black border-b-2 border-black hover:border-black cursor-pointer">
                Terms of Use
              </span>
            </Link>
            .
          </p>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        {/* Already a Member */}
        <p className="text-center text-sm mt-4 text-gray-500">
          Already a Member?{" "}
          <Link href="/signin">
            <span className="text-black border-b-2 border-black hover:border-black cursor-pointer">
              Sign In.
            </span>
          </Link>
        </p>
      </div>
           {/* Footer */}
           <div
        style={{
          width: "1440px", // Footer width
          height: "331px", // Footer height
          position: "absolute",
          bottom: "0", // Positioned at the bottom
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default JoinUs;
