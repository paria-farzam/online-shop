import React, { useContext, useState } from "react";
import RegisteryContext from "../../Contexts/RegisteryContext";

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
      phoneErr.classList.remove('d-none')
    } else{
      phoneErr.classList.add('d-none')
    }

    if (password.length < 8) {
      passErr.classList.remove('d-none')
    } else{
      passErr.classList.add('d-none')
    }

    if (password !== repeatPass) {
      rePassErr.classList.remove('d-none')
    } else{
      rePassErr.classList.add('d-none')
    }

    if(phone.substring(0, 2) === "09" && phone.length === 11 && password.length >= 8 && password === repeatPass){
      let user = {name : userName, phoneNum : phone, pass : password};
      registeryContext.dispatch({ type: "add-user", payload: user });
    }

  };

  return (
    <form className="sign-up" onSubmit={SigningUp}>
      <label>نام کاربری</label>
      <input
        value={userName}
        onChange={nameHandler}
        placeholder="نام"
        type="text"
        required
      />

      <label>جنسیت</label>
      <select>
        <option value="choose">انتخاب کنید</option>
        <option value="female">خانم</option>
        <option value="male">آقا</option>
        <option value="other">دیگر</option>
      </select>

      <label>شماره تلفن</label>
      <input
        value={phone}
        onChange={phoneHandler}
        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
        type="tel"
        required
      />
      <p className="d-none" id="phoneErr">
        شماره تلفن وارد شده صحیح نمی باشد
      </p>

      <label>گذرواژه(حداقل هشت رقم)</label>
      <input
        type="password"
        value={password}
        onChange={passwordHandler}
        placeholder="گذرواژه"
        required
      />
      <p className="d-none" id="passErr">
        گذرواژه کوتاه تر از حد مجاز است
      </p>

      <label>تکرار گذرواژه</label>
      <input
        value={repeatPass}
        onChange={repeatPassHandler}
        placeholder="تکرار گذرواژه"
        type="password"
        required
      />
      <p className="d-none" id="rePassErr">
        گذرواژه با تکرار آن یکسان نیست
      </p>

      <button type="submit">ثبت نام</button>
    </form>
  );
};

export default SignUp;
