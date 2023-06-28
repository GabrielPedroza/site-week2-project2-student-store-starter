import { useContext, useState } from "react";
import { MdFactCheck } from "react-icons/md";
import "./CheckoutForm.css"
import Confetti from "../../utils/Confetti";
import { ProductContext } from "../../state/ProductContext";

const CheckoutForm = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Please fill out the name and email fields.");
      return
    } else {
      if (!cartItems.length) return setErrorMessage("You need items in the cart to checkout!")
      // Perform checkout logic here
      setErrorMessage("");
      console.log("Checkout successful!");
    }

    // Perform checkout logic here...
    Confetti();

    setName("");
    setCartItems([])
    setEmail("");
    setAgreeTerms(false);
  };

  return (
    <div className="checkout-form-container">
      <h3 className="form-title">Checkout Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button className="submit-button" type="submit" disabled={!agreeTerms}>
          Checkout
        </button>
      </form>

      <div className="checkout-info">
        <div className="checkout-title-icon">
          <h4 className="info-title">Checkout Info</h4>
          <MdFactCheck className="info-icon" />
        </div>
        <p className="info-text">
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to
          your dorm room.
        </p>
      </div>
    </div>
  );
};

export default CheckoutForm;
