import React, { useContext, useState } from "react";
import RegisteryContext from "../../Contexts/RegisteryContext";

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
      }
    }
  };

  return (
    <form className="sign-in" onSubmit={SigningIn}>
      <input
        value={phone}
        onChange={phoneHandler}
        placeholder="شماره تلفن"
        required
      />
      <p className="d-none" id="phoneErr">
        این شماره تلفن ثبت نشده است
      </p>

      <input
        value={password}
        onChange={passwordHandler}
        placeholder="پسورد"
        required
      />
      <p className="d-none" id="passErr">
        گذرواژه اشتباه است
      </p>

      <button type="submit">ورود</button>
    </form>
  );
};

export default SignIn;
