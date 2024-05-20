import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function PaymentSection(props) {
    const {setCardNumber, setCvc} = useContext(GlobalContext);
    return (
        <>
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
                <input type="text" name="" id="" className="border rounded w-10/12 p-3" onChange={(e) => setCardNumber(e.target.value)}/>
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
                    <input type="text" className="border rounded p-3" onChange={(e) => setCvc(e.target.value)}/>
                </div>
            </div>
        </>
    );
}

export default PaymentSection;