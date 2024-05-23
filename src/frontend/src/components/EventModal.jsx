import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { FaRegTrashCan, FaCheck, FaRegClock, FaRegClipboard } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];


export default function EventModal() {

  let eventCountStr = localStorage.getItem("eventCount");
  let eventCount = parseInt(eventCountStr);
  let accountType = localStorage.getItem("accountType").replace(/['"]+/g, '');
  useEffect(() => {
    console.log(eventCount);
  }, [eventCount])
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Event count: ", eventCount);
    console.log("Account type: ", accountType);
    console.log("Types are equal: ", typeof accountType === typeof "free");
    console.log(localStorage.getItem("accountType").trim() === "free");
      if (eventCount >= 5 && accountType.localeCompare("free") === 0) {
        alert("Randevu hakkınızı doldurdunuz, premium satın almanız lazım.");
        return "fail";
      }
      const calendarEvent = {
        title,
        description,
        label: selectedLabel,
        day: daySelected.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now(),
      };
      if (selectedEvent) {
        dispatchCalEvent({ type: "update", payload: calendarEvent });
      } else {
        dispatchCalEvent({ type: "push", payload: calendarEvent });
      }

      setShowEventModal(false);
      return "success";
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-3 flex justify-end items-center">
          <div>
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400 text-2xl">
                <TfiClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-600 text-xl">
              <FaRegClock />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-600 text-xl">
              <FaRegClipboard />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-blue-500 text-xl">
              <FaBookmark />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      <FaCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-between border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
          {selectedEvent && (
            <button
              onClick={() => {
                dispatchCalEvent({
                  type: "delete",
                  payload: selectedEvent,
                });
                setShowEventModal(false);
              }}
              className="material-icons-outlined rounded px-6 py-2 cursor-pointer text-2xl bg-red-500 text-white"
            >
              <FaRegTrashCan />
            </button>
          )}
        </footer>
      </form>
    </div>
  );
}
