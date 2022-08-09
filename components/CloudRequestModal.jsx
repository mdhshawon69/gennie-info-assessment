import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CloudRequestModal = () => {
  return (
    <div className='w-2/5 bg-white p-5 rounded-md flex flex-col justify-center items-center gap-3'>
      <h3 className='text-md font-semibold'>Select Filter</h3>
      <div className='w-full'>
        <div className='py-2 px-2 mx-auto w-[95%] text-gray-500 bg-primary rounded-md flex justify-between items-center cursor-pointer'>
          <p className='text-xs font-semibold '>Select saved filter</p>
          <MdOutlineKeyboardArrowRight className='text-xl' />
        </div>
      </div>

      <div className='py-3 px-2 text-center'>
        <h3 className='font-semibold text-xs text-gray-500'>OR</h3>
      </div>

      <div className='w-full'>
        <div className='py-2 px-2 mx-auto w-[95%] text-gray-600 bg-primary rounded-md flex justify-between items-center cursor-pointer'>
          <p className='text-xs font-semibold '>Advance</p>
          <MdOutlineKeyboardArrowRight className='text-xl' />
        </div>
      </div>
      <div className='w-full'>
        <div className='py-2 px-2 mx-auto w-[95%] text-gray-600 bg-primary rounded-md flex justify-between items-center cursor-pointer'>
          <p className='text-xs font-semibold '>Home Moving</p>
          <MdOutlineKeyboardArrowRight className='text-xl' />
        </div>
      </div>
      <div className='w-full'>
        <div className='py-2 px-2 mx-auto w-[95%] text-gray-600 bg-primary rounded-md flex justify-between items-center cursor-pointer'>
          <p className='text-xs font-semibold '>Copenhagen</p>
          <MdOutlineKeyboardArrowRight className='text-xl' />
        </div>
      </div>
      <div className='w-[95%] mx-auto flex justify-between items-center gap-4 text-gray-500'>
        <input
          type='date'
          className='text-xs font-semibold bg-primary rounded-md py-2 px-2 w-1/2 outline-none'
          placeholder='Start Date'
        />
        <input
          type='date'
          className='text-xs font-semibold bg-primary rounded-md py-2 px-2 w-1/2 outline-none'
        />
      </div>
      <div className='w-[95%] mx-auto flex justify-between items-center gap-4 text-gray-500'>
        <input
          type='time'
          className='text-xs font-semibold bg-primary rounded-md py-2 px-2 w-1/2 outline-none'
        />
        <input
          type='time'
          className='text-xs font-semibold bg-primary rounded-md py-2 px-2 w-1/2 outline-none'
        />
      </div>
      <button className='py-2 w-40 mt-5 bg-[#47A7FF] text-xs text-white rounded font-semibold'>
        Submit
      </button>
    </div>
  );
};

export default CloudRequestModal;
