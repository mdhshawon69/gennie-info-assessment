import React from "react";
import { DeleteIcon, EditIcon, NecessaryIcon } from "../../constants/icons";

const ToDoItem = ({ todo }) => {
  return (
    <div className='w-full py-4 px-3 rounded-md shadow-md ring-1 ring-gray-300 flex justify-between items-center'>
      <div className='flex flex-col justify-start items-start flex-1 gap-1'>
        <h3 className='font-semibold text-lg text-gray-800'>{todo.title}</h3>
        <p className='text-xs text-[#8A8A8A]'>{todo.note}</p>
        <p className='flex justify-center items-center gap-1 text-xs text-[#8A8A8A]'>
          <span>
            Start Date: {todo.start_date} at {todo.start_time}
          </span>{" "}
          <span>-</span>
          <span>
            {todo.end_date}at {todo.end_time}
          </span>
        </p>
      </div>

      <div className='flex justify-center items-center gap-4'>
        <button>
          <NecessaryIcon />
        </button>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
