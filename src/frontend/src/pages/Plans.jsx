import React from 'react';
import Navbar from '../components/Navbar';


function Plans() {
  return (
    <React.Fragment>
      <Navbar/>
      <div class="w-screen h-screen m-10 ">
      <div class="row h-screen">
  <div class="ml-8 col-sm-5 h-screen">
    <div class="card h-9/12">
      <div class="card-body ">
        <h5 class="card-title">Vip Paketi</h5>
        <p class="card-text"> -Sınırsız randevu hakkıı </p>
        <p class="card-text">7/24 Destek hattı</p>
        <p class="card-text">-  35 TL </p>
        <br></br>
        <br></br>

        
        <a href="/payment" class="w-7/12 btn btn-primary">Satın al</a>
      </div>
    </div>
  </div>
  <div class="col-sm-5 h-screen">
    <div class="card ">
      <div class="card-body">
        <h5 class="card-title">Destekçi Paketi</h5>
        <p class="card-text"> -Destek icindir vip den farkı yoktur  </p>
        <p class="card-text"> -Sınırsız ranevu hakkı </p>
        <p class="card-text">-7/24 Destek hattı</p>
        <p class="card-text">-60 TL</p>
        <br></br>
        <a href="/payment" class="w-7/12 btn btn-primary">Satın al</a>
      </div>
    </div>
  </div>
</div>



     
</div>
    </React.Fragment>
  );
}

export default Plans;