// import "./Modal.css";
//import styles from "./Modal.module.css";
import styled from "styled-components";

const Modal = ({ children }: any) => {
  let StyledDiv = styled.div`
    background-color: yellow;
  `;

  const divStyles = {
    backgroundColor: "yellow",
    color: "red",
  };

  return (
    <>
      {/* Normal/External CSS */}
      {/* <div className="my-modal">{children}</div> */}

      {/* CSS Modules */}
      {/* <div className={styles["my-modal"] + " " + styles.textModal} role="alert">
        {children}
      </div> */}

      {/* CSS in JS */}
      {/* <StyledDiv>{children}</StyledDiv> */}

      {/* Inline Styles */}
      <div style={divStyles}>{children}</div>
    </>
  );
};

export default Modal;
