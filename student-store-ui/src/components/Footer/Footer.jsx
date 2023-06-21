import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className='footer-wrapper'></div>
        <div className="footer-section">
          <div>
              <h4>Categories</h4>
              <div>
                  <p>All Categories</p>
                  <p>Clothing</p>
                  <p>Food</p>
                  <p>Accessories</p>
                  <p>Tech</p>
              </div>
          </div>
        </div>
        <div className="footer-section">
          <div>
              <h4>Company</h4>
              <div>
                  <p>About Us</p>
                  <p>Find a Store</p>
                  <p>Terms</p>
                  <p>Sitemap</p>
                  <p>Careers</p>
              </div>
          </div>
        </div>
        <div className="footer-section">
          <div>
              <h4>Support</h4>
              <div>
                  <p>Contact Us</p>
                  <p>Money Refund</p>
                  <p>Order Status</p>
                  <p>Shipping Info</p>
                  <p>Open Dispute</p>
              </div>
          </div>
        </div>
        <div className="footer-section">
          <div>
              <h4>Account</h4>
              <div>
                  <p>Login</p>
                  <p>Register</p>
                  <p>Account Setting</p>
                  <p>My Orders</p>
              </div>
          </div>
        </div>
        <div className="footer-section">
          <div>
              <h4>Socials</h4>
              <div>
                  <p>Facebook</p>
                  <p>Twitter</p>
                  <p>pnkedin</p>
                  <p>Instagram</p>
                  <p>Youtube</p>
              </div>
          </div>
        </div>
        <div className="footer-section">
          <div>
              <h4>Our App</h4>
              <div>
                <img className='footer-stores' src="/stores.png" alt="google/apple store" />
              </div>
          </div>
        </div>
        <img src="/payments.png" className='footer-payments' alt="payments accepted" />
      </footer>
      </>
  );
}

export default Footer;
