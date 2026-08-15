import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ServicesSection from "../components/ServicesSection";
import FeaturedPosts from "../components/FeaturedPosts";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { useGetBestsellerProductsQuery } from "../features/api/productsApi";
import "../styles/Home.css";

// Hero images
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";

// Static local product images (1 to 10) matching Figma exact requirements
import prod1 from "../assets/product-1.jpg";
import prod2 from "../assets/product-2.jpg";
import prod3 from "../assets/product-3.jpg";
import prod4 from "../assets/product-4.jpg";
import prod5 from "../assets/product-5.jpg";
import prod6 from "../assets/product-6.jpg";
import prod7 from "../assets/product-7.jpg";
import prod8 from "../assets/product-8.jpg";
import prod9 from "../assets/product-9.jpg";
import prod10 from "../assets/product-10.jpg";

// Define initial local static products array
const staticProducts = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod1,
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod2,
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod3,
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod4,
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod5,
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod6,
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod7,
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod8,
  },
  {
    id: 9,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod9,
  },
  {
    id: 10,
    title: "Graphic Design",
    department: "English Department",
    price: 16.48,
    priceDiscount: 6.48,
    thumbnail: prod10,
  },
];

const Home: React.FC = () => {
  const [displayLimit, setDisplayLimit] = useState<number>(10);

  // Fetch products dynamically using RTK Query when limit exceeds 10
  const { data, error, isLoading, isFetching } = useGetBestsellerProductsQuery(
    {
      limit: displayLimit,
      skip: 0,
    },
    {
      skip: displayLimit <= 10, // Skip API call initially so it uses local static products first
    },
  );

  // Combine local static products for the first 10, then append API items once loaded
  const apiProducts = data?.products || [];
  const displayedProducts =
    displayLimit <= 10 ? staticProducts : [...staticProducts, ...apiProducts];

  const handleLoadMore = () => {
    // Increment by 10 to fetch and load more items continuously
    setDisplayLimit((prev) => prev + 10);
  };

  return (
    <div>
      <Navbar />
      <main className="home-main">
        {/* Hero Grid Section */}
        <div className="hero-grid-container">
          <div className="hero-item hero-item-1">
            <img src={hero1} alt="Furniture Collection 1" />
            <div className="hero-text">
              <span>5 Items</span>
              <h4>FURNITURE</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className="hero-item hero-item-2">
            <img src={hero2} alt="Furniture Collection 2" />
            <div className="hero-text">
              <span>5 Items</span>
              <h4>FURNITURE</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className="hero-item hero-item-3">
            <img src={hero3} alt="Furniture Collection 3" />
            <div className="hero-text">
              <span>5 Items</span>
              <h4>FURNITURE</h4>
              <p>Read More</p>
            </div>
          </div>
          <div className="hero-item hero-item-4">
            <img src={hero4} alt="Furniture Collection 4" />
            <div className="hero-text">
              <span>5 Items</span>
              <span>FURNITURE</span>
              <p>Read More</p>
            </div>
          </div>
        </div>

        {/* Bestseller Products Section */}
        <div className="home-container">
          <div className="home-hero-section">
            <h4 className="home-hero-subtitle">Featured Products</h4>
            <h1 className="home-hero-title">BESTSELLER PRODUCTS</h1>
            <p className="home-hero-desc">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {isLoading && displayLimit > 10 && (
            <p className="loading-text">Loading bestseller products...</p>
          )}
          {error && displayLimit > 10 && (
            <p className="error-text">Failed to load products from API.</p>
          )}

          {/* Product Grid - 5 columns layout */}
          <div className="home-product-grid">
            {displayedProducts.map((product, index) => (
              <ProductCard key={product.id || index} product={product as any} />
            ))}
          </div>

          {/* Load More Button - Always available to click and load more */}
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={handleLoadMore}
              disabled={isFetching}
            >
              {isFetching ? "LOADING..." : "LOAD MORE PRODUCTS"}
            </button>
          </div>
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Posts Section */}
        <FeaturedPosts />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Call to Action Section */}
        <CallToAction />

        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
