import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import { FaArrowCircleRight } from "react-icons/fa";

import Visa from "../assets/visa.svg";
import MasterCard from "../assets/mastercard.svg";

function Payment() {
    const [cardNumber, setCardNumber] = useState(null);
    const [validCardNumber, setValidCardNumber] = useState(null);
    const [cardOwner, setCardOwner] = useState(null);
    const checkValidOwner = () => {
        let hasNoDigits = /^[a-zA-Z]+$/.test(cardOwner);
        if (cardOwner !== null && hasNoDigits) {
            return true;
        }
        return false;
    }
    const checkValidNumber = () => {
        let hasNoLetters = /^\d+$/.test(cardNumber);
        if (cardNumber !== null && hasNoLetters && cardNumber.length === 16) return true;
        return false;
    }
    function sendPayment() {
        if (checkValidNumber() && checkValidOwner()) {
            //Sorun yoksa kullanıcıyı premium yap
            return true;
        }
        return null;
    }
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
                            <div className="pl-1 flex flex-row items-center justify-between">
                                <label>
                                    <h1 className="text-xl font-semibold">
                                        Kredi kartı
                                    </h1>
                                </label>
                                <select name="" id="" className="bg-white border rounded w-10/12 p-3">
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">Mastercard</option>
                                </select>
                            </div>
                            <div className="pl-1 flex flex-row items-center justify-between">
                                <label>
                                    <h1 className="text-xl font-semibold">
                                        Kart Sahibi
                                    </h1>
                                </label>
                                <input type="text" name="" id="" className="border rounded w-10/12 p-3" />
                            </div>
                            <div className="pl-1 flex flex-row items-center justify-between">
                                <label>
                                    <h1 className="text-xl font-semibold">
                                        Kart Numarası
                                    </h1>
                                </label>
                                <input type="text" name="" id="" className="border rounded w-10/12 p-3" onChange={(e) => setCardNumber(e.target.value)} />
                            </div>
                            <div className="pl-1 flex flex-row items-center space-x-10">
                                <div className="flex flex-col space-y-3">
                                    <label>
                                        <h1 className="text-xl font-semibold">
                                            Ay
                                        </h1>
                                    </label>
                                    <input type="number" className="border rounded p-3" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label>
                                        <h1 className="text-xl font-semibold">
                                            Yıl
                                        </h1>
                                    </label>
                                    <input type="number" className="border rounded p-3" />
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <label>
                                        <h1 className="text-xl font-semibold">
                                            CVC
                                        </h1>
                                    </label>
                                    <input type="text" className="border rounded p-3" onChange={(e) => setCvc(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border w-12/12 p-5 h-fit w-3/12 space-y-5">
                        <h1 className='text-2xl font-semibold'>
                            Sipariş Özeti
                        </h1>
                        <p className='text-xl'>Ara Toplam: TL</p>
                        <p className='text-xl'>KDV: 15.99 TL</p>
                        <hr />
                        <p className='text-2xl font-semibold'>Genel Toplam: TL</p>
                        <button
                            className='p-2 rounded border w-full bg-green-400 text-white font-semibold text-lg'
                            onClick={sendPayment}>
                            <div className="flex flex-row items-center justify-center space-x-3">
                                <p>
                                    Devam Et
                                </p>
                                <span>
                                    <FaArrowCircleRight />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Payment;