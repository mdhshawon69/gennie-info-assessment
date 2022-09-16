import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({ data }) => {
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    dispatch(uiActions.toggleCreateModal());
  };

  return (
    <div className='w-10/12 m-auto space-y-4'>
      <div className='w-full text-right'>
        <button
          className='text-white py-3 px-5 bg-[#007BEC] rounded-lg text-xs'
          onClick={handleModalToggle}>
          Add ToDo
        </button>
      </div>

      {data.map((item) => (
        <ToDoItem todo={item} />
      ))}
    </div>
  );
};

export default ToDoList;
