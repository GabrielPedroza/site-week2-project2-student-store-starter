import React, { useEffect, useState } from 'react';
import './Purchases.css';
import axios from 'axios';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { formatPrice } from '../ProductCard/ProductCard';

const Purchases = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [purchases, setPurchases] = useState([]);
  const [filteredPurchases, setFilteredPurchases] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('email');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/purchases');
        setIsFetching(false);
        setPurchases(response.data.orders);
        setFilteredPurchases(response.data.orders);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchType === 'email') {
      const filteredPurchases = purchases.filter((purchase) =>
        purchase.email.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredPurchases(filteredPurchases);
    } else if (searchType === 'id') {
      const filteredPurchase = purchases.find(
        (purchase) => purchase.id == searchValue
      );
      setFilteredPurchases(filteredPurchase ? [filteredPurchase] : []);
    }
    setSearchValue("")
  };

  const handleClear = () => {
    setSearchValue('');
    setFilteredPurchases(purchases);
  };

  if (isFetching) {
    return (
      <div className="loading-spinner">
        <AiOutlineLoading className="spinner" />
      </div>
    );
  }

  return (
    <>
      <div className="purchase-container">
        <div className="purchase-search-container">
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="email">Email</option>
              <option value="id">ID</option>
            </select>
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        <div className="purchase-items">
          {filteredPurchases.length ? (
            filteredPurchases.map((purchase, i) => (
              <Link
                to={`/purchase/${purchase.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                key={i}
                className="purchase-item"
              >
                <div className="purchase-details">
                  <span className="purchase-label">ID:</span> {purchase.id}
                </div>
                <div className="purchase-details">
                  <span className="purchase-label">Items:</span>{' '}
                  {purchase.shoppingCart.map((item, i) => (
                    <div key={i} className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">{item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="purchase-details">
                  <span className="purchase-label">Total:</span>{' '}
                  {formatPrice(purchase.total)}
                </div>
                <div className="purchase-details">
                  <span className="purchase-label">Email:</span> {purchase.email}
                </div>
              </Link>
            ))
          ) : (
            <div className="no-purchases">No purchases found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Purchases;
