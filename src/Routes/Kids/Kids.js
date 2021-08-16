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
          <img src="https://i.pinimg.com/564x/7c/e8/8d/7ce88d06db6859726af1774e0c50a0f3.jpg" alt="lorem" />
          <h6>پیراهن</h6>
        </Link>
        <Link to="/KTShirt">
          <img src="https://i.pinimg.com/564x/9c/5c/bd/9c5cbd7bade1cbc997bb3381c9649f9a.jpg" alt="lorem" />
          <h6>تیشرت</h6>
        </Link>
        <Link to="/KPants">
          <img src="https://i.pinimg.com/564x/18/7d/90/187d90ff36161c001ebf6c5e3eebe32c.jpg" alt="lorem" />
          <h6>شلوار</h6>
        </Link>
        <Link to="/KSocks">
          <img src="https://i.pinimg.com/564x/7c/f5/c4/7cf5c477964e3c11628813531cf8fb89.jpg" alt="lorem" />
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
