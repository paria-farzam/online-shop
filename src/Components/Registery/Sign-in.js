import React, { useContext, useState } from "react";
import { render } from 'react-dom';
import RegisteryContext from "../../Contexts/RegisteryContext";
import './sign-in.css';

const SignIn = () => {
  const registeryContext = useContext(RegisteryContext);

  //select err texts
  let phoneNumber = document.querySelector("#phoneErr");
  let enteredPassword = document.querySelector("#passErr");

  //states
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // set onChanges
  const phoneHandler = (e) => setPhone(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);

  //onSubmit
  const SigningIn = (e) => {
    e.preventDefault();
    const users = registeryContext.users;
    const user = users.find((user) => user.phoneNum === phone);

    if (user === undefined) {
      phoneNumber.classList.remove("d-none");
    } else {
      if (user.pass !== password) {
        phoneNumber.classList.add("d-none");
        enteredPassword.classList.remove("d-none");
      } else {
        phoneNumber.classList.add("d-none");
        enteredPassword.classList.add("d-none");

        setPassword("");
        setPhone("");
        // render('/' , document.getElementById('root'));
      }
    }
  };

  return (
    <form className="sign-in d-flex flex-column mb-5" onSubmit={SigningIn} >
      <label className='mb-1'>شماره تلفن:</label>
      <input
        className='mb-3'
        value={phone}
        onChange={phoneHandler}
        required
      />
      <p className="d-none" id="phoneErr">
        این شماره تلفن ثبت نشده است
      </p>

      <label className='mb-1'>گذرواژه:</label>
      <input
        className='mb-4'
        value={password}
        onChange={passwordHandler}
        required
      />
      <p className="d-none" id="passErr">
        گذرواژه اشتباه است
      </p>

      <button type="submit" className='mx-auto px-5 py-1' >ورود</button>
    </form>
  );
};

export default SignIn;
