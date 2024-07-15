import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Header() {
  return (
    <div className='container_box'>
      <div className="row">
        <div className="col">
          <a href='/'>Home</a>
        </div>
        <div className="col">
          <a href='/search'>SearchBar</a>
        </div>
        <div className="col">
          <a href='/signIn'>Sign In</a>
        </div>
        <div className="col">
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
//     <div className='container_box'>
//       <div className="row">
//         <div className="col1">
//           <a href='/' className="btn btn-link">Home</a>
//         </div>
//         <div className="col2">
//           <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//           </form>
//         </div>
//         <div className="col3">
//           <a href='/signIn' className="btn btn-link">Sign In</a>
//         </div>
//         <div className="col4">
//           <a href="/cart" className="btn btn-link">My Cart</a>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Header;






// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Header() {
// 	return (
// 		<div className='container_box'>
// 		  	<div className="row">
// 				<div className="col1">
// 					<a href='/search'>SearchBar</a>
// 				</div>
// 				<form class="form-inline my-2 my-lg-0">
// 					<input class="searchbaar" type="search" placeholder="Search" aria-label="Search"></input>
// 				</form>
// 				<div className="col2">
// 					<a href='/'>Home</a>
// 				</div>
// 				<div className="col3">
// 					<a href='/signIn'>Sign In</a>
// 				</div>
// 				<div className="col4">
// 					<a href="/cart">My Cart</a>
// 				</div>
// 		  	</div>
// 		</div>
// 	);
// }
// export default Header;





























