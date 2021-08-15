import React from "react";
import { Link } from "react-router-dom";

const Filter = (props) => {
  let goods = props.goods;
  console.log(goods);

  return (
    <div>
      <button>فیلتر</button>
      <div>
          
      </div>
      <Link to='/pants' goods={goods} />
    </div>
  );
};

export default Filter;
