import React from "react";

import "./FooterStyle.css"


const Footer = () => {
    return <div>
        <footer>
            <div class="top">
                <div class="pages">
                    <ul>
                        <h3>Brand Name</h3>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Catalog</a></li>
                        <li><a href="/">Search</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                    <ul>
                        <h3>Careers</h3>
                        <li><a href="/">Apply Online</a></li>
                        <li><a href="/">Available Positions</a></li>
                    </ul>

                    <ul>
                        <h3>About Us</h3>
                        <li><a href="/">Zalo</a></li>
                        <li><a href="/">Email</a></li>
                        <li><a href="/">Facebook</a></li>
                    </ul>
                </div>
                <div class="newsletter">
                    <h3>Stay in Touch</h3>
                    <form>
                        <input
                            type="email"
                            name="newsletter_email"
                            id="newsletter_email"
                            placeholder="Email"
                        />
                        <input type="button" value="Submit" />
                    </form>
                </div>
            </div>
            <div class="social">
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
            </div>
            <div class="info">
                <div class="legal">
                    <a href="/">Terms & Conditions</a><a href="/">Privacy Policy</a>
                </div>
            </div>
        </footer>
    </div >
};

export default Footer;