import React from "react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="p-4 bg-black">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>Our Products</h3>
            <ul className="list-unstyled">
              <li>Music</li>
              <li>Books</li>
              <li>Instruments</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Connect With Us</h3>
            <ul className="list-unstyled">
              <li>
                <FaWhatsapp className="whatsapp-icon" /> +1 (123) 456-7890
              </li>
              <li>
                <FaYoutube className="youtube-icon" /> Our Channel
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Customer Service</h3>
            <ul className="list-unstyled">
              <li>Returns & Exchanges</li>
              <li>Shipping Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Subscribe</h3>
            <p>
              Subscribe to our newsletter for exclusive deals and discounts.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-3 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              Copyright © 2023
              <a href="https://example.com/"> Music Store</a> - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
