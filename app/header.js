import React from 'react';
import './globals.css';

function Header({ onSignOut }) {
	return (
		<div className='container'>
			<div className="container_header">
				<div className="logo">
					<img src="pngegg.png" className="logo_img" alt="Logo" />
				</div>
				<div className="nav1">
					<a href="/search" className="nav_item">
						<img src="search.png" alt="Search Icon" />SearchBar</a>
					<a href="/" className="nav_item">
						<img src="home.png" alt="Cart Icon" />Home</a>
					<button onClick={onSignOut} className="nav_item signout">
						<img src="signin_logo.png" alt="Sign In Icon" />
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
export default Header;





