import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../../components/Header/Header';

const Edit = () => {
  const navigate = useNavigate();

  // change the input
  const [input, setInputData] = useState([]);

  // handle change
  const handleEdit = (e) => {
    setInputData({ ...input, [e.target.name]: e.target.value });
  };

  // handle Submit
  const handleSubmit = (e) => {};

  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        {/* left div */}
        <div>
          <Header />
        </div>
        <section className="mt-12 mr-10">
          <form action="#" onSubmit={handleSubmit}>
            <div className="my-2">
              <label htmlFor="name">Name</label>
              <input
                value={input.name}
                onChange={handleEdit}
                type="text"
                name="name"
                id="name"
                className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            <div className="my-2">
              <label htmlFor="profilePhoto">Photo</label>
              <input
                value={input.profilePhoto}
                type="text"
                onChange={handleEdit}
                name="profilePhoto"
                id="profilePhoto"
                className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            <div className="my-2">
              <label htmlFor="post-img">Post img</label>
              <input
                value={input.postImg}
                type="text"
                name="postImg"
                onChange={handleEdit}
                id="post-img"
                className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
              />
            </div>
            <div className="my-2">
              <label htmlFor="desc">Description</label>
              <textarea
                value={input.desc}
                type="text"
                name="desc"
                onChange={handleEdit}
                id="desc"
                className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                placeholder="Write something about your post..."
              ></textarea>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="w-full hover:bg-cyan-500 transition-all duration-300 bg-orange-500 p-2 rounded-md text-white font-bold text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Edit;
