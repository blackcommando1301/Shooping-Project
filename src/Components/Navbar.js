import React from "react";
import { useHistory } from "react-router";

const Navbar = () => {
  let history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <h3
            onClick={() => {
              history.push(`/home`);
            }}
            className="navbar-brand"
            href=" "
          >
            Lux Life
          </h3>

          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          ></div>
          <button
            onClick={() => {
              history.push(`/cart`);
            }}
            className="btn btn-outline-warning "
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
