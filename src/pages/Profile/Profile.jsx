import { TbSettings } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Profile() {
  return (
    <>
      <main className="flex gap-6">
        <div className="header w-1/5">
          <Header />
        </div>
        <div className="profile w-4/5 mx-40">
          <section className="profile-top grid grid-cols-4 gap-16 ">
            <div className="left w-1/2">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTVgzsabKXAJx1xQg8Fe09zE1g0wL9sGbls7geO5o_rIez6bpfDHW2TMHNSh_AjdkPLQ&usqp=CAU"
                  alt="profile"
                />
              </div>
            </div>
            <div className="right mt-8 w-1/2 col-span-3 place-items-center">
              <div className="profile-name flex gap-5">
                <h1 className="text-xl">topujss</h1>
                <button className="px-3 py-1 bg-gray-200/60 hover:bg-gray-300 rounded-lg font-medium">
                  Edit Profile
                </button>
                <button className="text-2xl">
                  <TbSettings />
                </button>
              </div>
              <div className="profile-stats gap-5 flex my-5">
                <div className="posts flex">
                  <span>
                    <strong>20</strong> Posts
                  </span>
                </div>
                <div className="flex">
                  <Link to="/profile">
                    <strong>20</strong> Followers
                  </Link>
                </div>
                <div className="flex">
                  <Link to="/profile">
                    <strong>20</strong> Following
                  </Link>
                </div>
              </div>
              <div className="bio leading-tight">
                <strong className="block">Toquir Ahmed</strong>
                <span className="">Mern • learner • coder • programmer</span>
                <a href="https://github.com/topujss" className="block text-blue-700 font-medium hover:underline">
                  coderahmed.com
                </a>
              </div>
            </div>
          </section>
          <div className="memo grid grid-cols-7 gap-4">
            <div className="memo-inner">
              <img src="../../img/post1.jpg" alt="" />
              <p>graduation</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
