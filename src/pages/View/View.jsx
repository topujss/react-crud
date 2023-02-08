import React from 'react';

const View = ({children, title, hide}) => {
  return (
    <section className="modal-blur w-screen h-screen fixed inset-0 bg-black/50 transition-all duration-300">
      <div className="modal-wrap flex justify-center items-center h-full">
        <div className="modal-main bg-white w-96 p-6 rounded">
          <div className="modal-head grid grid-cols-3 mb-4">
            <span className="font-semibold col-span-2 text-right text-xl">{title}</span>
            <IoMdClose className="justify-self-end cursor-pointer text-xl" onClick={() => hide(false)} />
          </div>
          <hr class="h-1 mx-auto my-4 bg-cyan-300 border-0 rounded-lg" />
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default View;
