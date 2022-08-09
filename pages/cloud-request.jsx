import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const CloudRequestPage = () => {
  return (
    <div>
      <div className='bg-white py-8 w-full'></div>
      <div className='bg-primary w-4/5 mx-auto my-10'>
        <div className='bg-white shadow-md rounded-lg w-full py-2.5 px-3 flex justify-start items-start gap-3'>
          <h3 className='text-xl font-semibold'>Cloud Request</h3>
          <AiOutlineReload className='font-bolder text-xl mt-[6px] text-gray-500' />
        </div>
        <div className='flex justify-center items-center gap-3 mt-5 '>
          <div className='w-1/4 bg-white p-3 rounded min-h-[75vh] shadow-lg'>
            <div className='relative'>
              <input
                className='py-3 px-2 w-60 text-xs text-gray-800 bg-primary rounded outline-none'
                type='text'
                name='email'
                placeholder='Password'
              />
              <BiSearch className='absolute text-gray-500 right-12 top-3 cursor-pointer' />
              <span className='absolute top-3 right-0 cursor-pointer'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M11.0972 7.9732C11.0972 10.3065 9.17357 12.1978 6.79859 12.1978C4.42499 12.1978 2.5 10.3065 2.5 7.9732C2.5 5.64123 4.42499 3.75 6.79859 3.75C9.17357 3.75 11.0972 5.64123 11.0972 7.9732ZM25.6167 6.12291C26.6556 6.12291 27.5 6.95254 27.5 7.9732C27.5 8.99523 26.6556 9.82486 25.6167 9.82486H17.3973C16.357 9.82486 15.5126 8.99523 15.5126 7.9732C15.5126 6.95254 16.357 6.12291 17.3973 6.12291H25.6167ZM4.38471 19.9474H12.6041C13.6444 19.9474 14.4888 20.7771 14.4888 21.7991C14.4888 22.8198 13.6444 23.6508 12.6041 23.6508H4.38471C3.34444 23.6508 2.5 22.8198 2.5 21.7991C2.5 20.7771 3.34444 19.9474 4.38471 19.9474ZM23.2014 25.9722C25.5764 25.9722 27.5 24.081 27.5 21.749C27.5 19.4157 25.5764 17.5245 23.2014 17.5245C20.8278 17.5245 18.9028 19.4157 18.9028 21.749C18.9028 24.081 20.8278 25.9722 23.2014 25.9722Z'
                    fill='#696969'
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className='w-3/4 bg-white p-3 rounded min-h-[75vh] shadow-lg flex flex-col justify-center items-center gap-5'>
            <i className=' text-sm font-semibold text-gray-400'>
              You don't have any favourite filter. Please create a filter first.
            </i>
            <button className='py-2 w-40 bg-[#47A7FF] text-xs text-white rounded font-semibold'>
              Create Favourite Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudRequestPage;
