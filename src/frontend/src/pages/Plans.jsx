import React from 'react';
import Navbar from '../components/Navbar';


function Plans() {
  return (
    <React.Fragment>
      <Navbar/>
      <div class="w-screen h-screen m-10 ">
      <div class="row h-screen">
  <div class="col-sm-6 h-screen">
    <div class="card h-9/12">
      <div class="card-body ">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6 h-screen">
    <div class="card ">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>



     
</div>
    </React.Fragment>
  );
}

export default Plans;