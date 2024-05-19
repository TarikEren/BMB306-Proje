import React from 'react';
import Navbar from '../components/Navbar';

function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-screen w-screen">
        <div className="grid grid-cols-7">
          <div className="col-span-2">
            Login
          </div>
          <div className="col-span-5">
            Resim
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;