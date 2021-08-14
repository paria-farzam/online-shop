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
            <img alt='lorem' src="images/lorem.png" />
            <p>زنانه</p>
          </div>
        </Link>
        <Link to="/men">
          <div>
            <img alt='lorem' src="images/lorem.png" />
            <p>مردانه</p>
          </div>
        </Link>
        <Link to="/kids">
          <div>
            <img alt='lorem' src="images/lorem.png" />
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
