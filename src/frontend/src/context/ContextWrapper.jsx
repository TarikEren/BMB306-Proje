import React, {
    useState,
    useEffect,
    useMemo,
} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userIsPremium, setUserIsPremium] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    const [cvc, setCvc] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [accountType, setAccountType] = useState(null);
    const [price, setPrice] = useState(0);
    

    const filteredEvents = useMemo(() => {
        return allEvents.filter((evt) =>
            labels
                .filter((lbl) => lbl.checked)
                .map((lbl) => lbl.label)
                .includes(evt.label)
        );
    }, [allEvents, labels]);

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth);
        }
    }, [smallCalendarMonth]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);


    return (
        <GlobalContext.Provider
            value={{
                //Takvim kısmı
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal,
                allEvents,
                setAllEvents,

                //TODO: Tekrar bak
                selectedEvent,
                setSelectedEvent,
                setLabels,
                labels,
                filteredEvents,
                
                //User kısmı
                userLoggedIn,
                setUserLoggedIn,
                userIsPremium,
                setUserIsPremium,
                cardNumber,
                setCardNumber,
                cvc,
                setCvc,
                email,
                setEmail,
                userName,
                setUserName,
                userPassword,
                setUserPassword,
                accountType,
                setAccountType,
                price,
                setPrice
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
