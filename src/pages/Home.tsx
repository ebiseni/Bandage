import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ServicesSection from "../components/ServicesSection";
import FeaturedPosts from "../components/FeaturedPosts";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { useGetBestsellerProductsQuery } from "../features/api/productsApi";
import "../styles/Home.css";

// Hero images
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";

const Home: React.FC = () => {
  const [displayLimit, setDisplayLimit] = useState<number>(10);

  // Fetch products dynamically using RTK Query, increasing the limit on every "Load More" click
  const { data, error, isLoading, isFetching } = useGetBestsellerProductsQuery({
    limit: displayLimit,
    skip: 0,
  });

  const products = data?.products || [];

  const handleLoadMore = () => {
    // Increment by 10 to load more items continuously
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

          {isLoading && (
            <p className="loading-text">Loading bestseller products...</p>
          )}
          {error && (
            <p className="error-text">Failed to load products from API.</p>
          )}

          {/* Product Grid - 5 columns layout */}
          <div className="home-product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
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
      </main>
    </div>
  );
};

export default Home;
