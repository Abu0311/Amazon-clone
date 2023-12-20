import React from 'react';
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-column">
					<h3>Get to Know Us</h3>
					<ul>
						<li>About Us</li>
						<li>Careers</li>
						<li>Press Releases</li>
						{/* ... */}
					</ul>
				</div>
				<div className="footer-column">
					<h4>Make Money with Us</h4>
					<ul>
						<li>Sell on Amazon</li>
						<li>Sell Under Amazon Accelerator</li>
						<li>Amazon Global Selling</li>
						{/* ... */}
					</ul>
				</div>
				{/* ... */}
			</div>
			<div className="footer-bottom">
				<h2>&copy; 2023 Amazon.com. All rights reserved.</h2>
			</div>
		</footer>
	);
}

export default Footer;
