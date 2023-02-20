import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';

const View = () => {
  // change the input
  const [input, setInputData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    try {
      axios.get(`http://localhost:5050/post/${id}`).then((res) => {
        const { name, profilePhoto, postImg, desc } = res.data;
        setInputData({
          name,
          profilePhoto,
          postImg,
          desc,
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  const { name, profilePhoto, postImg, desc } = input;
  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        {/* left div */}
        <section>
          <Header />
        </section>
        <section className="mt-12">
          <img className="rounded-full w-60 h-60 mx-auto" src={profilePhoto} alt="" />
          <div className="post-show">
            <div className="flex items-center justify-center w-full">
              <hr className="w-full h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 ">
                Post Images
              </span>
            </div>
            <div className="flex flex-wrap justify-center">
              <img className="w-64 h-64 rounded-md" src={postImg} alt="" />
            </div>
          </div>
        </section>
        {/* right div */}
        <section className="mt-24">
          <div className="my-2">
            <span className="font-semibold text-2xl">Name: </span>
            <h1 className="text-xl inline-block">{name}</h1>
          </div>
          <div className="my-2">
            <span className="font-semibold text-2xl">Description: </span>
            <h1 className="text-xl inline-block">{desc}</h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default View;
