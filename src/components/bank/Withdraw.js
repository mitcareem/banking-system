import { withDrawAmount } from "../../store/bankSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

const Withdraw = () => {
    const currentBalance = useSelector(state => state.bank.amount)

    const [amount, setAmount] = useState("");
    const amt = Number(amount)
    const dispatch = useDispatch()
    function handler(e) {
        e.preventDefault();
        if (amt <= currentBalance) {
            dispatch(withDrawAmount(amt))
            setAmount("")
        } else {
            console.log("You don't have enough balance!")
        }

    }
    return (
        <form className="container" onSubmit={handler}>
            <input id="input-add-amount" type="number" 
            value={amount}
            onChange={e => setAmount(e.target.value)} />
            <button id='submit-add-amount' type="submit">Withdraw Amount</button>
        </form>

    )
}

export default Withdraw;
