import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GlobalContext from "../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

function ButtonLink({ to, children }) {
  return <Link to={to}><button className="text-2xl  px-11 drop-shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md text-[#fef2f2]">{children}</button></Link>;}

function Account() {
  const { userName, userPassword, userEmail, name, surname, userIsPremium,userIsAdmin,accountType,} =
    useContext(GlobalContext);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [ad, setName] = useState(null);
  const [soyAd, setSurname] = useState(null);
  const [username, setUsername] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);


  function passwordTest() {
    if (
      password === confirmPassword &&
      password.length >= 8 &&
      oldPassword === userPassword
    ) {
      console.log("kabul edildi");
    } else console.log("red edildi");
  }
  async function dataGonder() {
    if (!passwordTest) return null;
    const user = {
      username: username ? username : userName,
      password: password ? password : userPassword,
      email: email ? email : userEmail,
      name: ad ? ad : name,
      surname: soyAd ? soyAd : surname,
    }
    await axios.post("http://localhost:8080/user", user)
    .then((res) => {
      console.log(res.status); //Kontrol için
    })
    .catch((err) => console.error(err));
  }

  // useEffect(() => {
  //   dataGonder();
  // }, [])

  return (
    <>
      <Navbar />

      <div className="h-screen w-screen bg-gradient-to-r from-teal-300 to-blue-400 ">
        <div className="drop-shadow-lg flex-auto mx-[25.5rem] h-screen">
          <div>
            <h1 className="flex-auto inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight ">
              Hesap
            </h1>
          </div>

          <div className="flex flex-row col-span-2">
            <div>
              <div>
                <h2 className="font-mono pl-4 inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight mt-2">
                  Kullanıcı Bilgisi
                </h2>
              </div>
              <div className="drop-shadow-lg m-3 text-lg py-3">
                <input
                  className="opacity-75 rounded w-9/12 p-3 shadow-inner"
                  type="text"
                  value={userName && userName}
                  placeholder="Kullanıcı Adı"
                  required
                  name="username"
                  onChange={(e) => setUsername(e.target.value)} 
              
                /> 

              </div>
              <div className="drop-shadow-lg m-3 text-lg py-3">
                <input
                  className="opacity-75 rounded w-9/12 p-3 shadow-inner"
                  type="email"
                  value={email ? email : " "}
                  placeholder="E-mail"
                  required
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" drop-shadow-lg m-3 py-3 space-x-10 text-lg">
                <input
                  className="opacity-75 rounded w-4/12 p-3 shadow-inner"
                  type="text"
                  value={ad ? ad : " "}
                  placeholder="İsim"
                  required
                  name="Ad"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="opacity-75 rounded w-4/12 p-3 shadow-inner"
                  type="text"
                  value={soyAd ? soyAd : " "}
                  placeholder="Soyisim"
                  required
                  name="Soyad"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <button className="drop-shadow-xl m-4 px-11 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md text-[#fef2f2] text-2xl ">
                Kaydet
              </button>
            </div>
            <div>
              <div className="pl-4 m-2">
                <h1 className="font-mono inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight">
                  Sifre değiştirme
                </h1>
              </div>
              <div className="drop-shadow-lg  text-lg space-x-10">
                <input
                  className="rounded w-9/12 p-3 my-4 shadow-inner"
                  type="password"
                  placeholder="Eski Sifre"
                  required
                  name="Eski Sifre"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="drop-shadow-lg my-5  text-lg space-x-10">
                <input
                  className="rounded w-4/12 p-3 shadow-inner"
                  type="password"
                  placeholder="Yeni Sifre"
                  required
                  name="Yeni Sifre"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="rounded w-4/12 p-3  shadow-inner"
                  type="password"
                  placeholder="Tekrar Sifre"
                  required
                  name="Tekrar Sifre"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                className="text-2xl my-6 py-2 px-11 drop-shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md text-[#fef2f2] "
                onClick={() => {
                  passwordTest();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
          <br></br>
          {(!userIsPremium&&!userIsAdmin)&& <p className="font-mono pl-4 inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight mt-2">Free User</p>}
          {userIsAdmin && <p className="font-mono pl-4 inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight mt-2">Admin</p> }
          {(userIsPremium&&!userIsAdmin)&&<p className="font-mono pl-4 inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight mt-2">Vip</p> }
          {//<p className="text-transform: capitalize text-2xl mx-3 font-bold font-medium inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight">{accountType ? accountType : "Sa"} </p>
          }<br></br>
          <div className=" m-4 text-xl">
            {" "}
            {/* <p className="mb-3">Premium admin veya free user bilgisi</p> */}
            {(!userIsPremium&&!userIsAdmin)&& <ButtonLink
              to="/Plans"
            >
              Vip ol
            </ButtonLink>}
            
            {userIsAdmin && <ButtonLink
              to="/Admin"
            >
              Admin Paneli
            </ButtonLink>}



          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
