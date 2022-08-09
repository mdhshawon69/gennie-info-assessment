import React from "react";
import { useState } from "react";

const Backdrop = ({ children, setShowModal }) => {
  const handleShowModal = (e) => {
    if (e.target.id === "backdrop") {
      setShowModal(false);
    }
  };
  return (
    <div
      className='bg-backdrop fixed inset-0 z-30 flex justify-center items-center'
      id='backdrop'
      onClick={handleShowModal}>
      {children}
    </div>
  );
};

export default Backdrop;
