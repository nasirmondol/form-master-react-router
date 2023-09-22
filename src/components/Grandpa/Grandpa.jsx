import { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

export const SendData = createContext('fish');
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    return (
        <div className="border-2 border-orange-600 rounded-lg p-4 px-5">
            <h3>Grand pa: {money}</h3>

            <MoneyContext.Provider value={[money, setMoney]}>
                <SendData.Provider value={{ name: 'Hasan Iman' }}>
                    <div className="border-2 border-orange-600 rounded-lg p-4">
                        <Father></Father>
                        <Uncle></Uncle>
                    </div>
                </SendData.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;