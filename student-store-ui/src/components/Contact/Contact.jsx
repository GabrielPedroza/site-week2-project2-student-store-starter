import "./Contact.css"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <h3 className="contact-header">Contact Us</h3>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-key">
          <h4>Email:</h4>
          <h4>Phone:</h4>
          <h4>Address:</h4>
          <h4>Socials:</h4>
        </div>
        <div className="contact-value">
          <p>code@path.org</p>
          <p>1-800-CODEPATH</p>
          <p>123 Fake Street, San Francisco, CA</p>
          <div>
            <FaFacebook className="contact-value-item" />
            <FaInstagram className="contact-value-item" />
            <FaTwitter className="contact-value-item" />
            <FaLinkedin className="contact-value-item" />
          </div>
        </div>
      </div>
      <img className="contact-img" src="/Contact-Us-Person.png" alt="happy person" />
    </div>
    </>
  )
}

export default Contact