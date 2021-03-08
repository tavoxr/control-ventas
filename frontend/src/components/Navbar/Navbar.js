import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';
import '../../styles/navbar.css'

class Navbar extends React.Component{

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
    // render(){

      // const { isAuthenticated, user } = this.props.auth;
//         return(
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link active" aria-current="page" href="#">Home</a>
//         <Link class="nav-link" to="/products">My Products</Link>
//         <Link class="nav-link" to="/register">Register</Link>
//         <Link class="nav-link " to="/login" tabindex="-1" aria-disabled="true">Login</Link>
//       </div>
//     </div>
//   </div>
// </nav>

//         )
//     }
render() {
  const { isAuthenticated, user } = this.props.auth;

  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}` : ''}</strong>
      </span>
     
      <li className="nav-item">
        <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
          Logout
        </button>
      </li>
     
    </ul>
  );

  const authMenu = (
    <React.Fragment>
      <li className="nav-item">
    <Link  to="/products" >My Products</Link>
    </li>
    <li className="nav-item">
    <Link   to="/store">Store</Link>
    </li>
    <li className="nav-item">
    <Link to="/cart" id="cartLink" ><i id="cart-icon" className="fas fa-shopping-cart text-white"></i></Link>
    </li>
    <p id="cart-total">0</p>
    
    </React.Fragment>
  )

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          {isAuthenticated ? authMenu : ''}
        </div>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
}
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout} )(Navbar)