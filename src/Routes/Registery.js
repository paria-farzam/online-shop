import React, { useState } from "react";
import SignIn from "../Components/Registery/Sign-in";
import SignUp from "../Components/Registery/Sign-up";

const Register = () => {
  const [signing, setSigning] = useState(true);

  //change registery form
  const signToggle = () => {
    setSigning(!signing);
  };

  return (
    <>
      {signing ? <SignIn /> : <SignUp />}
      <button onClick={signToggle}>
        {signing ? <p>عضو نیستید؟! ثبت نام</p> : <p>عضو هستید؟! ورود</p>}
      </button>
    </>
  );
};

export default Register;
