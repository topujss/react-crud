import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Model = ({ children, title, hide }) => {
  return (
    <>
      <section className="modal-blur w-screen h-screen  bg-black/75 transition-all duration-300 fixed top-0 left-0 z-[84284]">
        <div className="modal-wrap w-full h-full absolute top-32">
          <div className="modal-main bg-white w-[30em] p-6 rounded m-auto">
            <div className="modal-head grid grid-cols-3">
              <span className="font-semibold col-span-2 text-right text-xl">{title}</span>
            </div>
            <hr className="h-1 w-[70%] mx-auto my-2 bg-green-500 border-b rounded-lg" />
            <div className="modal-body">{children}</div>
          </div>
        </div>
        <IoMdClose
          className="text-white cursor-pointer text-2xl absolute right-10 top-5"
          onClick={() => hide(false)}
        />
      </section>
    </>
  );
};

export default Model;
