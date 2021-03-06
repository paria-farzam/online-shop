import React, { useState } from "react";
import "./mobile.css";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import doneTick from "./images/done.gif";
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../actionCreators';

const Coments = (props) => {
  let coments = useSelector(state => state.comment);
  let dispatch = useDispatch();

  let {addNewComment} = bindActionCreators(actionCreators, dispatch)

  //filter this goods coments
  let thisGoodsComents = coments.filter(
    (coment) => coment.key === props.goodskey
  );

  //show add-coment form
  const [openForm, setOpenForm] = useState(true);
  const showAddComentForm = (open) => {
    const form = document.querySelector(".coment-form");
    setOpenForm(!open);
    if (open) {
      form.classList.remove("d-none");
      form.classList.remove("close-form");
      form.classList.add("show-form");
    } else {
      form.classList.remove("show-form");
      form.classList.add("close-form");
      setTimeout(() => {
        form.classList.add("d-none");
      }, 200);
    }
  };

  //add coment
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userComent, setUserComent] = useState("");

  const addName = (e) => setName(e.target.value);
  const addEmail = (e) => setEmail(e.target.value);
  const addUserComent = (e) => setUserComent(e.target.value);

  const addComent = (e) => {
    e.preventDefault();
    
    let coment = {key: props.goodskey, name: name, email: email, text: userComent}
    setUserComent("");
    setName("");
    setEmail("");
    showAddComentForm(false);
    
    const doneMessage = document.querySelector("#Done");
    setTimeout(() => {
      doneMessage.classList.remove("d-none");
      doneMessage.classList.add("show-done");
    }, 500);
    setTimeout(() => {
      doneMessage.classList.add("hide-done");
    }, 3500);
    setTimeout(() => {
      doneMessage.classList.remove("show-done");
      doneMessage.classList.add("d-none");
    }, 3700);

    setTimeout(() => {
      addNewComment(coment);
    }, 4900);
  };

  //toggle coment list icon
  const [isOpen, setIsOpen] = useState(false);
  const toggleComentsList = (Open) => {
    const listIcon = document.querySelector("#comentlist-icon");
    if (!Open) {
      //icon
      listIcon.classList.remove("close-list-icon");
      listIcon.classList.add("show-list-icon");
    } else {
      listIcon.classList.replace("show-list-icon", "close-list-icon");
    }
    setIsOpen(!Open);
  };

  //handle buttons & collapse
  function CommentsCollapse() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button
          onClick={() => {
            showAddComentForm(false);
            setOpen(!open);
            toggleComentsList(isOpen);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="read-coments col-10 d-flex flex-row justify-content-between p-1"
        >
          <span className="px-2 my-auto fs-4 text-dark">?????? ??????????????</span>
          <img
            alt={thisGoodsComents.name}
            id="comentlist-icon"
            className="coment-icons my-auto"
            src="https://img.icons8.com/ios-glyphs/96/000000/chevron-left.png"
          />
        </Button>
        <button
          className="add-coment col-2 py-1 px-2"
          onClick={() => {
            setOpen(false);
            toggleComentsList(true);
            showAddComentForm(openForm);
          }}
        >
          <img
            alt={thisGoodsComents.name}
            className="coment-icons"
            src="https://img.icons8.com/ios-glyphs/30/ffffff/plus-math.png"
          />
        </button>
        <Collapse in={open}>
        <div className="col-12 coments-bar p-0">
          {
            thisGoodsComents.length === 0
            ? <p className='text-muted px-2 py-3'>-  ?????? ?????????? ???????????? ???? ???????? ????????-</p>
            : thisGoodsComents.map((coment) => (
              <div key={thisGoodsComents.indexOf(coment)} className="row mx-0 align-content-center each-coment my-2 p-2">
                <h1 className="d-inline-block px-auto d-flex justify-content-center align-content-center my-3 py-auto col-1 mx-auto">
                  {coment.name.charAt(0)}
                </h1>
                <div className="coment-info col-10">
                  <h3>{coment.name}</h3>
                  <p className="p-1 my-2">{coment.text}</p>
                </div>
              </div>
            ))
          }
          </div>
        </Collapse>
      </>
    );
  }

  return (
    <div className="coments row mx-auto">
      {CommentsCollapse()}
      <form
        onSubmit={addComent}
        className="coment-form d-flex flex-column p-3 my-3 d-none"
      >
        {/* <label className='mb-1 name-lable'>?????? ????????????</label> */}
        <input
          className=" mb-3 px-3 py-1"
          placeholder="?????? ????????????"
          value={name}
          onChange={addName}
          required
        />
        {/* <label className='mb-1 email-lable'>??????????</label> */}
        <input
          className=" mb-3 px-3 py-1"
          type="email"
          placeholder="??????????"
          value={email}
          onChange={addEmail}
          required
        />
        {/* <label className='mb-1 coment-lable'>???????????? ?????? ???? ???????? ????????:</label> */}
        <textarea
          className=" mb-3 p-3"
          placeholder="????????????..."
          value={userComent}
          onChange={addUserComent}
          required
        />
        <button className="py-1 px-2" type="submit">
          ?????????? ????????????
        </button>
      </form>
      <div id='Done' className="done mt-4 p-3 d-flex flex-row align-content-center d-none mx-auto">
        <img alt={thisGoodsComents.name} src={doneTick} className="tick p-1" />
        <h1 className="my-auto mx-auto">???????????? ?????? ???? ???????????? ?????????? ????</h1>
      </div>
    </div>
  );
};

export default Coments;
