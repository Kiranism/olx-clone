import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../store/Context";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/login");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="Account">
          {user ? (
            <span>hello &nbsp;{user.displayName}</span>
          ) : (
            <NavLink className="text-link" to="/login">
              Login
            </NavLink>
          )}

          <hr />
        </div>
        {user && <span onClick={handleLogout}> Logout </span>}
        {user && (
          <NavLink to="/create">
            <div className="sellMenu">
              <SellButton></SellButton>
              <div className="sellMenuContent">
                <SellButtonPlus></SellButtonPlus>
                <span>SELL</span>
              </div>
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
