import Header from '../../components/Header/Header';
import { story } from '../../db/Story';
import profileImg from '../../img/profileImg.jpg';

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-3 gap-4 h-screen">
        <div>
          <Header />
        </div>
        <section className="mt-14">
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
          <div className="post mt-14">posts</div>
        </section>
        <div className="req mt-14 flex justify-between w-1/2">
          <div className="left flex justify-start">
            <img className="w-16 h-16 rounded-full mx-auto" src={profileImg} alt="" />
            <div className="req-text">
              <h1 className="text-black text-md font-semibold">topujss</h1>
              <small className="text-slate-600">Toquir Ahmed</small>
            </div>
          </div>
          <div className="right">
            <a href="#">Switch</a>
          </div>
        </div>
      </main>
    </>
  );
}
