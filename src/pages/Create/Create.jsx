import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../../components/Header';

export default function Create() {
  const navigate = useNavigate();

  // change the input
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

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // post data to the server
    const { name, profilePhoto, postImg, desc } = input;

    if (!name || !profilePhoto || !postImg || desc) {
      axios.post('http://localhost:5050/post', input).then((res) => {
        setInput({
          name: '',
          profilePhoto: '',
          postImg: '',
          desc: '',
        });
        // navigate to the home page
        navigate('/');
      });
      swal('Submitted', 'Your post has been posted', 'success');
    } else {
      swal('oh no!', "You didn't fill all the fields", 'error');
    }
  };

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
                type="text"
                name="desc"
                onChange={handleChange}
                id="desc"
                className="border-2 border-gray-300 p-2 rounded-md block w-full focus:border-blue-400 focus:outline-none transition duration-300"
                placeholder="Write something about your post..."
              ></textarea>
            </div>
            <div className="my-2">
              <button type="submit" className="w-full bg-orange-500 p-2 rounded-md text-white font-bold text-xl">
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
