

// // components/Cart.js
// import Link from "next/link";
// import React from "react";

// const Cart = () => {
//   const items = [
//     {
//       id: 1,
//       name: "Nike Dri-FIT ADV TechKnit Ultra",
//       description: "Men's Short-Sleeve Running Top",
//       price: 3895.00,
//       quantity: 1,
//       size: "L",
//     },
//     {
//       id: 2,
//       name: "Nike Air Max 97 SE",
//       description: "Men's Shoes",
//       price: 16995.00,
//       quantity: 1,
//       size: "8",
//     },
//   ];

//   const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
//   const deliveryFee = 0; // Assuming free delivery
//   const total = subtotal + deliveryFee;

//   return (
//     <div className="cart">
//       <h2>Bag</h2>
//       <div className="items">
//         {items.map(item => (
//           <div key={item.id} className="item">
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <p>Size: {item.size}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Price: ₹ {item.price.toLocaleString()}</p>
//           </div>
//         ))}
//       </div>
//       <div className="summary">
//         <h3>Summary</h3>
//         <p>Subtotal: ₹ {subtotal.toLocaleString()}</p>
//         <p>Estimated Delivery & Handling: Free</p>
//         <p>Total: ₹ {total.toLocaleString()}</p>
//         <Link href="/checkout">
//           <button className="checkout-button">Member Checkout</button>
//         </Link>
//       </div>
//       <style jsx>{`
//         .cart {
//           padding: 20px;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           max-width: 400px;
//           margin: auto;
//         }
//         .item {
//           margin-bottom: 20px;
//         }
//         .summary {
//           margin-top: 20px;
//           border-top: 1px solid #ccc;
//           padding-top: 10px;
//         }
//         .checkout-button {
//           background-color: black;
//           color: white;
//           padding: 10px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           text-decoration: none; /* Ensure no underline */
//         }
//         .checkout-button:hover {
//           background-color: #333;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Cart;
