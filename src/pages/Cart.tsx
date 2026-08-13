import React from "react";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import "../styles/Cart.css";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <Navbar />
      <main className="cart-main">
        <div className="cart-container">
          <h1 className="cart-heading">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="cart-empty-text">Your cart is currently empty.</p>
          ) : (
            <div className="cart-content">
              <div className="cart-item-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-card">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-item-price">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="cart-quantity-container">
                        <button
                          className="cart-qty-btn"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary-card">
                <h3 className="cart-summary-title">Order Summary</h3>
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="cart-divider" />
                <div className="cart-summary-total-row">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button className="cart-checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
