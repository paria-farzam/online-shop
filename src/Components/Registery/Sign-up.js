import React, { useContext, useState } from "react";
import RegisteryContext from "../../Contexts/RegisteryContext";
import "./sign-up.css";

const SignUp = () => {
  const registeryContext = useContext(RegisteryContext);

  //select err texts
  const phoneErr = document.querySelector("#phoneErr");
  const passErr = document.querySelector("#passErr");
  const rePassErr = document.querySelector("#rePassErr");

  //states
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

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

  //onSubmit
  const SigningUp = (e) => {
    e.preventDefault();

    if (phone.substring(0, 2) !== "09" || phone.length !== 11) {
      phoneErr.classList.remove("d-none");
    } else {
      phoneErr.classList.add("d-none");
    }

    if (password.length < 8) {
      passErr.classList.remove("d-none");
    } else {
      passErr.classList.add("d-none");
    }

    if (password !== repeatPass) {
      rePassErr.classList.remove("d-none");
    } else {
      rePassErr.classList.add("d-none");
    }

    if (
      phone.substring(0, 2) === "09" &&
      phone.length === 11 &&
      password.length >= 8 &&
      password === repeatPass
    ) {
      let user = { name: userName, phoneNum: phone, pass: password };
      registeryContext.dispatch({ type: "add-user", payload: user });
    }
  };

  return (
    <form className="sign-up d-flex flex-column" onSubmit={SigningUp}>
      <label className="mb-1">نام کاربری</label>
      <input
        className="mb-3"
        value={userName}
        onChange={nameHandler}
        type="text"
        required
      />

      <label className="mb-1">جنسیت</label>
      <select className='mb-3'>
        <option className='hello' value="choose">انتخاب کنید</option>
        <option className='hello' value="female">خانم</option>
        <option className='hello' value="male">آقا</option>
        <option className='hello' value="other">دیگر</option>
      </select>

      <label className="mb-1">شماره تلفن</label>
      <input
        className="mb-3"
        value={phone}
        onChange={phoneHandler}
        type="tel"
        required
      />
      <p className="d-none" id="phoneErr">
        شماره تلفن وارد شده صحیح نمی باشد
      </p>

      <label className="mb-1">گذرواژه(حداقل هشت رقم)</label>
      <input
        className="mb-3"
        type="password"
        value={password}
        onChange={passwordHandler}
        required
      />
      <p className="d-none" id="passErr">
        گذرواژه کوتاه تر از حد مجاز است
      </p>

      <label className="mb-1">تکرار گذرواژه</label>
      <input
        className="mb-3"
        value={repeatPass}
        onChange={repeatPassHandler}
        type="password"
        required
      />
      <p className="d-none" id="rePassErr">
        گذرواژه با تکرار آن یکسان نیست
      </p>

      <button className='mx-auto mb-5 px-3 py-1 mt-4' type="submit">ثبت نام</button>
    </form>
  );
};

export default SignUp;
