import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";

// make a new context
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
  return <button onClick={ctx.toggleMenu}>Toggle menu</button>;
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
      <NavLink
        onClick={() => closeMenu()}
        className="nav-link menu-item"
        to="/register"
      >
        ورود / ثبت نام
      </NavLink>
      <NavLink
        onClick={() => closeMenu()}
        className="nav-link menu-item"
        to="/women"
      >
        زنانه
      </NavLink>
      <NavLink
        onClick={() => closeMenu()}
        className="nav-link menu-item"
        to="/men"
      >
        مردانه
      </NavLink>
      <NavLink
        onClick={() => closeMenu()}
        className="nav-link menu-item"
        to="/kids"
      >
        بچگانه
      </NavLink>
    </Menu>
  );
};
