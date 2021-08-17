import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./mobile.css";
import { fallDown as Menu } from "react-burger-menu";
import { Spin as Hamburger } from "hamburger-react";

const Header = () => {
  const MyContext = React.createContext();

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

  // create a button that calls a context function to set a new open state when clicked
  const Button = () => {
    const ctx = useContext(MyContext);
    return (
      <button className="hamburger-btn p-0" onClick={ctx.toggleMenu}>
        <Hamburger size={31} distance="lg" color="rgb(59, 56, 57)" rounded />
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
      >
        <NavLink className="nav-link menu-item" to="/register">
          ورود / ثبت نام
        </NavLink>
        <NavLink className="nav-link menu-item" to="/women">
          زنانه
        </NavLink>
        <NavLink className="nav-link menu-item" to="/men">
          مردانه
        </NavLink>
        <NavLink className="nav-link menu-item" to="/kids">
          بچگانه
        </NavLink>
      </Menu>
    );
  };

  return (
    <header>
      <nav id="page-wrap">
        <Link to="/" className="text-decoration-none">
          <h1 className="text-center logo my-2">
            I<span>*</span>Sh<span>OP</span>
          </h1>
        </Link>

        <hr className="mx-auto my-0" />

        <div className="navbar">

          <div className='d-md-none'>
            <MyProvider >
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
            <button className="search-btn">
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
      </nav>
    </header>
  );
};

export default Header;
