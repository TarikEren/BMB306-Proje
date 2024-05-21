import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, userIsPremium }
  = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 bg-gradient-to-r from-teal-300 to-blue-400 flex items-center text-white justify-between">
      <div className="flex flex-row items-center">
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
        <a href="/" className="mr-10 text-xl text-white fond-bold">
          Calendar
        </a>
        <button
          onClick={handleReset}
          className="border rounded py-2 px-4 mr-5"
        >
          Today
        </button>
        <button onClick={handlePrevMonth} className="p-3 mr-1 border rounded">
          <span className="material-icons-outlined cursor-pointer">
            <FaChevronLeft />
          </span>
        </button>
        <button onClick={handleNextMonth} className="p-3 ml-1 border rounded">
          <span className="material-icons-outlined cursor-pointer">
            <FaChevronRight />
          </span>
        </button>
        <h2 className="ml-4 text-xl text-white font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>
      </div>
      <div className="flex flex-row items-center space-x-7">
        {userIsPremium ? (
          <a href="/plans" className="p-3 border rounded">Plans</a>
        ) : (
          <a href="/payment" className="p-3 border rounded">Buy Premium</a>
        )}
        <a href="/account" className="p-3 border rounded">Account</a>
      </div>
    </header>
  );
}
