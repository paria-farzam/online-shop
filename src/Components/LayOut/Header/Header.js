import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './mobile.css';

const Header = () => {

    const closeMenu = () =>{
        const collapseBtn = document.querySelector('#collapse-btn');
        const menu = document.querySelector('#navbarNav');

        // menu.classList.add('collapsing');
        // setTimeout(() => {
        //     menu.classList.remove('collapsing');
        // }, 1000)

        menu.classList.remove('show');
        collapseBtn.classList.add('collapsed');
    }

    return (
        <div>
            <Link to='/' className="text-center">Logo</Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" id='collapse-btn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div>
                    <button><i className="fas fa-search"></i></button>
                    <button><i className="fas fa-shopping-cart"></i></button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink className='nav-link' onClick={closeMenu} to='/register' >ورود / ثبت نام</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' onClick={closeMenu} to='/women' >زنانه</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' onClick={closeMenu} to='/men' >مردانه</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' onClick={closeMenu} to='/kids' >بچگانه</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;