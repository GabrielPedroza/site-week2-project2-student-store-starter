import React from "react";
import { RxCopy } from 'react-icons/rx'
import "./Receipt.css";

const Receipt = ({ id }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(id);
  };

  return (
    <div className='receipt-container'>
      <div className="receipt">
        <h3 className="receipt-title">Order Confirmation</h3>
        <div className="success">
          Congratulations on your order! This is your confirmation number: {id}
          <div onClick={handleCopy} className="copy">
            <RxCopy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
