import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./mobile.css";
import { push as Menu } from "react-burger-menu";
import Search from "./Search";

const Header = () => {
  const MyContext = React.createContext();

  //search box
  const [isOpen, setIsOpen] = useState(true);
  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
    let searchContainer = document.querySelector("#search-box-container");
    if (isOpen) {
      searchContainer.classList.remove("d-none");
    } else {
      searchContainer.classList.add("d-none");
    }
  };

  const closeSearchBox = () => {
    let searchContainer = document.querySelector("#search-box-container");
    let status = searchContainer.classList.contains('d-none');
    if(!status){
      searchContainer.classList.add('d-none');
    }
  }

  //animated hamburger menu icon
  const animatedIcon = (e) => {
    e.target.classList.add("animation");
    setTimeout(() => {
      e.target.classList.remove("animation");
    }, 250);
  };

  // create the provider
  const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false);
    return (
      <MyContext.Provider
        value={{
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
        }}
      >
        {props.children}
      </MyContext.Provider>
    );
  };

  // create the buttons that calls a context function to set a new open state when clicked
  const Button = () => {
    const ctx = useContext(MyContext);
    return (
      <button className="hamburger-btn p-0" onClick={ctx.toggleMenu}>
        {/* <Hamburger size={31} distance="lg" color="rgb(59, 56, 57)" rounded /> */}
        <i className="fas fa-bars" onClick={animatedIcon}></i>
      </button>
    );
  };

  // create a navigation component that wraps the burger menu
  const Navigation = () => {
    const ctx = useContext(MyContext);

    return (
      <Menu
        right
        width={"80vw"}
        customBurgerIcon={false}
        isOpen={ctx.isMenuOpen}
        onStateChange={(state) => ctx.stateChangeHandler(state)}
        className="shadow-lg"
      >
        <NavLink
          className="menu-item text-decoration-none"
          to="/register"
          onClick={ctx.toggleMenu}
          onMouseDown={closeSearchBox}
        >
          <span>
            <strong>ورود / ثبت نام</strong>
          </span>
        </NavLink>
        <NavLink
          className="menu-item text-decoration-none text-black-50"
          to="/"
          exact
          onClick={ctx.toggleMenu}
          onMouseDown={closeSearchBox}
        >
          <strong>خانه</strong>
        </NavLink>
        <NavLink
          className="menu-item text-decoration-none"
          to="/women"
          onClick={ctx.toggleMenu}
          onMouseDown={closeSearchBox}
        >
          زنانه
        </NavLink>
        <NavLink
          className="menu-item text-decoration-none"
          to="/men"
          onClick={ctx.toggleMenu}
          onMouseDown={closeSearchBox}
        >
          مردانه
        </NavLink>
        <NavLink
          className="menu-item text-decoration-none"
          to="/kids"
          onClick={ctx.toggleMenu}
          onMouseDown={closeSearchBox}
        >
          بچگانه
        </NavLink>
      </Menu>
    );
  };

  return (
    <header>
      <nav id="page-wrap">
        <Link to="/" className="text-decoration-none" onMouseDown={closeSearchBox}>
          <h1 className="text-center logo my-2">
            I<span>*</span>Sh<span>OP</span>
          </h1>
        </Link>

        <hr className="mx-auto my-0" />

        <div className="navbar">
          <div className="d-md-none">
            <MyProvider>
              <div>
                <Button />
                <Navigation />
              </div>
            </MyProvider>
          </div>
          <div className="d-none d-md-inline navbar-expand-md">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  ورود / ثبت نام
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/women">
                  زنانه
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/men">
                  مردانه
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kids">
                  بچگانه
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-content-center">
            <button className="search-btn" onClick={toggleSearchBox}>
              <i className="fas fa-search"></i>
            </button>
            <Link to="/cart">
              <p className="badge mb-0" id="counter">
                0
              </p>
              <i className="fas fa-shopping-bag"></i>
            </Link>
          </div>
        </div>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
