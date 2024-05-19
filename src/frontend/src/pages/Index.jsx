import React from 'react';
import Navbar from '../components/Navbar';

function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-screen w-screen">
        <div className="grid grid-cols-7 h-screen">
          <div className="col-span-2 bg-green-400">
            Login
          </div>
          <div className="col-span-5 bg-blue-300">
            Resim
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;