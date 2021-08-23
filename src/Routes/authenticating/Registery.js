import React, { useState } from "react";
import SignIn from "../../Components/Registery/Sign-in";
import SignUp from "../../Components/Registery/Sign-up";
import './styles.css'

const Register = () => {
  const [signing, setSigning] = useState(true);

  //change registery form
  const signToggle = () => {
    setSigning(!signing);
  };

  return (
    <div className='authenticating py-5 px-4 mx-auto my-5'>
      {signing ? <SignIn /> : <SignUp />}
      <button onClick={signToggle}  className='changeComponent'>
        {signing ? <p>عضو نیستید؟! ثبت نام</p> : <p>عضو هستید؟! ورود</p>}
      </button>
    </div>
  );
};

export default Register;
