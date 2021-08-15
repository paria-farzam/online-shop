import React from "react";
import { Link } from "react-router-dom";
import BestSeller from "../../Components/Men/BestSeller";
import Newest from "../../Components/Men/Newest";

const Men = () => {
  return (
    <div>
      <div>
        <Link to='/'>خانه</Link>
      </div>
      <div>
        <Link to="/MShirt">
          <img src="images/lorem.png" alt="lorem" />
          <h6>پیراهن</h6>
        </Link>
        <Link to="/MPants">
          <img src="images/lorem.png" alt="lorem" />
          <h6>شلوار</h6>
        </Link>
        <Link to="/MCoat">
          <img src="images/lorem.png" alt="lorem" />
          <h6>کت</h6>
        </Link>
        <Link to="/MTie">
          <img src="images/lorem.png" alt="lorem" />
          <h6>کراوات</h6>
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

export default Men;
