



// import Image from 'next/image';
// import Link from 'next/link';
// import { CSSProperties } from 'react';

// function ProductCard() {
//   return (
//     <div style={styles.cardContainer}>
//       {/* Image Section */}
//       <div style={styles.imageContainer}>
//         <Image
//           src="/p8.jpg" // Ensure this image exists in the public folder
//           alt="Nike Air Force 1 PLT.AF.ORM"
//           width={500}
//           height={350}
//           style={{ objectFit: 'cover' }}
//         />
//       </div>
//       {/* Product Details Section */}
//       <div style={styles.textContainer}>
//         <h2 style={styles.productTitle}>
//           Nike Air Force 1 <br />
//           <strong>PLT.AF.ORM</strong>
//         </h2>
//         <p style={styles.description}>
//           Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "Inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
//         </p>
//         <h3 style={styles.price}>₹ 8 695.00</h3>
//         {/* Add To Cart Button */}
//         <Link href="/cart" passHref>
//           <div style={styles.button}>
//             🛒 Add To Cart
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Explicitly type styles with CSSProperties
// const styles: { [key: string]: CSSProperties } = {
//   cardContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '20px',
//     padding: '20px',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     maxWidth: '1000px',
//     margin: 'auto',
//     backgroundColor: '#f9f9f9',
//   },
//   imageContainer: {
//     flex: '1',
//   },
//   textContainer: {
//     flex: '1',
//   },
//   productTitle: {
//     fontSize: '1.8rem',
//     marginBottom: '10px',
//   },
//   description: {
//     fontSize: '1rem',
//     color: '#555',
//     marginBottom: '15px',
//   },
//   price: {
//     fontSize: '1.5rem',
//     color: '#000',
//     marginBottom: '15px',
//   },
//   button: {
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     textAlign: 'center', // Correct union type
//     cursor: 'pointer',
//     width: '150px',
//     fontSize: '1rem',
//   },
// };
// export default ProductCard;


import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define props for the ProductCard component
interface ProductCardProps {
  imageSrc: string; // Path to the product image
  title: string;    // Product title
  description: string; // Product description
  price: string;    // Product price
  link: string;     // URL for the 'Add to Cart' button
}

// ProductCard Component
const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  price,
  link,
}) => {
  return (
    <div style={styles.cardContainer}>
      {/* Image Section */}
      <div style={styles.imageContainer}>
        <Image
          src={imageSrc} // Path to the product image
          alt={title}
          width={500}
          height={350}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* Product Details Section */}
      <div style={styles.textContainer}>
        <h2 style={styles.productTitle}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <h3 style={styles.price}>{price}</h3>
        {/* Add To Cart Button */}
        <Link href={link} passHref>
          <div style={styles.button}>🛒 Add To Cart</div>
        </Link>
      </div>
    </div>
  );
};

// Styles Object
const styles: { [key: string]: CSSProperties } = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    flex: '1',
  },
  textContainer: {
    flex: '1',
  },
  productTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '15px',
  },
  price: {
    fontSize: '1.5rem',
    color: '#000',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '150px',
    fontSize: '1rem',
  },
};

export default ProductCard;
