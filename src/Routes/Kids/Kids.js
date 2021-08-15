import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/Kids/BestSeller";
import Newest from "../../Components/Kids/Newest";

const Kids = () => {
  return (
    <div>
      <Link to='/'>خانه</Link>
      <div>
        <Link to="/KShirt">
          <img src="images/lorem.png" alt="lorem" />
          <h6>پیراهن</h6>
        </Link>
        <Link to="/KTShirt">
          <img src="images/lorem.png" alt="lorem" />
          <h6>تیشرت</h6>
        </Link>
        <Link to="/KPants">
          <img src="images/lorem.png" alt="lorem" />
          <h6>شلوار</h6>
        </Link>
        <Link to="/KSocks">
          <img src="images/lorem.png" alt="lorem" />
          <h6>جوراب</h6>
        </Link>
      </div>
      <div>
        <h1>جدیدترین ها</h1>
        <Newest />
      </div>
      <div>
        <h1>پرفروش ترین ها</h1>
        <BestSeller />
      </div>
    </div>
  );
};

export default Kids;
