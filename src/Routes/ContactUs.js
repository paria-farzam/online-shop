import React, { useState } from "react";

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

    setSubject('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={getMessage}>
        <label>موضوع</label>
        <input type="text" value={subject} onChange={subjectHandler} />

        <label>نام</label>
        <input type="text" value={name} onChange={nameHandler} />

        <label>ایمیل</label>
        <input type="email" value={email} onChange={emailHandler} />

        <label>پیام</label>
        <textarea type="text" value={message} onChange={messageHandlet} />

        <button type="submit">ارسال</button>
      </form>
    </div>
  );
};

export default ContactUs;
