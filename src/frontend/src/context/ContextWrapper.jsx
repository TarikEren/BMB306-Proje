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
    const [userEmail, setUserEmail] = useState(null);
    const [accountType, setAccountType] = useState(null);
    const [price, setPrice] = useState(null);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const [userIsAdmin, setUserIsAdmin] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);
    

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
                email: userEmail,
                setEmail: setUserEmail,
                userName,
                setUserName,
                userPassword,
                setUserPassword,
                accountType,
                setAccountType,
                price,
                setPrice,
                name,
                surname,
                userIsAdmin,
                setUserIsAdmin,
                currentUserId,
                setCurrentUserId
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
