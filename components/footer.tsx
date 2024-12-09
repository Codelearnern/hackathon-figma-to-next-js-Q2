import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div
        className="flex justify-end gap-2 mt-5"
        style={{
          width: "100%",
          padding: "0px 20px",
          marginTop: "180px",
        }}
      >
        <div className="flex gap-2">
          <Image
            src="/fp1.jpg"
            alt="Image 1"
            width={30}
            height={30}
            className="object-cover rounded-md"
          />
          <Image
            src="/fp2.jpg"
            alt="Image 2"
            width={30}
            height={30}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex gap-2">
          <Image
            src="/fp3.jpg"
            alt="Image 3"
            width={30}
            height={30}
            className="object-cover rounded-md"
          />
          <Image
            src="/fp4.jpg"
            alt="Image 4"
            width={30}
            height={30}
            className="object-cover rounded-md"
          />
        </div>
      </div>

      <div
        className="relative"
        style={{
          width: "1372px",
          height: "213px",
          top: "40px",
          left: "34px",
          padding: "0px 6px 0px 0px",
          gap: "0px",
        }}
      >
        <div
          className="relative flex justify-between"
          style={{
            width: "1029px",
            height: "213px",
            padding: "0px 263.25px 0px 6px",
            gap: "0px",
          }}
        >
          <div
            className="text-left"
            style={{
              width: "245.25px",
              height: "169.63px",
              padding: "0px 0px 3px 0px",
            }}
          >
            <h4 className="font-bold mb-2 text-white text-xs">Find a Store</h4>
            <ul>
              <li className="mb-1 text-white text-xs">
                <Link href="/BecomeAMember">Become a Member</Link>
              </li>
              <li className="mb-1 text-white text-xs">
                <Link href="/SignUpForEmail">Sign Up for Email</Link>
              </li>
              <li className="mb-1 text-white text-xs">
                <Link href="/SendUsFeedback">Send Us Feedback</Link>
              </li>
              <li className="mb-1 text-white text-xs">
                <Link href="/StudentDiscounts">Student Discounts</Link>
              </li>
            </ul>
          </div>

          <div
            className="text-left"
            style={{
              width: "245.25px",
              height: "213px",
              padding: "0px 0px 3px 0px",
            }}
          >
            <h4 className="font-bold mb-2 text-white text-xs">Get Help</h4>
            <ul>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/OrderStatus">Order Status</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/Delivery">Delivery</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/Returns">Returns</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/PaymentOptions">Payment Options</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/ContactNike">Contact Us on Nike.com Inquiries</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/OtherInquiries">Contact Us on All Other Inquiries</Link>
              </li>
            </ul>
          </div>

          <div
            className="text-left"
            style={{
              width: "245.25px",
              height: "151px",
              padding: "0px 0px 3px 0px",
            }}
          >
            <h4 className="font-bold mb-2 text-white text-xs">About Nike</h4>
            <ul>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/News">News</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/Careers">Careers</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/Investors">Investors</Link>
              </li>
              <li className="mb-1 text-gray-400 text-xs">
                <Link href="/Sustainability">Sustainability</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center text-xs mt-4">
          <p className="text-gray-400">
            <span className="text-white mr-4 ml-8">India</span> © 2023 Nike, Inc. All Rights Reserved
          </p>
          <div className="flex gap-3 mr-4">
            <Link href="/Guides" className="text-gray-400">
              Guides
            </Link>
            <Link href="/TermsOfSale" className="text-gray-400">
              Terms of Sale
            </Link>
            <Link href="/TermsOfUse" className="text-gray-400">
              Terms of Use
            </Link>
            <Link href="/PrivacyPolicy" className="text-gray-400">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
