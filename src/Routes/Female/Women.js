import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/Women/BestSeller";
import Newest from "../../Components/Women/Newest";
import "./mobile.css";

const Women = () => {
  return (
    <div className="m-0">
      <div className="back-links w-100 py-1 px-2">
        <Link to="/" className="text-decoration-none text-dark">
          خانه
        </Link>
      </div>
      <div className="row justify-content-center m-0">
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/FShirt"
        >
          <img
            src="https://i.pinimg.com/564x/ad/b3/8a/adb38af9ff50d806e065c6143b04a84f.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">پیراهن</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/FTShirt"
        >
          <img
            src="https://i.pinimg.com/564x/35/b2/d7/35b2d759ec0e4039ba16604be36d3028.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">تیشرت</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/FSkirt"
        >
          <img
            src="https://i.pinimg.com/564x/6c/78/64/6c786491479389e65fea6d65ef30d0bd.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">دامن</h1>
        </Link>
        <Link
          onClick={()=>window.scrollTo(0, 0)}
          className="category p-0 col-12 my-5 text-center text-decoration-none text-dark"
          to="/FPants"
        >
          <img
            src="https://i.pinimg.com/564x/cf/ad/75/cfad750da111c19af5960fedccf6c119.jpg"
            alt="lorem"
          />
          <h1 className="fs-1 py-2">شلوار</h1>
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

export default Women;
