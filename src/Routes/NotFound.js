import React from "react";

const NotFound = () => {

    const footer = document.querySelector('#footer');
    footer.classList.add('d-none');
  return (
    <div>
        <h1>404</h1>
      <h1>page not found</h1>
    </div>
  );
};

export default NotFound;
