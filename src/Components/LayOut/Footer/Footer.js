import React from "react";
import { Link } from "react-router-dom";
import "./mobile.css";

const Footer = () => {
  return (
    <>
      {/* <hr className="text-muted m-0" /> */}
      <div id="footer" className="row mx-0 py-4 px-4 text-dark">
        <Link
          className="col-6 text-decoration-none about-contact fs-1"
          to="/contact"
        >
            <span className='fs-1'>&#10022;</span> 
          ارتباط با ما
        </Link>

        <Link
          className="col-6 text-decoration-none about-contact fs-1"
          to="/about"
        >
            <span className='fs-1'>&#10022;</span> 
          درباره ما
        </Link>
        <div className="text-muted col-5 fs-3 my-4">
          <h2>شماره تماس</h2>
          <h3 className="fs-5">09153456789</h3>
          <h3 className="fs-5">051-39999999</h3>
        </div>

        <div className="text-muted col-7 fs-3 my-4">
          <h2><span className='fs-1'>&#9993;</span>  ایمیل</h2>
          <h3 className="fs-5">example@gmail.com</h3>
        </div>

        <div className="row social-media-container m-0 py-3 align-content-center justify-content-between">
          <h2 className="col-6 p-0 mb-0 align-self-center">ما را دنبال کنید:</h2>
          <div className="row icon-container p-0 col-6 justify-content-center align-content-center">
            <Link
              className="col-4 social-media-icon text-decoration-none text-dark mx-1"
              to="#"
            >
              <img
                className="icon"
                src="https://img.icons8.com/fluency-systems-regular/32/000000/telegram-app.png"
              />
            </Link>
            <Link
              className="col-4 social-media-icon text-decoration-none text-dark mx-1"
              to="#"
            >
              <img
                className="icon"
                src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
