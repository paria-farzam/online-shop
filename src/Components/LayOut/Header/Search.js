import React, { useState } from "react";
import "./mobile.css";

const Search = () => {
  let Goods = [
    { id: 0, src: "/MShirt", name: "پیراهن مردانه" },
    { id: 1, src: "/FTShirt", name: "تیشرت زنانه" },
    { id: 2, src: "/FShirt", name: "پیراهن زنانه" },
    { id: 3, src: "/FPants", name: "شلوار زنانه" },
    { id: 4, src: "/FSkirt", name: "دامن زنانه" },
    { id: 5, src: "/KShirt", name: "پیراهن بچگانه" },
    { id: 6, src: "/KTShirt", name: "تیشرت بچگانه" },
    { id: 7, src: "/KPants", name: "شلوار بچگانه" },
    { id: 8, src: "/KSocks", name: "جوراب بچگانه" },
    { id: 9, src: "/MCoat", name: "کت مردانه" },
    { id: 10, src: "/MPants", name: "شلوار مردانه" },
    { id: 11, src: "/MTie", name: "کراوات" },
  ];

  const [searchedText, SetSearchesText] = useState("");
  const [Link, setLink] = useState([]);
  let findedGoods = [];
  let result = [];
  let src = [];
  let link = [];

  const filterGoods = (e) => {
    let booleanArr = Goods.map((goods) =>
      goods.name.startsWith(e.target.value)
    );
    let IndexOfTrue = booleanArr.flatMap((bool, index) => (bool ? index : []));

    while (IndexOfTrue.length > 0) {
      findedGoods = [
        ...findedGoods,
        Goods.find((goods) => goods.id === IndexOfTrue[0]),
      ];
      IndexOfTrue.shift();
    }
    SetSearchesText(e.target.value);

    if (findedGoods.length < Goods.length) {
      for (let i = 0; i < findedGoods.length; i++) {
        result[i] = React.createElement(
          "li",
          { key: Goods[i].id },
          findedGoods[i].name
        );
        src[i] = findedGoods[0].src;

        link[i] = React.createElement("a", { href: src[i] }, result[i]);
      }
    }

    setLink(link);
  };

  return (
    <div id="search-box-container" className="d-none">
      <hr className="w-100 text-muted m-0" />

      <input
        value={searchedText}
        onChange={filterGoods}
        autoFocus={true}
        className="search-box d-block m-0 px-4 py-3"
        placeholder="جست و جو..."
      />

      <ul className="search-ul">{Link}</ul>
    </div>
  );
};

export default Search;