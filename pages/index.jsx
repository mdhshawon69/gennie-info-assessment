import Head from "next/head";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";

const Home = () => {
  const [show, setShow] = useState("password");

  const showPass = show === "password" ? "text" : "password";

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 font-poppins'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-1/3 py-10 px-20 bg-white flex flex-col justify-center items-center gap-5 shadow-lg'>
        <div className='text-center space-y-2 mb-3'>
          <h3 className='text-2xl font-semibold'>Sign In</h3>
          <p>Please sign in to continue</p>
        </div>
        <form
          action='/'
          className='flex flex-col justify-center items-center gap-5'>
          <input
            className='py-3 px-1 w-80 text-xs bg-primary rounded outline-none'
            type='email'
            name='email'
            placeholder='Email'
          />
          <div className='relative'>
            <input
              className='py-3 px-1 w-80 text-xs bg-primary rounded outline-none'
              type={show}
              name='email'
              placeholder='Password'
            />
            <BsFillEyeFill
              className='absolute text-gray-500 right-2 top-3 cursor-pointer'
              onClick={() => setShow(showPass)}
            />
          </div>
          <button className='py-2 w-36 bg-[#47A7FF] text-xs text-white rounded font-semibold'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
