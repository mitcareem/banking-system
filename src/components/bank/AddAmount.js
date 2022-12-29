import { addAmount } from "../../store/bankSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

const AddAmount = () => {
    const [amount, setAmount] = useState("");
    const amt = Number(amount);
    const dispatch = useDispatch();
    function handler(e) {
        e.preventDefault();
        dispatch(addAmount(amt));
        setAmount("");
    }
    return (
        <form className="container" onSubmit={handler}>
            <input
                value={amount}
                id="input-add-amount"
                type="number"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button id="submit-add-amount" type="submit">
                Deposit Amount
            </button>
        </form>
    );
};

export default AddAmount;
