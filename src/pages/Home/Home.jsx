import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import profileImg from '../../img/profileImg.jpg';
import { BsChat, BsHeart, BsThreeDots } from 'react-icons/bs';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { CiSaveUp1 } from 'react-icons/ci';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import swal from 'sweetalert';

const Home = () => {
  // posts state
  const [posts, setPosts] = useState([]);
  const [postShow, setPostShow] = useState(false);
  const [show, setShow] = useState(false);
  const url = `http://localhost:5050/post?_sort=id&_order=desc`;

  // stories state
  const [stories, setStories] = useState([]);

  // edit post state
  const [id, setId] = useState();
  const [input, setInput] = useState({
    name: '',
    profilePhoto: '',
    postImg: '',
    desc: '',
  });

  /**
   * @desc: load post axios data from api and pass them to the setStories state
   * to show in home page
   */
  const waitTime = 125000;

  useEffect(() => {
    let id = setInterval(() => {
      try {
        axios.get(url).then((res) => {
          setPosts(res.data);
        });
        axios.get(`http://localhost:5050/stories`).then((res) => {
          setStories(res.data);
        });
      } catch (err) {
        console.log(err.message);
      }
    }, waitTime);
    return () => clearInterval(id);
  }, [setStories, setPosts, posts]);

  /**
   * @desc: get data from axios for to edit
   * delete post by id by clicking on the delete button
   */
  const handlePostDelete = async (id) => {
    await axios.delete(`http://localhost:5050/post/${id}`).then((res) => {
      setPosts(posts.filter((post) => post.id !== id));
    });
    setPostShow(false);
  };

  const handlePostEdit = () => {
    setPostShow(false);
    setShow(true);
    try {
      axios.get(`http://localhost:5050/post/${id}`).then((res) => {
        const { name, profilePhoto, postImg, desc } = res.data;
        setInput({
          name,
          profilePhoto,
          postImg,
          desc,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePostMenu = (id) => {
    setPostShow(true);
    setId(id);
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5050/post/${id}`, input)
      .then((res) => {
        swal('Success', 'Post Updated', 'success');
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle change
  const handleEdit = ({ target }) => {
    const { name, value } = target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <main className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* left div */}
        <div>
          <Header />
        </div>

        {/* edit modal start */}
        {show && (
          <Modal hide={setShow} title="Edit my post">
            <form action="#" onSubmit={handleSubmit}>
              <div className="my-2">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleEdit}
                  type="text"
                  name="name"
                  value={input.name}
                  id="name"
                  className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                />
              </div>
              <div className="my-2">
                <label htmlFor="profilePhoto">Photo</label>
                <input
                  type="text"
                  value={input.profilePhoto}
                  onChange={handleEdit}
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
                  value={input.postImg}
                  onChange={handleEdit}
                  id="post-img"
                  className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                />
              </div>
              <div className="my-2">
                <label htmlFor="desc">Description</label>
                <textarea
                  type="text"
                  value={input.desc}
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
          </Modal>
        )}

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
          {posts.length > 0 ? (
            posts.map((post, i) => (
              // im edit modal
              <div key={i} className="post mt-8 mb-4 overflow-hidden border-b border-indigo-600 relative">
                <div className="post-start flex justify-between items-center">
                  <div className="post-left flex items-center ">
                    <img
                      className="w-10 h-10 ml-1 mt-1 ring-offset-2 ring-2 ring-slate-300 rounded-full"
                      src={post.profilePhoto}
                      value={post.profilePhoto}
                      alt=""
                    />
                    <div className="post-text flex items-center">
                      <Link to={`/view/${post.id}`} className="text-black font-semibold ml-3">
                        {post.name}
                      </Link>
                      <p className="text-slate-400 ml-1 text-sm">&bull; {new Date().getSeconds()}sec</p>
                    </div>
                  </div>
                  <div className="post-right">
                    <button id="menuShow" className="block">
                      <BsThreeDots
                        onClick={() => handlePostMenu(post.id)}
                        onDoubleClick={() => setPostShow(false)}
                      />
                    </button>
                    {postShow && (
                      <div
                        id="postMenu"
                        className="post-menu absolute top-10 right-0 bg-white w-20 h-auto rounded shadow-lg shadow-neutral-600 z-0"
                      >
                        <ul className="text-slate-500 text-sm font-semibold capitalize">
                          <li>
                            {
                              <Link
                                to={`/view/${post.id}`}
                                className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                              >
                                View
                              </Link>
                            }
                          </li>
                          <li>
                            {
                              <Link
                                to="/"
                                onClick={handlePostEdit}
                                className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                              >
                                edit
                              </Link>
                            }
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="py-2 px-4 hover:bg-slate-200 transition duration-200 block"
                              onClick={() => handlePostDelete(post.id)}
                            >
                              delete
                            </Link>
                          </li>
                        </ul>
                      </div>
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
                    <Link to="/" className="text-slate-400">
                      View all 70 comments
                    </Link>
                  </div>
                  <div className="comment flex justify-between gap-4">
                    <input type="text" placeholder="Add a comment..." className=" focus:outline-none w-full" />
                    <Link
                      className="text-blue-400 font-semibold text-md hover:text-blue-700 transition duration-200 visible"
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
                <Link to="/profile" className="text-black text-md font-semibold hover:text-black/[.60] block">
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
            {posts.map((post, index) => (
              <div key={index} className="suggest-user flex justify-between items-center mt-3">
                <div className="left flex justify-between items-center">
                  <img className="w-9 h-9 rounded-full" src={post.profilePhoto} alt="" />
                  <div className="suggest-text ml-4">
                    <h5 className="text-black font-semibold text-lg -mb-1.5">{post.name}</h5>
                    <small className="text-md font-medium text-slate-500 ">Followed by {post.name}</small>
                  </div>
                </div>
                <div className="right">
                  <Link to="/" className="text-blue-400 font-semibold text-md">
                    Follow
                  </Link>
                </div>
              </div>
            ))}
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
            <p className="text-slate-500 font-medium text-md capitalize">
              &copy; {new Date().getFullYear()} instagram from meta by ahmed
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
