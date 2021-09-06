import React, { useState } from "react";
import done from "./images/done.gif";
import "./styles.css";

const ContactUs = () => {
  //define states
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //set states
  const subjectHandler = (e) => setSubject(e.target.value);
  const nameHandler = (e) => setName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const messageHandlet = (e) => setMessage(e.target.value);

  //form handler
  const getMessage = (e) => {
    e.preventDefault();

    setSubject("");
    setName("");
    setEmail("");
    setMessage("");

    const doneMsg = document.querySelector('.send-msg');
    setTimeout(() => {
      doneMsg.classList.remove('d-none');
      doneMsg.classList.remove('hide-it');
      doneMsg.classList.add('show-it');
    }, 200);
    setTimeout(() => {
      doneMsg.classList.remove('show-it');
      doneMsg.classList.add('hide-it');
    }, 4000);
    setTimeout(() => {
      doneMsg.classList.add('d-none');
    }, 4200);
  };

  return (
    <div className="">
      <div className="send-msg mx-auto mt-3 d-flex flex-row d-none">
        <img alt='done' src={done} className="mx-auto" />
        <h1 className="py-3 px-4 d-flex justify-content-center m-auto mx-auto">
          پیام شما با موفقیت ثبت شد!
        </h1>
      </div>

      <form
        onSubmit={getMessage}
        className="d-flex flex-column contact mx-3 my-4 px-3 py-4"
      >
        <label className="mb-1">موضوع:</label>
        <input
          type="text"
          className="mb-4"
          value={subject}
          onChange={subjectHandler}
          required
        />

        <label className="mb-1">نام و نام خانوادگی:</label>
        <input
          type="text"
          className="mb-3"
          value={name}
          onChange={nameHandler}
          required
        />

        <label className="mb-1">ایمیل:</label>
        <input
          type="email"
          className="mb-3"
          value={email}
          onChange={emailHandler}
          required
        />

        <label className="mb-1">پیام:</label>
        <textarea
          type="text"
          className="mb-4"
          value={message}
          onChange={messageHandlet}
          required
        />

        <button type="submit" className="px-3 py-2">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
