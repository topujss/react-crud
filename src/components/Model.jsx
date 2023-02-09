import React from 'react';
import { IoMdClose } from 'react-icons/io';

const Model = ({ children, title, hide }) => {
  return (
    <section className="modal-blur w-screen h-screen inset-0 bg-black/50 transition-all duration-300 absolute z-50 ">
      <div className="modal-wrap flex justify-center items-center h-full">
        <div className="modal-main bg-white w-96 p-6 rounded">
          <div className="modal-head grid grid-cols-3">
            <span className="font-semibold col-span-2 text-right text-xl">{title}</span>
            <IoMdClose className="justify-self-end cursor-pointer text-xl" onClick={() => hide(false)} />
          </div>
          <hr class="h-1 w-[70%] mx-auto my-2 bg-green-500 border-b rounded-lg" />
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Model;
