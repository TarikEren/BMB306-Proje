import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { FaCheck, FaBookmark } from "react-icons/fa";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  async function postEvent(event) {
    //TODO: Create event
  }

  async function patchEvent(event) {
    //TODO: Get event and patch it
  }

  function handleSubmit(e) {
    e.preventDefault();
    //TODO: Send the event to the controller
  }
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
      <form className='bg-white rounded-lg shadow-2xl w-1/4'>
        <header className='bg-gray-100 px-4 py-2 flex justify-end items-center'>
          <button onClick={() => { setShowEventModal(false) }} className='p-1'>
            <span className="text-gray-400 font-bold">
              X
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="flex flex-col">

            {/* Başlık Kısmı */}
            <input type="text" name="title" placeholder='Başlık'
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
              required
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full focus:outline-none focus:ring-0 focus:border-blue-500'
            />

            {/* Açıklama Kısmı */}
            <input type="text" name="title" placeholder='Açıklama'
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
              required
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full focus:outline-none focus:ring-0 focus:border-blue-500'
            />

            {/* Başlangıç Tarihi Seçimi*/}
            <div className="flex flex-row items-center space-x-5">
              <span className="text-gray-400 mt-4">
                Başlangıç
              </span>
              <div className="flex flex-row">
                <button className='mt-4 p-1 hover:bg-gray-400 hover:text-white rounded'>
                  <span>
                    {daySelected.format("dddd, MMMM, DD")}
                  </span>
                </button>
              </div>
            </div>

            {/* Bitiş Tarihi Seçimi */}
            <div className="flex flex-row items-center space-x-5">
              <span className="text-gray-400 mt-4">
                Bitiş
              </span>
              <div className="flex flex-row">
                <button className='mt-4 p-1 hover:bg-gray-400 hover:text-white rounded'>
                  <span>
                    {daySelected.format("dddd, MMMM, DD")}
                  </span>
                </button>
              </div>
            </div>

            {/* Etiket seçme kısmı - Kaldırılabilir veri tabanında karşılığı yok */}
            <div className="flex flex-row space-x-10 mt-5">
              <span className='text-gray-400 mt-1'>
                <FaBookmark className='text-blue-500' />
              </span>
              <div className="flex gap-x-2">
                <span
                  onClick={() => setSelectedLabel("indigo")}
                  className={`bg-indigo-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "indigo" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
                <span
                  onClick={() => setSelectedLabel("green")}
                  className={`bg-green-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "green" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
                <span
                  onClick={() => setSelectedLabel("gray")}
                  className={`bg-gray-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "gray" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
                <span
                  onClick={() => setSelectedLabel("blue")}
                  className={`bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "blue" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
                <span
                  onClick={() => setSelectedLabel("red")}
                  className={`bg-red-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "red" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
                <span
                  onClick={() => setSelectedLabel("purple")}
                  className={`bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                  {selectedLabel === "purple" &&
                    <span className='text-white text-sm'>
                      <FaCheck />
                    </span>
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Yükle */}
        <footer className='flex justify-end border-t p-3 mt-5'>
          <button type="submit"
            className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'>
            Save
          </button>
        </footer>
      </form>
    </div>
  );

}
