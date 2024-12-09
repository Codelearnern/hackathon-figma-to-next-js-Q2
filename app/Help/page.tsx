import Footer from "@/components/footer";

import Header from "@/components/header";



import React from 'react';
import Link from 'next/link';

const Help = () => {
  return (
    <div
      className="flex flex-col items-center bg-white"
      style={{
        width: "1440px", // Full container width
        height: "966px", // Full container height
        position: "relative",
      }}
    >
      {/* Main Content */}
      <div
        className="bg-white shadow-lg rounded-lg"
        style={{
          width: "800px", // Form width
          padding: '20px',
          position: "absolute",
          top: "96px",
          left: "320px",
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
        <h1 className="text-3xl font-bold text-center mb-4">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black mb-4"
        />

        <h2 className="text-2xl font-semibold mt-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
        <p>
          We want to make buying your favourite Nike shoes and gear fast and easy, and we accept the following payment options:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>Diners Club</li>
          <li>Discover</li>
          <li>American Express</li>
          <li>Visa Electron</li>
          <li>Maestro</li>
        </ul>
        <p>
          If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
        </p>
        <p>
          <strong>Apple Pay:</strong> Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, 
          <Link href="/join">
            <span className="text-black border-b-2 border-black hover:border-black cursor-pointer"> join us</span>
          </Link>
          today.
        </p>

        <div className="mt-4 mb-6 text-center">
          <Link href="/shop">
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">SHOP NIKE</button>
          </Link>
        </div>

        <h3 className="text-xl font-semibold mt-4">FAQs</h3>
        <h4 className="text-lg font-medium">Does my card need international purchases enabled?</h4>
        <p>
          Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
        </p>

        <h4 className="text-lg font-medium">Can I pay for my order with multiple methods?</h4>
        <p>No, payment for Nike orders can't be split between multiple payment methods.</p>

        <h4 className="text-lg font-medium">What payment method is accepted for SNKRS orders?</h4>
        <p>You can use any accepted credit card to pay for your SNKRS order.</p>

        <h4 className="text-lg font-medium">Why don't I see Apple Pay as an option?</h4>
        <p>
          To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
        </p>

        <h3 className="text-xl font-semibold mt-4">CONTACT US</h3>
        <p>
          Phone: <strong>000 800 919 0566</strong> (Products & Orders: 24 hours a day, 7 days a week)
        </p>
        <p>
          Company Info & Enquiries: <strong>07:30 - 16:30, Monday - Friday</strong>
        </p>
        <p>We'll reply within five business days.</p>

        <div className="mt-4 text-center">
          <Link href="/store-locator">
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">STORE LOCATOR</button>
          </Link>
        </div>
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
};

export default Help;
