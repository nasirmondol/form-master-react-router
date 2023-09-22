import { useContext } from "react";
import { MoneyContext, SendData } from "../Grandpa/Grandpa";

const CousineSon = () => {
    const data = useContext(SendData);
    const [money, setMoney] = useContext(MoneyContext)
    console.log(data);
    return (
        <div className="border-2 border-orange-600 rounded-md p-5">
            <h4>Cousine Son: {data.name}</h4>
            <h3>Got money: {money}</h3>
            <button onClick={() => setMoney(money + 500)}>Add Money</button>
        </div>
    );
};

export default CousineSon;