


import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CartPage() {
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <Header />

      {/* Free Delivery Notification */}
      <div className="bg-gray-100 py-3 px-6 mb-4 text-sm">
        <p className="font-semibold">Free Delivery</p>
        <div className="text-gray-600">
          <span>Applies to orders of ₹ 14,000.00 or more. </span>
          <Link href="#" className="underline ml-16">
            View details
          </Link>
        </div>
      </div>

      {/* Bag Section */}
      <div className="flex gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>

          {/* Product 1 */}
          <div className="flex items-center border-b py-4">
            <div className="w-24 h-24 relative">
              <Image
                src="/c1.jpg" // Replace with the correct image path
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h2>
              <p className="text-gray-500 text-sm">
                Men's Short-Sleeve Running Top <br />
                Ashen Slate/Cobalt Bliss
              </p>
              <p className="text-gray-500 text-sm">
                Size <strong>L</strong> Quantity <strong>1</strong>
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-bold">MRP: ₹ 3 895.00</p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button>❤️</button>
              <button>🗑</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-center border-b py-4">
            <div className="w-24 h-24 relative">
              <Image
                src="/c2.jpg" // Replace with the correct image path
                alt="Nike Air Max 97 SE"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="font-bold">Nike Air Max 97 SE</h2>
              <p className="text-gray-500 text-sm">
                Men's Shoes <br />
                Flat Pewter/Light Bone/Black/White
              </p>
              <p className="text-gray-500 text-sm">
                Size <strong>8</strong> Quantity <strong>1</strong>
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-bold">MRP: ₹ 16 995.00</p>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <button>❤️</button>
              <button>🗑</button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-[300px]">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ 20 890.00</span>
          </div>
          <div className="flex justify-between mb-20">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>

          {/* Gray line above Total */}
          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₹ 20 890.00</span>
          </div>

          {/* Gray line below Total */}
          <div className="border-t border-gray-300 my-4"></div>

          <Link href="/Checkout">
            <button className="bg-black text-white py-3 px-6 mt-6 w-full rounded-md">
              Member Checkout
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

