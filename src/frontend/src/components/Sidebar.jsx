import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border border-gray-500 p-5 w-64 bg-blue-300">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
