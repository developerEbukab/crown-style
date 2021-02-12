import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from "../assets/crown.svg";
import CartIcon from '../Cart-Icon/Cart-Icon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import "./Header.styles.scss";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser, hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {currentUser ? 
          <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> :
          <Link className="option" to="/sign-in">SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      {!hidden && <CartDropdown/>}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
