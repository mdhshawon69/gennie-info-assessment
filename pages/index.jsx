import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Backdrop, ToDoModal, ToDoList } from "../components";
import { uiActions } from "../store/uiSlice";

const Home = () => {
  const showCreateModal = useSelector((state) => state.ui.showCreateModal);
  const [data, setData] = useState([]); // State for storing fatched data from the API

  useEffect(() => {
    fetch("http://task.atiar.info/api/todo") //Fetching the data from the API with the useEffect hook and fetch api.
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ToDoList data={data} />

      {showCreateModal && (
        <Backdrop>
          <ToDoModal />
        </Backdrop>
      )}
    </div>
  );
};

export default Home;
