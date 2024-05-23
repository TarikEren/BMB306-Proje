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
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [allUsers, setAllUsers] = useState([
    {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
      name: "",
      surname: "",
      accountType: "admin",
      events: []
    },
    {
      email: "normal@kullanici.com",
      username: "normal",
      password: "123",
      name: "normal",
      surname: "kullanici",
      accountType: "free",
      events: []
    },
    {
      email: "vip@kullanici.com",
      username: "vip",
      password: "123",
      name: "vip",
      surname: "kullanici",
      accountType: "premium",
      events: []
    },
  ]);

  let refreshDatabase = false;

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);


  //Database
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);


  useEffect(() => {
    if (allUsers.length > 3) 
    localStorage.setItem("accounts", JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    if (userEmail)
      localStorage.setItem("currentEmail", JSON.stringify(userEmail));
  }, [userEmail]);

  useEffect(() => {
    if (userName)
      localStorage.setItem("currentUsername", JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    if (userPassword)
      localStorage.setItem("currentPassword", JSON.stringify(userPassword));
  }, [userPassword]);

  useEffect(() => {
    if (accountType)
      localStorage.setItem("accountType", JSON.stringify(accountType));
  }, [accountType]);

  useEffect(() => {
    if (name)
      localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    if (surname)
      localStorage.setItem("surname", JSON.stringify(surname));
  }, [surname]);



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
        userEmail,
        setUserEmail,
        accountType,
        setAccountType,
        price,
        setPrice,
        name,
        setName,
        surname,
        setSurname,
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
