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
        <div className="searchbaar">
          <div className="logo1">
            <img src="search.png" className="search_icon" alt="Search Icon" />
          </div>
          <a href="/search">SearchBar</a>
        </div>
        <div className="home">
          <a href="/">Home</a>
        </div>
        <div className="signIn">
          <div className="logo1">
            <img src="signin_logo.png" className="icon" alt="Sign In Icon" />
          </div>
          <a href='/singIn'>Sign In</a>
        </div>
        <div className="Cart">
          <div className="logo1">
            <img src="cart_icon.png" className="icon" alt="Cart Icon" />
          </div>
          <a href="/cart">My Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Header;







// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import './globals.css'; 

// function Header() {
//   return (
//     <div className="container_header">
// 		<div className="logo">
//         	<img src="your-logo.png" className="logo_img" alt="Logo" />
// 		</div>
// 		<div className="nav1">
// 			<img src="search.png" className="search_icon" alt="Search Icon" />
// 			<a href="/search">SearchBar</a>
// 			<div className='home'>
// 				<a href="/" className="home">Home</a>
// 			</div>
// 			<div className='signin'>
// 			<img src="signin_logo.png" className="search_icon" alt="Search Icon" />
// 			<a href='/singIn' className="signIn">Sign In</a>
// 			</div>
// 			<div className='my cart'>
// 			<a href="/cart" className="Cart">My Cart</a>
// 			</div>
// 		</div>
//     </div>
//   );
// }
// export default Header;

































