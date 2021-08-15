import React, { useState } from "react";
import { Link } from "react-router-dom";

const Filter = (props) => {
  let goods = props.goods;
  console.log(goods);
  const [color, setColor] = useState('red')

  return (
    <div>
      <button>فیلتر</button>
      <div>
          
      </div>
      <Link to='/pants' color={color} />
    </div>
  );
};

export default Filter;
