import React from "react";
import './styles.css';
import NotFound404 from "./404.jpg";
import NotFound404mobile from "./4044.jpg";

const NotFound = () => {

    const footer = document.querySelector('#footer');
    footer.classList.add('d-none');
  return (
    <div className='not-found d-flex align-content-center'>
        <img alt='404 not found' src={NotFound404} className='d-none flex-row d-md-block' />
        <img alt='404 not found' src={NotFound404mobile} className='d-md-none mt-5' />
    </div>
  );
};

export default NotFound;
