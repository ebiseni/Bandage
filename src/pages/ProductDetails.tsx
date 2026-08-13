import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ProductDetails.css";

// Import the same product images
import prod1 from "../assets/product-1.jpg";
import prod2 from "../assets/product-2.jpg";
import prod3 from "../assets/product-3.jpg";
import prod4 from "../assets/product-4.jpg";
import prod5 from "../assets/product-5.jpg";
import prod6 from "../assets/product-6.jpg";
import prod7 from "../assets/product-7.jpg";
import prod8 from "../assets/product-8.jpg";

const bestsellerProducts = [
  {
    id: 1,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod1,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod2,
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod3,
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod4,
  },
  {
    id: 5,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod5,
  },
  {
    id: 6,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod6,
  },
  {
    id: 7,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod7,
  },
  {
    id: 8,
    title: "Graphic Design",
    description: "English Department",
    price: 6.48,
    thumbnail: prod8,
  },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = bestsellerProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>Product not found</h2>
          <button
            onClick={() => navigate("/")}
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main
        className="product-details-main"
        style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
              {product.title}
            </h1>
            <p style={{ color: "#737373", marginBottom: "20px" }}>
              {product.description}
            </p>
            <h2
              style={{
                color: "#2dc071",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              ${product.price.toFixed(2)}
            </h2>
            <p style={{ color: "#737373", lineHeight: "1.6" }}>
              Metus vestibulum hac integer vulputate pharetra faucibus pulvinar
              ornare sollicitudin ornare lacus libero aptent dapibus morbi
              consectetur lacus vehicula lectus.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
