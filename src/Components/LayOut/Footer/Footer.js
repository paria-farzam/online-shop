import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer'>
            <div>
                <h2>شماره تماس</h2>
                <h3>09123456789</h3>
                <h3>051-39999999</h3>
            </div>
            <div>
                <h2>ایمیل</h2>
                <h3>example@gmail.com</h3>
            </div>
            <div>
                <h2>شبکه های اجتماعی</h2>
                <Link to='#'><i className="fab fa-instagram"></i></Link>
                <Link to='#'><i className="fab fa-telegram-plane"></i></Link>
                <Link to='#'><i className="fab fa-facebook-f"></i></Link>
            </div>
            <h2>ارتباط با ما</h2>
            <h2>درباره ما</h2>
        </div>
    );
};

export default Footer;