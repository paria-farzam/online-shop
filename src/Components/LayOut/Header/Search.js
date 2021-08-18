import React, { useState } from "react";
import "./mobile.css";

const Search = () => {
  let Goods = [
    { id: 0, src : '/MShirt' , name: "پیراهن مردانه" },
    { id: 1, src : '/FTShirt' , name: "تیشرت زنانه" },
    { id: 2, src : '/FShirt' , name: "پیراهن زنانه" },
    { id: 3, src : '/FPants' , name: "شلوار زنانه" },
    { id: 4, src : '/FSkirt' , name: "دامن زنانه" },
    { id: 5, src : '/KShirt' , name: "پیراهن بچگانه" },
    { id: 6, src : '/KTShirt' , name: "تیشرت بچگانه" },
    { id: 7, src : '/KPants' , name: "شلوار بچگانه" },
    { id: 8, src : '/KSocks' , name: "جوراب بچگانه" },
    { id: 9, src : '/MCoat' , name: "کت مردانه" },
    { id: 10, src : '/MPants' , name: "شلوار مردانه" },
    { id: 11, src : '/MTie' , name: "کراوات" }
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
        result[i] = React.createElement("li", {key : Goods[i].id}, findedGoods[i].name);
        src[i] = findedGoods[0].src;

        link[i] = React.createElement('a', {href : src[i]}, result[i]);
        console.log('link', link);
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

      <ul>
        {Link}
      </ul>
    </div>
  );
};

export default Search;

// import React, { useState } from 'react';

// // This holds a list of some fiction people
// // Some  have the same name but different age and id
// const USERS = [
//   { id: 1, name: 'Andy', age: 32 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Tom Hulk', age: 40 },
//   { id: 4, name: 'Tom Hank', age: 50 },
//   { id: 5, name: 'Audra', age: 30 },
//   { id: 6, name: 'Anna', age: 68 },
//   { id: 7, name: 'Tom', age: 34 },
//   { id: 8, name: 'Tom Riddle', age: 28 },
//   { id: 9, name: 'Bolo', age: 23 },
// ];

// function Search() {
//   const [name, setName] = useState('');
//   const [foundUsers, setFoundUsers] = useState(USERS);

//   const filter = (e) => {
//     const keyword = e.target.value;

// if (keyword !== '') {
//   const results = USERS.filter((user) => {
//     return user.name.toLowerCase().startsWith(keyword.toLowerCase());
//     // Use the toLowerCase() method to make it case-insensitive
//   });
//   setFoundUsers(results);
// } else {
//   setFoundUsers(USERS);
//   // If the text field is empty, show all users
// }

//     setName(keyword);
//   };

//   return (
//     <div className="container">
//       <input
//         type="search"
//         value={name}
//         onChange={filter}
//         className="input"
//         placeholder="Filter"
//       />

//       <div className="user-list">
//         {foundUsers && foundUsers.length > 0 ? (
//           foundUsers.map((user) => (
//             <li key={user.id} className="user">
//               <span className="user-id">{user.id}</span>
//               <span className="user-name">{user.name}</span>
//               <span className="user-age">{user.age} year old</span>
//             </li>
//           ))
//         ) : (
//           <h1>No results found!</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Search;
