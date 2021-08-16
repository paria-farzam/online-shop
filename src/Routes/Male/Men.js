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
          <img src="https://i.pinimg.com/564x/46/da/e6/46dae6beaceb1d04dd691ad0c0e82628.jpg" alt="lorem" />
          <h6>پیراهن</h6>
        </Link>
        <Link to="/MPants">
          <img src="https://i.pinimg.com/564x/c0/9d/4a/c09d4a937d7d8b3059c227d42d36b64f.jpg" alt="lorem" />
          <h6>شلوار</h6>
        </Link>
        <Link to="/MCoat">
          <img src="https://i.pinimg.com/564x/83/2f/c2/832fc255e78ef1da5e25e9d5ba787b6b.jpg" alt="lorem" />
          <h6>کت</h6>
        </Link>
        <Link to="/MTie">
          <img src="https://i.pinimg.com/564x/f6/77/d3/f677d34c772e3c686bbe13052bbdead6.jpg" alt="lorem" />
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
