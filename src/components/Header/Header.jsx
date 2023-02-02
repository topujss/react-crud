import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineCompass } from 'react-icons/ai';
import { TfiSearch } from 'react-icons/tfi';
import { GoThreeBars } from 'react-icons/go';
import { BsCameraReels, BsHeart, BsPlusSquare } from 'react-icons/bs';
import { TbBrandMessenger } from 'react-icons/tb';

import ProfileImg from '../../img/profileImg.jpg';

export default function Header() {
  return (
    <>
      <section className="w-60 fixed">
        <header className="py-5">
          <aside
            id="separator-sidebar"
            class="w-60 fixed left-0 top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40"
          >
            <div class="px-3 py-4 overflow-y-auto h-full border-r border-r-slate-300">
              <ul class="space-y-2">
                <li>
                  <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg">
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
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TfiSearch className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Search</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiOutlineCompass className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Explore</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <BsCameraReels className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Reels</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TbBrandMessenger className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Messages</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <BsHeart className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <BsPlusSquare className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Create</span>
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
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <GoThreeBars />
                    <span class="ml-4 font-medium text-lg">More</span>
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
