import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Cross } from "../../constants/icons";
import { uiActions } from "../../store/uiSlice";

const ToDoModal = () => {
  const [result, setResult] = useState("");
  const [startDateType, setStartDateType] = useState("text");
  const [endDateType, setEndDateType] = useState("text");
  const [startTimeType, setStartTimeType] = useState("text");
  const [endTimeType, setEndTimeType] = useState("text");

  const dispatch = useDispatch();
  const titleRef = useRef();
  const noteRef = useRef();
  const startDateRef = useRef();
  const startTimeRef = useRef();
  const endDateRef = useRef();
  const endTimeRef = useRef();

  const handleModalToggle = () => {
    //toggling the state for showing the modal with this function.
    dispatch(uiActions.toggleCreateModal());
  };

  // function for posting the todo item to the database.
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title: titleRef?.current?.value,
      note: noteRef?.current?.value,
      start_date: startDateRef?.current?.value,
      end_date: endDateRef?.current?.value,
      start_time: startTimeRef?.current?.value,
      end_time: endTimeRef?.current?.value,
    };

    fetch("https://task.atiar.info/api/todo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.message));
  };

  if (!result) {
    return (
      <div className='p-5 bg-white rounded-md w-1/2 mx-auto relative'>
        <button className='absolute top-4 right-4' onClick={handleModalToggle}>
          <Cross />
        </button>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='w-full text-center'>
            <h4 className='text-2xl'>Add ToDo</h4>
            <hr className='border bg-gray-400 w-full my-5' />
          </div>

          <form onSubmit={handleSubmit} className='w-full space-y-5'>
            <input
              type='text'
              name='title'
              placeholder='Write task title'
              className='rounded-lg border border-[#CFCFCF] w-full p-2 outline-none'
              ref={titleRef}
            />

            <textarea
              type='text'
              name='task-note'
              placeholder='Write task note'
              className='rounded-lg border border-[#CFCFCF] w-full p-2 outline-none h-40'
              ref={noteRef}
            />

            <div className='flex justify-center items-center gap-4'>
              <input
                type={startDateType}
                name='start-date'
                id='start-date'
                className='rounded-lg border border-[#CFCFCF] w-1/2 p-2 outline-none'
                placeholder='Start Date'
                ref={startDateRef}
                onFocus={() => setStartDateType("date")}
              />
              <input
                type={startTimeType}
                name='start-time'
                id='start-time'
                className='rounded-lg border border-[#CFCFCF] w-1/2 p-2 outline-none'
                placeholder='Start Time'
                ref={startTimeRef}
                onFocus={() => setStartTimeType("time")}
              />
            </div>

            <div className='flex justify-center items-center gap-4'>
              <input
                type={endDateType}
                name='end-date'
                id='end-date'
                className='rounded-lg border border-[#CFCFCF] w-1/2 p-2 outline-none'
                ref={endDateRef}
                onFocus={() => setEndDateType("date")}
                placeholder='End Date'
              />
              <input
                type={endTimeType}
                name='end-time'
                id='end-time'
                className='rounded-lg border border-[#CFCFCF] w-1/2 p-2 outline-none'
                ref={endTimeRef}
                onFocus={() => setEndTimeType("time")}
                placeholder='End Time'
              />
            </div>

            <button
              type='submit'
              className='text-white py-2.5 px-5 w-40 bg-[#007BEC] mx-auto block rounded-lg text-sm'>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className='p-5 bg-white rounded-md w-1/2 mx-auto relative'>
        <button className='absolute top-4 right-4' onClick={handleModalToggle}>
          <Cross />
        </button>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='w-full text-center'>
            <h4 className='text-2xl'>Add ToDo</h4>
            <hr className='border bg-gray-400 w-full my-5' />
          </div>

          <div className='text-5xl w-full text-center pb-6'>
            <h2>{result}</h2>
          </div>
        </div>
      </div>
    );
  }
};

export default ToDoModal;
