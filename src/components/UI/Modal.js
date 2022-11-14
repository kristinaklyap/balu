import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalTarget = document.querySelector("#overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalTarget)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalTarget
      )}
    </Fragment>
  );
};

export default Modal;
