import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/Kids/BestSeller";
import Newest from "../../Components/Kids/Newest";
import "./mobile.css";

const Kids = () => {
  return (
    <div>
      <div className="back-links w-100 py-1 px-2">
        <Link to="/" className="text-decoration-none text-dark">
          خانه
        </Link>
      </div>
      <div className="row justify-content-center m-0">
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/KShirt"
        >
          <img
            src="https://i.pinimg.com/564x/7c/e8/8d/7ce88d06db6859726af1774e0c50a0f3.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">پیراهن</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/KTShirt"
        >
          <img
            src="https://i.pinimg.com/564x/9c/5c/bd/9c5cbd7bade1cbc997bb3381c9649f9a.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">تیشرت</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/KPants"
        >
          <img
            src="https://i.pinimg.com/564x/18/7d/90/187d90ff36161c001ebf6c5e3eebe32c.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">شلوار</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/KSocks"
        >
          <img
            src="https://i.pinimg.com/564x/7c/f5/c4/7cf5c477964e3c11628813531cf8fb89.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">جوراب</h1>
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

export default Kids;
