import React, { useEffect, useState } from 'react';
import './PurchaseID.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLoading } from 'react-icons/ai';

const PurchaseID = () => {
  const { purchaseId } = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/purchases/${purchaseId}`);
        setProduct(response.data["order"]);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setProduct("could not fetch product");
        setIsFetching(false);
      }
    };

    fetchData();
  }, [purchaseId]);

  if (isFetching) {
    return (
      <div className="loading-spinner">
        <AiOutlineLoading className="spinner" />
      </div>
    );
  }

  return (
    <div className="purchase-container">
      <div className="order-info">
        <div className="order-label">Order ID: {product.id}</div>
        <div className="order-label">Email: {product.email}</div>
      </div>
      <div className="items-container">
        {product.shoppingCart.map((item, i) => (
          <div key={i} className="item">
            <img className="item-image" src={item.image} alt={item.name} />
            <div className="item-info">
              <p className="item-description">{item.description}</p>
              <p className="item-price">${item.price}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">Total: ${product.total}</div>
    </div>
  );
};

export default PurchaseID;
