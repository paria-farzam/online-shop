import HomeCarousel from "../../Components/Home/HomeCarousel";
import React from "react";
import Newest from "../../Components/Home/Newest";
import BestSeller from "../../Components/Home/BestSeller";
import { Link } from "react-router-dom";
import './mobile.css'

const Home = () => {
  return (
    <>

      <HomeCarousel />

      <div className='d-flex flex-row justify-content-between mx-3 my-4'>
        <Link className='text-decoration-none' to="/women">
          <div className='home-categories d-flex flex-column justify-content-center align-items-between'>
            <img alt='lorem' src="./images/cover/woman.jpg" className='d-none d-md-inline' />
            <img alt='lorem' src="./images/cover/woman-mobile.jpg" className='d-md-none' />
            <p className='text-center text-secondary fs-5 mt-1'>زنانه</p>
          </div>
        </Link>
        <Link className='text-decoration-none' to="/men">
          <div className='home-categories d-flex flex-column justify-content-center align-items-between'>
            <img alt='lorem' src="./images/cover/man.jpg" className='d-none d-md-inline' />
            <img alt='lorem' src="./images/cover/man-mobile.jpg" className='d-md-none' />
            <p className='text-center text-secondary fs-5 mt-1'>مردانه</p>
          </div>
        </Link>
        <Link className='text-decoration-none' to="/kids">
          <div className='home-categories d-flex flex-column justify-content-center align-items-between'>
            <img alt='lorem' src="./images/cover/kid.jpg" className='d-none d-md-inline' />
            <img alt='lorem' src="./images/cover/kid-mobile.jpg" className='d-md-none' />
            <p className='text-center text-secondary fs-5 mt-1'>بچگانه</p>
          </div>
        </Link>
      </div>

      <h1 className='home-titr py-2 px-3 fs-3 mx-3 mb-3 mt-5'><span className='symbol'>&#9885;</span>جدیدترین ها</h1>
      <Newest />
      <h1 className='home-titr py-2 px-3 fs-3 mx-3 mb-3 mt-5'><span className='symbol'>&hearts;</span>پرفروش ترین ها</h1>
      <BestSeller />
    </>
  );
};

export default Home;
