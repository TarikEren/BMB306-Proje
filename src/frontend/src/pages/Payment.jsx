import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import PaymentSection from '../components/PaymentSection';
import PriceSection from '../components/PriceSection';

import Visa from "../assets/visa.svg";
import MasterCard from "../assets/mastercard.svg";

function Payment() {
    const [render, setRender] = useState(false);
    const [cardNumber, setCardNumber] = useState(null);
    return (
        <React.Fragment>
            <Navbar />
            {/* Wrapper */}
            <div className="h-screen w-screen">
                {/* Container */}
                <div className="flex flex-row justify-center mt-10 space-x-4">
                    <div className="">
                        <div className="border w-12/12 p-5 space-y-10">
                            <header className='flex flex-col'>
                                <h1 className='font-semibold text-3xl mb-2'>Ödeme</h1>
                                <p>Bütün alışverişler şifreli ve güvenlidir</p>
                            </header>
                            {/* Payment Options */}
                            <div className="flex flex-col">
                                <div className="flex flex-row border rounded p-2 justify-between">
                                    <div className="flex flex-row space-x-3 items-center ml-4">
                                        <p className='font-semibold text-lg'>Kredi Kartı</p>
                                    </div>
                                    <div className="flex flex-row items-center space-x-3">
                                        <img src={Visa} alt="" />
                                        <img src={MasterCard} alt="" />
                                    </div>
                                </div>
                            </div>
                            <PaymentSection />
                        </div>
                    </div>
                    <PriceSection plan={59.99} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Payment;