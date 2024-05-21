import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import GlobalContext from '../context/GlobalContext';
//npm run dev başlatmak icin
function Account() {
  const {userName,userPassword,setUserName,setUserPassword,} = useContext(GlobalContext)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [ad, setName] = useState(null)
  const [soyAd, setSurname] = useState(null)
  const [username, setUsername] = useState(null)
  const [oldPassword, setOldPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  
 
  
  function paswordtest(){
    if(password===confirmPassword && password.length >=8 && oldPassword=== userPassword){
      console.log("kabul edildi")
    }
    else console.log("red edildi")
  }
  function dataGonder(){

  }

  
  return (
    <>
      <Navbar />
      <div className="px-4 flex-auto ">
        <div className="m-6 flex-auto mx-[25.5rem] bg-teal-300 rounded h-screen" >
          <div>
            <h1 className="m-4 p flex-auto inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight ">Hesap</h1>
          </div>
        
      
          <div>
            <h2 className=" inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight">User Bilgisi</h2>
          </div>
      <div className= "m-3 text-lg py-3">
      <input className= "rounded w-6/12 p-3 shadow-inner" type="text" value={userName ? userName : " "}  required name="Username" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className= "m-3 text-lg py-3">
      <input className= "rounded w-6/12 p-3 shadow-inner" type="text" value={email ? email : " "} required name="Email" onChange={(e) => setEmail(e.target.value)} />  
      </div>
      <div className= " m-4 space-x-10 text-lg">
        <input className= "rounded w-4/12 p-3 shadow-inner" type="text" value={ad ? ad : " "} required name="Ad" onChange={(e) => setName(e.target.value)} /> 
        <input className= "rounded w-4/12 p-3 shadow-inner" type="text" value={soyAd ? soyAd : " "} required name="Soyad" onChange={(e) => setSurname(e.target.value)} /> 
      </div>
      <button className="m-4 px-11 rounded-full outline outline-offset-2 outline-blue-500 text-2xl ">Kaydet</button>
      <div className= " m-4 text-xl"> <p>premiyum admin veya free user bilgisi 
        </p> 
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md text-[#fef2f2]"  >premiuma gec</button>
        <button className="mx-10  outline outline-offset-1 outline-1 outline-blue-500 ">Admin paneli</button>
      </div>
      <div>
        <h1 className="inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight">Sifre değiştirme 
          </h1>
      </div>
      <div className= "m-4 text-lg space-x-10">
      <input className= "rounded w-4/12 p-3 shadow-inner" type="password" placeholder="Eski Sifre" required name="Eski Sifre"onChange={(e) => setOldPassword(e.target.value)} />
      </div>
      <div className= "m-4 text-lg space-x-10">
        <input className= "rounded w-4/12 p-3 shadow-inner" type="password" placeholder="Yeni Sifre" required name="Yeni Sifre"onChange={(e) => setPassword(e.target.value)} />
        <input className= "rounded w-4/12 p-3 shadow-inner" type="password" placeholder="Tekrar Sifre" required name="Tekrar Sifre"onChange={(e) => setConfirmPassword(e.target.value)} />
        
      </div>
      
      <button className="px-11 text-2xl m-4 rounded-full outline outline-offset-2 outline-blue-500 "onClick= {()=>{paswordtest()
     }}>Save Changes</button>
 
          
        </div>
      </div>
    </>
  );
}

export default Account;