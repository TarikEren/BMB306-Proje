import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import GlobalContext from '../context/GlobalContext';


function Plans() {
  const { price, setPrice } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <Navbar />
  
      <div class="w-screen h-screen m-10 ">
        <div class="row h-screen">
          <div class="ml-8 col-sm-5 h-screen">
            <div class="card h-9/12 text-2xl">
              <div class="card-body ">
                <h5 class="card-title">Vip Paketi</h5>
                <p class="card-text">- Sınırsız randevu hakkı </p>
                <p class="card-text">- 7/24 Destek hattı</p>
                <p class="card-text">-  35 TL </p>
                <br></br>
                <br></br>
                <Link to="/payment" class="w-7/12 btn btn-primary" onClick={() => { setPrice(35); console.log(price) }}>Satın al</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-5 h-screen">
            <div class="card ">
              <div class="card-body text-2xl">
                <h5 class="card-title text-2xl ">Destekçi Paketi</h5>
                <p class="card-text text-2xl">- Destek icindir vip den farkı yoktur  </p>
                <p class="card-text text-2xl">- Sınırsız ranevu hakkı </p>
                <p class="card-text text-2xl">- 7/24 Destek hattı</p>
                <p class="card-text text-2xl">- 60 TL</p>
                <br></br>
                <Link to="/payment" class="w-7/12 btn btn-primary" onClick={() => { setPrice(60) }}>Satın al</Link>
              </div>
            </div>
          </div>
        </div>




      </div>
    </React.Fragment>
  );
}

export default Plans;