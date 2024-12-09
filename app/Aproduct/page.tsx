
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import React from "react";

import Image from 'next/image';

const ProductsPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl flex-1" style={{ width: "1440px", height: "18095px", position: "relative" }}>
      {/* Header */}
      <div style={{ width: "100%", height: "96px" }}>
        <Header />
      </div>

      {/* Main Content (Product Listing) */}
      <div className="mx-auto flex-1 ml-[300px] grid grid-cols-3 mt-2" style={{ padding: "20px", height: "calc(18095px - 96px - 331px)" }}>

        {/* Product 1 */}
        <div className="bg-white shadow-md rounded-lg mr-18" style={{ width: "348px", height: "533px" }}>
          <Link href="/p3">
            <div>
              <Image
                src="/p1.jpg"
                alt="Nike Air Force 1 Mid '07"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/2">
            <div>
              <Image
                src="/p2.jpg"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/3">
            <div>
              <Image
                src="/p3.jpg"
                alt="Product 3"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 4 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/4">
            <div>
              <Image
                src="/p4.jpg"
                alt="Product 4"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 5 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/5">
            <div>
              <Image
                src="/p5.jpg"
                alt="Product 5"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 6 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/6">
            <div>
              <Image
                src="/p6.jpg"
                alt="Product 6"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 7 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/7">
            <div>
              <Image
                src="/p7.jpg"
                alt="Product 7"
                className="w-full h-48 object-cover rounded-t-md"
                width={348}
                height={348}
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

                {/* Product 8 */}
                <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/8">
            <div>
              <Image 
                src="/p8.jpg" 
                alt="Product 8" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Product 8</p>
                <p className="text-sm text-gray-600 mt-1">$99.99</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 9 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/9">
            <div>
              <Image 
                src="/p9.jpg" 
                alt="Product 9" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 10 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/10">
            <div>
              <Image 
                src="/p10.jpg" 
                alt="Product 10" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 11 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/11">
            <div>
              <Image 
                src="/p11.jpg" 
                alt="Product 11" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 12 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/12">
            <div>
              <Image 
                src="/p12.jpg" 
                alt="Product 12" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 13 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/13">
            <div>
              <Image 
                src="/p13.jpg" 
                alt="Product 13" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 14 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/14">
            <div>
              <Image 
                src="/p14.jpg" 
                alt="Product 14" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 15 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/15">
            <div>
              <Image 
                src="/p15.jpg" 
                alt="Product 15" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 16 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/16">
            <div>
              <Image 
                src="/p16.jpg" 
                alt="Product 16" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 17 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/17">
            <div>
              <Image 
                src="/p17.jpg" 
                alt="Product 17" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>
                {/* Product 18 */}
                <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/18">
            <div>
              <Image 
                src="/p18.jpg" 
                alt="Product 18" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 19 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/19">
            <div>
              <Image 
                src="/p19.jpg" 
                alt="Product 19" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 20 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/20">
            <div>
              <Image 
                src="/p20.jpg" 
                alt="Product 20" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 21 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/21">
            <div>
              <Image 
                src="/p21.jpg" 
                alt="Product 21" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 22 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/22">
            <div>
              <Image 
                src="/p22.jpg" 
                alt="Product 22" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 23 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/23">
            <div>
              <Image 
                src="/p23.jpg" 
                alt="Product 23" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 24 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/24">
            <div>
              <Image 
                src="/p24.jpg" 
                alt="Product 24" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 25 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/25">
            <div>
              <Image 
                src="/p25.jpg" 
                alt="Product 25" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 26 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/26">
            <div>
              <Image 
                src="/p26.jpg" 
                alt="Product 26" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 27 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/27">
            <div>
              <Image 
                src="/p27.jpg" 
                alt="Product 27" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 28 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/28">
            <div>
              <Image 
                src="/p28.jpg" 
                alt="Product 28" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 29 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/29">
            <div>
              <Image 
                src="/p29.jpg" 
                alt="Product 29" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 30 */}
        <div className="bg-white shadow-md rounded-lg" style={{ width: "348px", height: "533px" }}>
          <Link href="/product/30">
            <div>
              <Image 
                src="/p30.jpg" 
                alt="Product 30" 
                className="w-full h-48 object-cover rounded-t-md" 
                style={{ height: "348px", width: "348px" }} 
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mt-2 text-orange-700">Just In</h3>
                <p className="text-sm text-black font-semibold mt-1">Nike Air Force 1 Mid '07</p>
                <p className="text-sm text-gray-600 mt-1">Men's Shoes</p>
                <p className="text-sm text-gray-600 mt-1">1 Colour</p>
                <p className="text-black font-semibold mt-1">MRP : ₹10,795</p>
              </div>
            </div>
          </Link>
        </div>
    </div>
              {/* Footer */}
        <div style={{ width: "100%", height: "331px", position: "absolute", bottom: "0" }}>
         <Footer />
       </div>
      </div>
    );
};

export default ProductsPage;