import React from "react";
import './navbar.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <ui>
                <li>28 pennsylvania</li>
                <li>Brampton</li>
                <li>ONTARIO</li>
                <li>CANADA</li>
            </ui>
            <div className="copyright">
            &copy; Copyright {new Date().getFullYear()}, all rights reserved.<a href="http://"></a>
            </div>
        </div>
    )
}

export default Footer;