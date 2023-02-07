import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../../components/Header/Header';

const Edit = () => {
  const navigate = useNavigate();

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

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5050/post/${id}`, input)
      .then((res) => {
        swal('Success', 'Post Updated', 'success');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle change
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setInputData({ ...input, [name]: value });
  };

  const { name, profilePhoto, postImg, desc } = input;
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
                value={name}
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
                value={profilePhoto}
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
                value={postImg}
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
                value={desc}
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
