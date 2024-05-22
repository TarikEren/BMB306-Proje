import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  //Calendar section
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  //User section
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
  const [currentUser, setCurrentUser] = useState([]);
  const [allUsers, setAllUsers] = useState([
    {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
      name: "",
      surname: "",
      accountType: "admin"
    },
    {
      email: "normal@kullanıcı.com",
      username: "normal",
      password: "123",
      name: "normal",
      surname: "normal",
      accountType: "free"
    },
    {
      email: "vip@kullanıcı.com",
      username: "vip",
      password: "123",
      name: "normal",
      surname: "normal",
      accountType: "premium"
    },
  ]);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

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

  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        //Calendar section
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,

        //User section
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
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
