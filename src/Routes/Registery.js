import React, { useContext, useState } from "react";
import RegisteryContext from "../Contexts/RegisteryContext";

const Register = () => {
  //context
  const registeryContext = useContext(RegisteryContext);

  //states
  const [userNsame, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [signing, setSigning] = useState(true);

  // set onChanges
  const nameHandler = (e) => {
    setUserName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const repeatPassHandler = (e) => {
    setRepeatPass(e.target.value);
  };

  //set onSubmits
  const SignIn = (e) => {
    e.preventDefault();
  };
  const SignUp = (e) => {
    e.preventDefault();
    let user = {};
    registeryContext.dispatch({ type: "add-user", payload: { user: user } });
    console.log("[Registery.js:] ", registeryContext.state);
  };

  //change registery form
  const signToggle = () => {
    setSigning(!signing);
  };

  return (
    <div>
      {signing ? (
        <form className="sign-in" onSubmit={SignIn}>
          <input
            value={phone}
            onChange={phoneHandler}
            placeholder="شماره تلفن"
          />
          <input
            value={password}
            onChange={passwordHandler}
            placeholder="پسورد"
          />
          <button type="submit">ورود</button>
          <button onClick={signToggle}>عضو نیستید؟! ثبت نام</button>
        </form>
      ) : (
        <form className="sign-up" onSubmit={SignUp}>
          <input value={userNsame} onChange={nameHandler} placeholder="نام" />
          <input
            value={phone}
            onChange={phoneHandler}
            placeholder="شماره تلفن"
          />
          <input
            value={password}
            onChange={passwordHandler}
            placeholder="پسورد"
          />
          <input
            value={repeatPass}
            onChange={repeatPassHandler}
            placeholder="تکرار پسورد"
          />
          <button type="submit">ثبت نام</button>
          <button onClick={signToggle}>عضو هستید؟! ورود</button>
        </form>
      )}
    </div>
  );
};

export default Register;
