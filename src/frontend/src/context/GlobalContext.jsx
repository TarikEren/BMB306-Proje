import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => { },
    daySelected: null,
    setDaySelected: (day) => { },
    showEventModal: false,
    setShowEventModal: () => { },
    selectedEvent: null,
    allEvents: [],
    setAllEvents: () => { },
    setSelectedEvent: () => { },
    setLabels: () => { },
    labels: [],
    filteredEvents: [],
    userLoggedIn: false,
    userIsPremium: false
});

export default GlobalContext;
