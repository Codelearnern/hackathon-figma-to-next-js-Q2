


'use client'; // This makes the component a Client Component

import Image from 'next/image';
import Link from 'next/link';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="left-column">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="summary-item">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="delivery-info">
              <p>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            </div>

            <div className="product">
              <Image
                src="/c1.jpg" // Replace with your actual image path
                alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
                width={100}
                height={150}
              />
              <div className="product-details">
                <p className="product-name">
                  Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top
                </p>
                <p className="product-quantity">Qty 1</p>
                <p className="product-size">Size L</p>
                <p className="product-price">₹ 3,895.00</p>
              </div>
            </div>

            <div className="product">
              <Image
                src="/c2.jpg" // Replace with your actual image path
                alt="Nike Air Max 97 SE Men's Shoes"
                width={100}
                height={150}
              />
              <div className="product-details">
                <p className="product-name">Nike Air Max 97 SE Men's Shoes</p>
                <p className="product-quantity">Qty 1</p>
                <p className="product-size">Size UK 8</p>
                <p className="product-price">₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="delivery-options">
            <h3>How would you like to get your order?</h3>
            <p>
              Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs.
            </p>
            <Link href="/deliver-it">
              <button className="deliver-button">Deliver It</button>
            </Link>
          </div>

          <div className="address-form">
            <h3>Enter your name and address:</h3>
            <form>
              <input type="text" placeholder="First Name" className="address-input" />
              <input type="text" placeholder="Last Name" className="address-input" />
              <input type="text" placeholder="Address Line 1" className="address-input" />
              <input type="text" placeholder="Address Line 2" className="address-input" />
              <input type="text" placeholder="Address Line 3" className="address-input" />
              <input type="text" placeholder="Postal Code" className="address-input" />
              <input type="text" placeholder="Locality" className="address-input" />
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-page {
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .checkout-container {
          display: flex;
          width: 100%;
          max-width: 1200px;
        }

        .left-column {
          flex: 1; /* Ensure it takes 1 part of the space */
          margin-left: 20px; /* Adjust margin if needed */
        }

        .right-column {
          flex: 1; /* Ensure it takes 1 part of the space */
          margin-right: 20px; /* Adjust margin if needed */
        }

        .order-summary {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .order-summary h2 {
          margin-bottom: 20px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .total {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-top: 20px;
        }

        .delivery-info p {
          font-size: 14px;
          color: #777;
          margin-top: 10px;
        }

        .product {
          display: flex;
          margin-top: 20px;
        }

        .product-details {
          margin-left: 20px;
        }

        .product-name {
          font-size: 16px;
          font-weight: bold;
        }

        .product-quantity,
        .product-size,
        .product-price {
          font-size: 14px;
          margin-top: 5px;
        }

        .right-column .delivery-options {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .right-column .delivery-options h3 {
          margin-bottom: 15px;
        }

        .right-column .delivery-options p {
          font-size: 14px;
          color: #555;
        }

        .deliver-button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 15px;
        }

        .address-form {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .address-form h3 {
          margin-bottom: 15px;
        }

        .address-input {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}

export default CheckoutPage;


