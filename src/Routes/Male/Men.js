import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/Men/BestSeller";
import Newest from "../../Components/Men/Newest";
import "./mobile.css";

const Men = () => {
  return (
    <div>
      <div className="back-links w-100 py-1 px-2">
        <Link to="/" className="text-decoration-none text-dark">
          خانه
        </Link>
      </div>
      <div className="row justify-content-center m-0">
        <Link
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/MShirt"
        >
          <img
            src="https://i.pinimg.com/564x/46/da/e6/46dae6beaceb1d04dd691ad0c0e82628.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2 font-cursive">پیراهن</h1>
        </Link>
        <Link
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/MPants"
        >
          <img
            src="https://i.pinimg.com/564x/c0/9d/4a/c09d4a937d7d8b3059c227d42d36b64f.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2 font-cursive">شلوار</h1>
        </Link>
        <Link
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/MCoat"
        >
          <img
            src="https://i.pinimg.com/564x/83/2f/c2/832fc255e78ef1da5e25e9d5ba787b6b.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2 font-cursive">کت</h1>
        </Link>
        <Link
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/MTie"
        >
          <img
            src="https://i.pinimg.com/564x/f6/77/d3/f677d34c772e3c686bbe13052bbdead6.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2 font-cursive">کراوات</h1>
        </Link>
      </div>
      <div>
        <h1 className="home-titr py-2 px-3 fs-3 mx-3 mb-3 mt-5">جدیدترین ها</h1>
        <Newest />
      </div>
      <div>
        <h1 className="home-titr py-2 px-3 fs-3 mx-3 mb-3 mt-5">
          پرفروش ترین ها
        </h1>
        <BestSeller />
      </div>
    </div>
  );
};

export default Men;
