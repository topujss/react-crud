import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { story } from '../../db/Story';
import profileImg from '../../img/profileImg.jpg';
import postImg from '../../img/post1.jpg';
import { BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { CiSaveUp1 } from 'react-icons/ci';

export default function Home() {
  const Time = new Date().getFullYear();
  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        {/* left div */}
        <div>
          <Header />
        </div>
        {/* center section */}
        <section className="mt-12 mr-10">
          <div className="stories flex overflow-hidden pt-3">
            {story.map((story, index) => (
              <div key={index} className="story w-2/12">
                <img
                  className="ring-offset-2 ring-2 ring-slate-300 w-16 h-16 rounded-full mb-1 mx-auto"
                  src={story.photo}
                  alt=""
                />
                <h1 className="truncate text-slate-500 text-md text-center w-14 mx-auto">{story.userName}</h1>
              </div>
            ))}
          </div>
          <div className="post mt-14 overflow-hidden">
            <div className="post-start flex justify-between">
              <div className="post-left flex items-center ">
                <img
                  className="w-10 h-10 ring-offset-2 ring-2 ring-slate-300 rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div className="post-text flex">
                  <h1 className="text-black font-semibold ml-3">topujss</h1>
                  <p className="text-slate-400 ml-1">&bull; 1d</p>
                </div>
              </div>
              <div className="post-right">
                <button>
                  <BsThreeDots />
                </button>
              </div>
            </div>
            <div className="post-center mt-5 h-96 ">
              <img src={postImg} className="object-top object-cover w-full h-full rounded" alt="" />
            </div>
            <div className="post-end my-5">
              <div className="react flex justify-between items-center">
                <ul className="flex gap-3 text-xl">
                  <li>
                    <a href="#">
                      <BsHeart />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsChat />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoPaperPlaneOutline />
                    </a>
                  </li>
                </ul>
                <div className="save">
                  <a href="#" className="text-xl">
                    <CiSaveUp1 />
                  </a>
                </div>
              </div>
              <div className="like my-3">
                <p className="text-slate-700 font-medium">
                  Liked by <strong>topujss</strong> and <strong>others</strong>
                </p>
                <div className="author-text">
                  <p className="">
                    <strong>topujss</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <a href="#" className="text-slate-400">
                  View all 70 comments
                </a>
              </div>
              <div className="comment">
                <input type="text" placeholder="Add a comment..." className="w-5/6 focus:outline-none" />
                <Link
                  className="text-blue-400 font-semibold text-md hover:text-blue-700 transition duration-200"
                  to="/"
                >
                  Post
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* right request section */}
        <div className="req w-3/5 pt-14 sticky top-0 left-0">
          <div className="req-inner flex justify-between items-center">
            <div className="left flex justify-between items-center">
              <img className="w-12 h-12 rounded-full mx-auto" src={profileImg} alt="" />
              <div className="req-text ml-5">
                <Link to="/" className="text-black text-md font-semibold hover:text-black/[.60] block">
                  topujss
                </Link>
                <small className="text-slate-600">Toquir Ahmed</small>
              </div>
            </div>
            <div className="right">
              <a href="#" className="text-blue-400 font-semibold text-md ">
                Switch
              </a>
            </div>
          </div>
          <section className="suggest">
            <div className="suggest-header my-5">
              <div className="suggest-header flex justify-between items-center">
                <h1 className="text-gray-500 text-md font-medium">Suggestions for you</h1>
                <a href="#" className="text-slate-600 text-md font-semibold">
                  See All
                </a>
              </div>
            </div>
            <div className="suggest-user flex justify-between items-center mt-3">
              <div className="left flex justify-between items-center">
                <img className="w-9 h-9 rounded-full" src={profileImg} alt="" />
                <div className="suggest-text ml-4">
                  <h5 className="text-black font-semibold text-lg -mb-1.5">Name</h5>
                  <small className="text-md font-medium text-slate-500 ">Followed by geo_502H</small>
                </div>
              </div>
              <div className="right">
                <Link to="/" className="text-blue-400 font-semibold text-md">
                  Follow
                </Link>
              </div>
            </div>
            <div className="suggest-user flex justify-between items-center mt-3">
              <div className="left flex justify-between items-center">
                <img className="w-9 h-9 rounded-full" src={profileImg} alt="" />
                <div className="suggest-text ml-4">
                  <h5 className="text-black font-semibold text-lg -mb-1.5">Name</h5>
                  <small className="text-md font-medium text-slate-500 ">Followed by geo_502H</small>
                </div>
              </div>
              <div className="right">
                <Link to="/" className="text-blue-400 font-semibold text-md">
                  Follow
                </Link>
              </div>
            </div>
            <div className="suggest-user flex justify-between items-center mt-3">
              <div className="left flex justify-between items-center">
                <img className="w-9 h-9 rounded-full" src={profileImg} alt="" />
                <div className="suggest-text ml-4">
                  <h5 className="text-black font-semibold text-lg -mb-1.5">Name</h5>
                  <small className="text-md font-medium text-slate-500 ">Followed by geo_502H</small>
                </div>
              </div>
              <div className="right">
                <Link to="/" className="text-blue-400 font-semibold text-md">
                  Follow
                </Link>
              </div>
            </div>
          </section>
          <section className="list">
            <ul className="my-5">
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">About &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Help &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Press &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">API &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Jobs &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Privacy &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Terms &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">locations &bull;</a>
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="#">Language &bull;</a>
              </li>
            </ul>
            <p className="text-slate-500 font-medium text-md uppercase">&copy; {Time} instagram from meta</p>
          </section>
        </div>
      </main>
    </>
  );
}
