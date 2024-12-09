
import Footer from "@/components/footer";
import React from "react";
import Header from "@/components/header";
import Link from "next/link";

function SignIn() {
  return (
    <div
      className="flex flex-col bg-white"
      style={{
        width: "1440px", // Total container width
        height: "966px", // Total container height
        position: "relative", // Allows absolute positioning for child elements
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

      {/* Main Content (Sign In Form) */}
      <div
        className="bg-white shadow-lg rounded-lg"
        style={{
          width: "380px", // Form width
          height: "489px", // Form height
          position: "absolute",
          top: "96px", // Starts after the header
          left: "530px", // Centered horizontally
        }}
      >
        {/* Form Content */}
        <div className="flex justify-center mb-6">
          <img
            src="/s1.jpg" // Add the Nike logo in your public folder
            alt="Nike Logo"
            className="w-324 h-17"
          />
        </div>
        <h2 className="text-2xl font-bold text-center w-186.5 h-57 text-black mb-4">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        <form>
          <div className="mb-4">
           
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
           
            <input
              id="password"
              type="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <Link href="/forgot-password">
              <span className="text-sm text-gray-600 hover:text-black">Forgotten your password?</span>
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500 mb-4">
            By signing in, you agree to Nike's{" "}
            <Link href="/privacy-policy">
              <span className="text-gray-500 border-b-2 border-gray-500 hover:border-black">
                Privacy Policy
              </span>
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-use">
              <span className="text-gray-500 border-b-2 border-gray-500 hover:border-black">
                Terms of Use
              </span>
            </Link>.
          </p>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            SIGN IN
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-500">
          Not a Member?{" "}
          <Link href="/join">
            <span className="text-black border-b-2 border-black hover:border-black">Join Us.</span>
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

export default SignIn;
