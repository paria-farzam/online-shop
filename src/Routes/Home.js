import HomeCarousel from "../Components/Home/HomeCarousel";
import React from "react";
import Newest from "../Components/Home/Newest";
import BestSeller from "../Components/Home/BestSeller";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>

      <HomeCarousel />

      <div>
        <Link to="/women">
          <div>
            <img alt='lorem' src="https://i.pinimg.com/564x/af/9e/7f/af9e7fe40ecd02493abad5806a583643.jpg" />
            <p>زنانه</p>
          </div>
        </Link>
        <Link to="/men">
          <div>
            <img alt='lorem' src="https://i.pinimg.com/564x/6f/80/47/6f8047b548a42f567695e07e4aafaef6.jpg" />
            <p>مردانه</p>
          </div>
        </Link>
        <Link to="/kids">
          <div>
            <img alt='lorem' src="https://i.pinimg.com/564x/b9/34/d3/b934d3aa82aa6f04bd2f0f12155702fd.jpg" />
            <p>بچگانه</p>
          </div>
        </Link>
      </div>

      <h1>جدیدترین ها</h1>
      <Newest />
      <h1>پرفروش ترین ها</h1>
      <BestSeller />
    </>
  );
};

export default Home;
