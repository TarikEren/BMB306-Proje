import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { FaArrowCircleRight } from "react-icons/fa";

import Visa from "../assets/visa.svg";
import MasterCard from "../assets/mastercard.svg";
import GlobalContext from '../context/GlobalContext';

function Payment() {
    const [cardNumber, setCardNumber] = useState(null);
    const [validCardNumber, setValidCardNumber] = useState(null);
    const [cardOwner, setCardOwner] = useState(null);
    const [validCardOwner, setValidCardOwner] = useState(null);
    const { price, setUserIsPremium } = useContext(GlobalContext);
    const kdv = price - (price / 1.18);
    let navigate = useNavigate();

    const checkValidOwner = () => {
        const ownerBox = document.getElementById("card-owner");
        let hasNoDigits = !/[^a-z]/i.test(cardOwner);
        if (cardOwner !== null && hasNoDigits) {
            setValidCardOwner(true);
            ownerBox.classList.remove("border-red-500");
            return true;
        }
        ownerBox.classList.add("border-red-500");
        return false;
    }
    const checkValidNumber = () => {
        const numberBox = document.getElementById("card-number");
        let hasNoLetters = /^\d+$/.test(cardNumber);
        if (cardNumber !== null && hasNoLetters && cardNumber.length === 16) {
            setValidCardNumber(true);
            numberBox.classList.remove("border-red-500");
            return true;
        }
        numberBox.classList.add("border-red-500");
        setValidCardNumber(false);
        return false;
    }
    const checkValidity = () => {
        if (checkValidNumber() && checkValidOwner()) {
            return true;
        }
        return false;
    }
    function sendPayment() {
        if (checkValidity()) {
            //Sorun yoksa kullanıcıyı premium yap
            setUserIsPremium(true);
            navigate("/calendar");
            return true;
        }
        return false;
    }
    return (
        <React.Fragment>
            <Navbar />
            {/* Wrapper */}
            <div className="h-screen w-screen bg-gradient-to-r from-teal-300 to-blue-400">
                {/* Container */}
                <div className="flex sm:flex-col lg:flex-row lg:justify-center lg:space-x-7">
                    <div className="">
                        <div className="mt-10 border bg-white w-12/12 p-5 space-y-10 rounded">
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
                            <div className="pl-1 flex flex-row items-center">
                                <label>
                                    <h1 className="text-xl font-semibold mr-2">
                                        Kart
                                    </h1>
                                </label>
                                <select name="" id="" className="bg-white border rounded w-full p-3 ml-16">
                                    <option value="visa">Visa</option>
                                    <option value="mastercard">Mastercard</option>
                                </select>
                            </div>
                            <div className="pl-1 flex flex-row items-center">
                                <label>
                                    <h1 className="text-xl font-semibold">
                                        Kart Sahibi
                                    </h1>
                                </label>
                                <div className="flex flex-col w-full">
                                    <input type="text" name="" id="card-owner" className="border rounded p-3 ml-6" onChange={(e) => setCardOwner(e.target.value)} />
                                    {validCardOwner === false && (
                                        <div className="">
                                            <p className='text-gray-500'>Geçersiz kart sahibi</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="pl-1 flex flex-row items-center">
                                <label>
                                    <h1 className="text-xl font-semibold">
                                        Kart Numarası
                                    </h1>
                                </label>
                                <div className="flex flex-col w-full">
                                    <input type="text" name="" id="card-number" className="border rounded p-3" onChange={(e) => setCardNumber(e.target.value)} />
                                    {validCardNumber === false && (
                                        <div className="">
                                            <p className='text-gray-500'>Geçersiz kart numarası</p>
                                        </div>
                                    )}
                                </div>
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
                                    <input type="text" className="border rounded p-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded mt-10 border ml-3 p-5 h-fit lg:w-3/12 sm:w-full space-y-5">
                        <h1 className='text-2xl font-semibold'>
                            Sipariş Özeti
                        </h1>
                        <p className='text-xl'>Ara Toplam: {(price - kdv).toFixed(2)} TL</p>
                        <p className='text-xl'>KDV: {(kdv).toFixed(2)} TL</p>
                        <hr />
                        <p className='text-2xl font-semibold'>Genel Toplam: {price} TL</p>
                        <button
                            className='p-2 rounded border w-full bg-green-400 text-white font-semibold text-lg'
                            onClick={() => {
                                sendPayment()
                            }}>
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