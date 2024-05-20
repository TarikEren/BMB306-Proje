import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

function PriceSection(props) {
    function sendPayment() {

    }
    return (
        <div className="border w-12/12 p-5 h-fit w-3/12 space-y-5">
            <h1 className='text-2xl font-semibold'>
                Sipariş Özeti
            </h1>
            <p className='text-xl'>Ara Toplam: {props.plan} TL</p>
            <p className='text-xl'>KDV: 15.99 TL</p>
            <hr />
            <p className='text-2xl font-semibold'>Genel Toplam: {props.plan + 15.99} TL</p>
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
    );
}

export default PriceSection;