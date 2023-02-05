import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import profileImg from '../../img/profileImg.jpg';
import { BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { CiSaveUp1 } from 'react-icons/ci';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const Time = new Date().getFullYear();

  const [postShow, setPostShow] = useState(false);

  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  // delete post by id by clicking on the delete button
  const handlePostDelete = async (id) => {
    await axios.delete(`http://localhost:5050/post/${id}`).then((res) => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  const handleEdit = async (post) => {
    post.name = e.target.value;
    post.profilePhoto = e.target.value;
    post.postImg = e.target.value;
    post.postText = e.target.value;
    await axios.update(`http://localhost:5050/post/${post.id}`);
    const postIndex = posts.findIndex((p) => p.id === post.id);
    posts[postIndex] = post;
    setPosts([...posts]);
  };

  // load post axios data from api and pass them to the setStories state
  useEffect(() => {
    try {
      axios.get('http://localhost:5050/post?_sort=id&_order=desc').then((res) => {
        setPosts(res.data);
      });
      axios.get('http://localhost:5050/stories').then((res) => {
        setStories(res.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [setStories]);

  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        {/* left div */}
        <div>
          <Header />
        </div>
        {/* center section */}
        <section className="mt-12 mr-10">
          {/* stories section */}
          <div className="stories flex overflow-hidden pt-3">
            {stories.map((story, i) => (
              <div key={i} className="story w-2/12">
                <img
                  className="ring-offset-2 ring-2 ring-slate-300 w-16 h-16 rounded-full mb-1 mx-auto"
                  src={story.photo}
                  alt=""
                />
                <h1 className="truncate text-slate-500 text-md text-center w-14 mx-auto">{story.userName}</h1>
              </div>
            ))}
          </div>
          {/* post section */}
          {posts ? (
            posts.map((post, i) => (
              <div key={i} className="post mt-8 mb-4 overflow-hidden border-b border-indigo-600 relative">
                <div className="post-start flex justify-between items-center">
                  <div className="post-left flex items-center ">
                    <img
                      className="w-10 h-10 ml-1 mt-1 ring-offset-2 ring-2 ring-slate-300 rounded-full"
                      src={post.profilePhoto}
                      alt=""
                    />
                    <div className="post-text flex">
                      <h1 className="text-black font-semibold ml-3">{post.name}</h1>
                      <p className="text-slate-400 ml-1">&bull; {1}d</p>
                    </div>
                  </div>
                  <div className="post-right">
                    <button>
                      <BsThreeDots onClick={() => setPostShow(true)} />
                    </button>
                    {postShow ? (
                      <div
                        id="postMenu"
                        className="post-menu absolute top-10 right-0 bg-white w-20 h-auto rounded shadow-lg shadow-neutral-600 z-10"
                      >
                        <ul className="text-slate-500 text-sm font-semibold capitalize">
                          <li
                            onClick={() => setPostShow(false)}
                            className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                          >
                            hide
                          </li>
                          <li>
                            <a href="/" className="py-2 px-4 hover:bg-slate-200 transition duration-200 block">
                              View
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/edit"
                              className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                              onClick={() => handleEdit(post)}
                            >
                              edit
                            </Link>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                              onClick={() => handlePostDelete(post.id)}
                            >
                              delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      () => setPostShow(false)
                    )}
                  </div>
                </div>
                <div className="post-center mt-5 h-96">
                  <img src={post.postImg} className="object-top object-cover w-full h-full rounded" alt="" />
                </div>
                <div className="post-end my-5">
                  <div className="react flex justify-between items-center">
                    <ul className="flex gap-3 text-xl">
                      <li>
                        <button>
                          <BsHeart />
                        </button>
                      </li>
                      <li>
                        <a href="/">
                          <BsChat />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <IoPaperPlaneOutline />
                        </a>
                      </li>
                    </ul>
                    <div className="save">
                      <a href="/" className="text-xl">
                        <CiSaveUp1 />
                      </a>
                    </div>
                  </div>
                  <div className="like my-3">
                    <p className="text-slate-700 font-medium">
                      Liked by <strong>{post.name}</strong> and <strong>others</strong>
                    </p>
                    <div className="author-text">
                      {post.desc && (
                        <p>
                          <strong>{post.name}&nbsp;</strong>
                          {post.desc}
                        </p>
                      )}
                    </div>
                    <a href="/" className="text-slate-400">
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
            ))
          ) : (
            <div className="text-center text-2xl mt-5 font-semibold text-red-600">No Post Found</div>
          )}
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
              <a href="/" className="text-blue-400 font-semibold text-md ">
                Switch
              </a>
            </div>
          </div>
          <section className="suggest">
            <div className="suggest-header my-5">
              <div className="suggest-header flex justify-between items-center">
                <h1 className="text-gray-500 text-md font-medium">Suggestions for you</h1>
                <a href="/" className="text-slate-600 text-md font-semibold">
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
            <ul className="my-5 cursor-default">
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">About </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Help </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Press </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">API </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Jobs </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Privacy </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Terms </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">locations </a> &bull;
              </li>
              <li className="text-slate-500 font-medium text-md inline-block mr-1.5">
                <a href="/">Language </a> &bull;
              </li>
            </ul>
            <p className="text-slate-500 font-medium text-md uppercase">
              &copy; {Time} instagram from meta by ahmed
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
