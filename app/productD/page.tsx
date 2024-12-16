

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

function ProductPage() {
  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <div style={styles.headerContainer}>
        <Header />
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.cardContainer}>
          {/* Image Section */}
          <div style={styles.imageContainer}>
            <Image
              src="/p3.jpg" // Ensure this image exists in the public folder
              alt="Nike Air Force 1 PLT.AF.ORM"
              width={500}
              height={350}
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Product Details Section */}
          <div style={styles.textContainer}>
            <h2 style={styles.productTitle}>
              Nike Air Force 1 <br />
              <strong>PLT.AF.ORM</strong>
            </h2>
            <p style={styles.description}>
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "Inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
            </p>
            <h3 style={styles.price}>₹ 8 695.00</h3>
            {/* Add To Cart Button */}
            <Link href="/cart" passHref>
              <div style={styles.button}>🛒 Add To Cart</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

// Explicitly type styles with CSSProperties
const styles: { [key: string]: CSSProperties } = {
  pageContainer: {
    width: '1440px',
    height: '1173px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '1440px',
    height: '96px',
    backgroundColor: '#f5f5f5', // Add background to visualize
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  footerContainer: {
    width: '1440px',
    height: '331px',
    backgroundColor: '#f5f5f5', // Add background to visualize
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    maxWidth: '1000px',
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

export default ProductPage;
