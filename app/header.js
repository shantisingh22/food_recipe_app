import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

function Header() {
	return (
		<div className="container_header">
			<div className="logo">
				<img src="caesar salad.png" className="logo_img" alt="Logo" />
			</div>
			<div className="nav1">
				<a href="/search" className="nav_item">
					<img src="search.png" alt="Search Icon" />SearchBar</a>
				<a href="/" className="nav_item">
					<img src="home.png" alt="Cart Icon" />Home</a>
				<a href='/singIn' className="nav_item">
					<img src="signin_logo.png" alt="Sign In Icon" />Sign In</a>
				<a href="/cart" className="nav_item">My Cart
				</a>
			</div>
		</div>
	);
}
export default Header;
































