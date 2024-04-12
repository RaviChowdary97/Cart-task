// src/components/Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
