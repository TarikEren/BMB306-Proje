import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import GlobalContext from '../context/GlobalContext';


function Plans() {
  const { price, setPrice } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <Navbar />
      {/* Wrapper */}
      <div class="w-screen h-screen">
        {/* Container */}
        <div className="mt-10 p-10 flex flex-row justify-around space-x-10">

          {/* Plan 1*/}
          <div className="border rounded p-3 w-7/12 flex flex-col justify-around">
            {/* Başlık */}
            <header className='flex flex-col space-y-3'>
              <div className="text-center">
                <h1 className='font-semibold text-4xl mb-3'>VIP Paketi</h1>
                <h2 className='font-semibold text-3xl'>35 TL</h2>
              </div>
              <hr />
              <h2 className='font-semibold text-xl'>Avantajlar</h2>
            </header>
            {/* Avantajlar */}
            <div className="mt-2 ml-5">
              <ol className='list-disc'>
                <li>
                  <p>Sınırsız randevu hakkı</p>
                </li>
              </ol>
            </div>
            {/* Satın Al */}
            <footer className='flex flex-row justify-center items-center'>
              <Link to="/payment" className='py-2 w-4/12 bg-blue-500 rounded text-white text-center' onClick={() => { setPrice(35) }} >
                Satın Al
              </Link>
            </footer>
          </div>

          {/* Plan 2*/}
          <div className="border rounded p-3 w-7/12 flex flex-col justify-around">
            {/* Başlık */}
            <header className='flex flex-col space-y-3'>
              <div className="text-center">
                <h1 className='font-semibold text-4xl mb-3'>Destekçi Paketi</h1>
                <h2 className='font-semibold text-3xl'>60 TL</h2>
              </div>
              <hr />
              <h2 className='font-semibold text-xl'>Avantajlar</h2>
            </header>
            {/* Avantajlar */}
            <div className="mt-2 ml-5">
              <ol className='list-disc'>
                <li>
                  <p>Sınırsız randevu hakkı</p>
                </li>
                <li>
                  <p>7/24 Destek hattı</p>
                </li>
              </ol>
            </div>
            {/* Satın al */}
            <footer className='flex flex-row justify-center items-center'>
              <Link to="/payment" className='py-2 w-4/12 bg-blue-500 rounded text-white text-center' onClick={() => { setPrice(60) }}>
                Satın Al
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Plans;