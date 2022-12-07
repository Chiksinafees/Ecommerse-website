import { Fragment} from "react";
import ReactDOM  from "react-dom";
import classes from './Modal.module.css'


const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onTap}></div>;
};


const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};


const Modal = (props) => {

  return (
    <Fragment>

      {ReactDOM.createPortal(
        <BackDrop onTap={props.onTap}/>,
        document.getElementById("overlay")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
