import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../util";
import CalendarHeader from "../components/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const {monthIndex, showEventModal, accountType} = useContext(GlobalContext);
    
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
        console.log("Account Type: ", accountType);
    }, [monthIndex, accountType]);


    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="h-screen flex flex-col">
                <CalendarHeader/>
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Calendar;