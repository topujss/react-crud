import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';
import { TfiSearch } from 'react-icons/tfi';
import { GoThreeBars } from 'react-icons/go';
import { BsCameraReels, BsHeart, BsPlusSquare } from 'react-icons/bs';
import { TbBrandMessenger } from 'react-icons/tb';
import Modal from './Model';

import ProfileImg from '../img/profileImg.jpg';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import React from 'react';

export default function Header() {
  const [show, setShow] = useState(false);

  const [input, setInput] = useState({
    name: '',
    profilePhoto: '',
    postImg: '',
    desc: '',
  });

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  // when submit a form
  const handleSubmit = (e) => {
    e.preventDefault();

    // post data to the server
    const { name, profilePhoto, postImg, desc } = input;

    if (name || profilePhoto || postImg || desc) {
      axios.post('http://localhost:5050/post', input).then((res) => {
        setInput({
          name: '',
          profilePhoto: '',
          postImg: '',
          desc: '',
        });
      });
      swal('Submitted', 'Your post has been posted', 'success');
    } else {
      swal('oh no!', "You didn't fill all the fields", 'error');
    }
  };

  return (
    <>
      <section className="w-60 fixed z-10">
        {show && (
          <Modal hide={setShow} title="Create a new post">
            <>
              <form action="#" onSubmit={handleSubmit}>
                <div className="my-2">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="profilePhoto">Photo</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    name="profilePhoto"
                    id="profilePhoto"
                    className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="post-img">Post img</label>
                  <input
                    type="text"
                    name="postImg"
                    onChange={handleChange}
                    id="post-img"
                    className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    name="desc"
                    onChange={handleChange}
                    id="desc"
                    className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                    placeholder="Write something about your post..."
                  ></textarea>
                </div>
                <div className="my-2">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 p-2 rounded-md text-white font-bold text-xl"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          </Modal>
        )}
        <header className="py-5">
          <aside
            id="separator-sidebar"
            className="w-60 fixed left-0 top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40"
          >
            <div className="px-3 py-4 overflow-y-auto h-full border-r border-r-slate-300">
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg">
                    <img
                      className="w-28"
                      src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
                      alt="logo of instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TfiSearch className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Search</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiOutlineCompass className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Explore</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <BsCameraReels className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Reels</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TbBrandMessenger className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Messages</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <BsHeart className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <BsPlusSquare className="text-2xl" />
                    <span className="ml-4 font-medium text-lg">Create</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <img className="w-6 rounded-full" src={ProfileImg} alt="" />
                    <span className="ml-4 font-medium text-lg">Profile</span>
                  </Link>
                </li>
                <li className="relative top-28 right-0">
                  <Link
                    to="/"
                    className="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <GoThreeBars />
                    <span className="ml-4 font-medium text-lg">More</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </header>
      </section>
    </>
  );
}
