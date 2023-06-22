import React, { useContext } from "react";
import "./ShoppingCart.css";
import { ProductContext } from "../../state/ProductContext";
import { formatPrice } from "../ProductCard/ProductCard";

const ShoppingCart = () => {
  const { cartItems } = useContext(ProductContext);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = subtotal * 0.1; // Assuming 10% tax rate
  const total = subtotal + taxes;

  return (
    <div className="shopping-cart">
      <h2 className="cart-heading">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">No items added to cart yet. Start shopping now!</p>
      ) : (
        <table className="cart-items-table">
          <thead>
            <tr>
              <th className="cart-table-heading">Name</th>
              <th className="cart-table-heading">Quantity</th>
              <th className="cart-table-heading">Unit Price</th>
              <th className="cart-table-heading">Cost</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="cart-item-row">
                <td className="cart-item-data">{item.name}</td>
                <td className="cart-item-data">{item.quantity}</td>
                <td className="cart-item-data">{formatPrice(item.price)}</td>
                <td className="cart-item-data">{formatPrice(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="cart-total-label" colSpan="3">Subtotal</td>
              <td className="cart-total-value">{formatPrice(subtotal)}</td>
            </tr>
            <tr>
              <td className="cart-total-label" colSpan="3">Taxes and Fees</td>
              <td className="cart-total-value">{formatPrice(taxes)}</td>
            </tr>
            <tr>
              <td className="cart-total-label" colSpan="3">Total</td>
              <td className="cart-total-value">{formatPrice(total)}</td>
            </tr>
          </tfoot>
        </table>
      )}
      <div>
        <h3 className="payment-info">Payment Info</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
